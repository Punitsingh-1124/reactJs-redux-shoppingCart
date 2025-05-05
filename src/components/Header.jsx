import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import iconCard from '../assets/iconCard.png'
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../stores/Cart";

const Header = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items)
    const dispatch = useDispatch();

    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts])

    const handleOpenTabCart = () => {
        dispatch(toggleStatusTab());
    }







    return (
        <header className=' flex justify-between items-center mb-5'>
            <Link to="/" className='text-xl font-semibold'>Home</Link>
            <div className='w-10 b-10 bg-gray-100 rounded-full flex justify-center items-center relative' onClick={handleOpenTabCart}>
                <img src={iconCard} alt="" className='w-6 ' />
                <span className=' absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 g-5 rounded-full flex justify-center item '>{totalQuantity}</span>
            </div>
        </header>
    )
}

export default Header