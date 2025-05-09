import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem';
import { toggleStatusTab  } from "../stores/Cart";


const CardTab = () => {
  const carts = useSelector(store => store.cart.items);
  const statusTab = useSelector(store => store.cart.stateTab);
  const dispatch = useDispatch();

  const handleCloseTabCart =()=>{
    dispatch(toggleStatusTab());
  }





  return (
    <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 ${statusTab === false ? 'translate-x-full' : ''}`}>      
    <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
      <div>
        {carts.map((item, key) =>
          <CartItem key={key} data={item}></CartItem>
        )}
      </div>
      <div className='grid grid-cols-2'>
        <button className='bg-black text-white ' onClick={handleCloseTabCart}>CLOSE</button>
        <button className='bg-amber-600 text-white '>CHECKOUT</button>
      </div>
    </div>
  )
}

export default CardTab
