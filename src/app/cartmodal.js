"use client"
import React from 'react'
import { useContext } from 'react'
import AppContext from './context'
import CartPopup from './CartPopup/page'
import './cartmodal.css'

const Cartmodal = () => {
    const{cartOpen, toogleCart} = useContext(AppContext)
  return (
    <>
    {
        cartOpen && (
            <div className='modal'>
                <CartPopup closeCart={toogleCart} cartOpen={cartOpen} />
            </div>
        )
    }
    </>
  )
}

export default Cartmodal