"use client"
import React from 'react'
import { useContext } from 'react'
import AppContext from '../context'
import './style.css'

const Cart = () => {

    //getting cart Data
    const{cartData, setCartData} = useContext(AppContext)

    //Increasing the quantity
    const inc = (id) =>
        {
            setCartData(cartData.map(item =>
                item.id === id ? {...item, qty:item.qty + 1}:item
            ))
        }
    
        //deceresing quantity
        const dec = (id) =>
            {
                setCartData(cartData.map(item =>
                    item.id === id && item.qty > 1 ? {...item, qty:item.qty - 1}:item
                ))
            }
    
        //Removing Product
        const removeitem = (id) =>
            {
                setCartData(cartData.filter(item => item.id !== id))
            }
         
        //Calculating total price
        const totalprice = cartData.reduce((acc, item) => acc + item.qty * item.price, 0)    
    

  return (
    <>
    <div className='cart_page'>
        <div className='container'>
            <div className='cart_section'>
                <h2>Shopping Cart</h2>
                {
                    cartData.map((curElm) =>
                    {
                        return(
                            <>
                            <div className='cart_item'>
                                <img src={curElm.img} className='cart_item_img' />
                                <div className='item_details'>
                                    <h3>{curElm.Name}</h3>
                                    <p>${curElm.price}</p>
                                    <div className='quantity_warpers'>
                                        <button className='qty_btn' onClick={() => dec(curElm.id)}>-</button>
                                        <span className='qty'>{curElm.qty}</span>
                                        <button className='qty_btn' onClick={() => inc(curElm.id)}>+</button>
                                    </div>
                                </div>
                                <p className='cart_item_price'>${curElm.price * curElm.qty}</p>
                                <button className='rmv_btn' onClick={() => removeitem(curElm.id)}>&times;</button>
                            </div>
                            </>
                        )
                    })
                }
            </div>
            <div className='summary_section'>
                <h2>Order Summary</h2>
                <div className='summary_detail'>
                    <span>SubTotal:</span>
                    <span>${totalprice}</span>
                </div>
                <div className='summary_detail'>
                    <span>Shipping:</span>
                    <span>FREE</span>
                </div>
                <div className='summary_detail total'>
                    <span>Total:</span>
                    <span>${totalprice}</span>
                </div>
                <input type='text' placeholder='Voucher Code' className='voucher_input' />
                <button className='apply_voucher'>Apply Voucher</button>
                <button className='checkout_btn'>Checkout Now</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart