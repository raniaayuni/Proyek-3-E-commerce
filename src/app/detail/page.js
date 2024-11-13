"use client"
import React from 'react'
import { useContext } from 'react'
import AppContext from '../context'
import './detail.css'

const Detail = () => {

  const {detail} = useContext(AppContext)

  return (
    <>
    <div className='detail_page'>
      <h2># Product detail</h2>
      <div className='product_detail'>
        <div className='product_image'>
          <img src={detail.img} />
        </div>
        <div className='product_info'>
          <h1>{detail.Name}</h1>
          <p>{detail.cat}</p>
          <div className='price'>
            ${detail.price}
          </div>
          <p>Stock Avaliable</p>
          <button className='add_to_cart'>Add To cart</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Detail