import React, { useEffect, useState } from 'react'
import { products } from '../product'
import { useDispatch } from 'react-redux';
import { changeQuantity } from "../stores/Cart";

const CartItem = (props) => {
    const { productId, quantity } = props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId])
    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1,
        }))
    }
    const handlePlusQuestity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1,
        }))
    }
    console.log(detail);

    return (
        <div className='flex justify-between item-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
            <img src={detail.image} alt="" className='w-12' />
            <h3>{detail.name}</h3>
            <p>${detail.price * quantity}</p>
            <div className="w-20 flex justify-between gap-2">
                <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinusQuantity}></button>
                <button className='w-6 h-6 flex items-center justify-center font-semibold'>{quantity}</button>
                <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handlePlusQuestity}></button>
            </div>

        </div>
    )
}

export default CartItem
