"use client"
import React from 'react'
import './shop.css'
import { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { useContext } from 'react';
import AppContext from '../context';
import ProductDetail from '../product_detail';

const Shop = () => {

    const {product, setProduct, productInfo, AddToCart} = useContext(AppContext)

    //handling Product Pagination
    const[page, setPage] = useState(1)
    const itemPerPage = 9
    const totalPage = Math.ceil(product.length / itemPerPage)

    //handling prev btn
    const prev = () =>
    {
        setPage(page - 1)
    }
    //handling nxt btn
    const nxt = () =>
    {
        setPage(page + 1)
    }

    const filterProduct = (catName) =>
    {
        const filter = ProductDetail.filter((x) =>
        {
            return  x.cat === catName
        })
        setProduct(filter)
    }

    const AllProduct = () =>
    {
        setProduct(ProductDetail)
    }

  return (
    <>
    <div className='shop'>
        <div className='sidebar'>
            <h2>Categories</h2>
            <ul>
                <li onClick={AllProduct}>All</li>
                <li onClick={() => filterProduct('fashion')}>fashion</li>
                <li onClick={() => filterProduct('Watch')}>Watch</li>
                <li onClick={() => filterProduct('glasses')}>glasses</li>
            </ul>
        </div>
        <div className='product_container'>
            <h2>#shop</h2>
        <div className='product_grid'>
            {
                product.slice((page - 1) * itemPerPage, page * itemPerPage).map((curElm) =>
                {
                    return(
                        <>
                        <div className='product_card'>
                            <div className='product_img'>
                                <img src={curElm.img} />
                            </div>
                            <div className='product_info'>
                                <p className='title'>{curElm.Name}</p>
                                <p className='price'>${curElm.price}</p>
                                <button className='add_to_cart' onClick={() => AddToCart(curElm)}>Add To cart</button>
                            </div>
                            <div className='product_icon'>
                                <div className='icon_eye' onClick={ () => productInfo(curElm)}>
                                    <FaRegEye />
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        <div className='pagination'>
            <button onClick={prev} disabled={page===1} className={`checkBtn ${page===1 ? 'active' : ''}`}>Previous</button>
            <button onClick={nxt} disabled={page===totalPage} className={`checkBtn ${page===totalPage ? 'active' : ''}`}>Next</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Shop