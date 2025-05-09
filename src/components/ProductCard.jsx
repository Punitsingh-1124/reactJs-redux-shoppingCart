import React from 'react'
import { Link } from 'react-router-dom';
import iconCard from '../assets/iconCard.png'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../stores/Cart";


const ProductCard = (props) => {
  const carts = useSelector(store => store.cart.items);
  console.log(carts);

  const { id, name, price, image, slug } = props.data;
  const dispatch = useDispatch();
  const handleAddToCard = () => {
    dispatch(addToCart({
      productId: id,
      quantity: 1,
    }))
  }


  return (
    <div className='bg-white p-5 rounded-xl shadow-sm'>
      <Link to={slug}  >
        <img src={image} alt="" className='w-full h-88 object-cover object-top drop-shadow-[8_88px_30px_#0007]' />

      </Link>
      <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
      <div className="flex justify-between items-center">
        <p className=''>
          <span className='text-2xl font-medium '>{price}</span>
        </p>
        <button className='bg-gray-200 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2' onClick={handleAddToCard}>
          <img src={iconCard} alt="" className='w-5' />
          Add to Card
        </button>
      </div>
    </div>
  )
}

export default ProductCard
