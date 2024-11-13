import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import AppContext from '../context';
import { IoClose } from "react-icons/io5";
import { IoTrashBinOutline } from "react-icons/io5";
import './style.css'
import Link from 'next/link';

const CartPopup = ({cartOpen,closeCart}) => {
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
    {
        cartOpen && (
            <div className='cart_sidebar'>
                <div className='cart_header'>
                    <h2><FaShoppingCart /> ({cartData.length} items)</h2>
                    <button className='close_btn' onClick={closeCart}>
                        <IoClose />
                    </button>
                </div>
                {
                    cartData.length === 0 ?
                    <>
                    <h2 className='empty_cart'>Cart Is Empty</h2>
                    </>
                    :
                    <>
                    <div className='cart_item'>
                        {
                            cartData.map((curElm) =>
                            {
                                return(
                                    <>
                                    <div className='item'>
                                        <div className='img_box'>
                                            <img src={curElm.img} />
                                        </div>
                                        <div className='info'>
                                            <h3>{curElm.Name}</h3>
                                            <p>$ {curElm.price}</p>
                                        </div>
                                        <div className='qty_control'>
                                            <button onClick={() => inc(curElm.id)}>+</button>
                                            <span>{curElm.qty}</span>
                                            <button onClick={() => dec(curElm.id)}>-</button>
                                        </div>
                                        <p className='item_total'>$ {curElm.price * curElm.qty}</p>
                                        <button className='rmv_btn' onClick={() => removeitem(curElm.id)}><IoTrashBinOutline /></button>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className='cart_summery'>
                        <h3>Total: $ {totalprice.toFixed(2)}</h3>
                        <Link href='/cart'><button className='checkout_btn'>Checkout Now ($ {totalprice.toFixed(2)})</button></Link>
                    </div>
                    </>
                }
            </div>
        )
    }
    </>
  )
}

export default CartPopup