import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CartComp from '../components/cart/CartComp'
import { getCartTotal } from '../redux/cartSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {carts, totalAmount, itemCount} = useSelector(state => state.carts)
  
    console.log(carts, totalAmount, itemCount, "carts")
  
    useEffect(()=>{
      dispatch(getCartTotal())
    }, [dispatch])

  return (
    <div>
        {
            carts?.length > 0 ? <div>
               {
                carts?.map((cart,i)=>(
                    <CartComp key={i} cart={cart}/>
                ))
               }
               <div className='flex items-center justify-end text-xl'>TOPLAM TUTAR :  <span className='font-bold text-2xl ml-2'>{totalAmount} TL</span></div>
               
            </div> :
            <div className='font-bold flex items-center justify-center text-3xl pt-6'>
                Kartınız Boş
            </div>
        }
    </div>
  )
}

export default Cart