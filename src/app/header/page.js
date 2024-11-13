"use client"
import React, { useState, useContext } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaRegUser, FaReceipt, FaUserCircle, FaMoneyCheckAlt, FaSignOutAlt} from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import { GiLargeDress } from "react-icons/gi";
import { IoWatch } from "react-icons/io5";
import { PiEyeglassesFill } from "react-icons/pi";
import { RiShoppingBasketFill } from "react-icons/ri";
import ProductDetail from '../product_detail';
import './header.css'
import Link from 'next/link';
import AppContext from '../context';

const Header = () => {

    const {useAuth,setUserAuth,toogleLoginModel, userData, setProduct, toogleCart} = useContext(AppContext)

    //Handling Category Open and close
    const [categoryOpen, setCategoryOpen] = useState(false)

    //handling userDropdown open
    const [userDropdown, setUserDropdown] = useState(false)

    //Handling Product search Inputs
    const [search, setSearch] = useState('')

    const handelUserDrop = () =>
    {
        setUserDropdown(!userDropdown)
    }

    const handelCategory = () => {
        setCategoryOpen(!categoryOpen)
    }

    //handle logout
    const logout = () =>
    {
        setUserAuth(false)
        setUserDropdown(!userDropdown)
        toogleLoginModel()
    }

    //Handling Product Search
    const productSearch  = () =>
    {
        if (search.length === 0) 
        {
            alert("please Enter Product Name")
        } 
        else 
        {
            const filterProduct = ProductDetail.filter((x) =>
            {
                return x.cat === search
            })
            setProduct(filterProduct)
        }
    }

    return (
        <>
            <div className='header'>
                <div className='top_header'>
                    <div className='logo'>
                        <img src='images/logo.svg' />
                    </div>
                    <div className='search_box'>
                        <div className='search_bar'>
                            <input type='text' placeholder='Search Your Product...' value={search} onChange={(e) => setSearch(e.target.value)} />
                            <button onClick={productSearch}>
                                <IoSearch />
                            </button>
                        </div>
                    </div>
                    <div className='function_link'>
                        <div className='user'>
                            {
                                useAuth ?
                                <>
                                <div className='icon' onClick={handelUserDrop}>
                                    <FaRegUser />
                                </div>
                                {
                                    userDropdown && 
                                    <div className='user_dropdown'>
                                        <h4>{userData.Name}</h4>
                                        <ul>
                                            <li>
                                                <span><FaReceipt  />    Oders</span>
                                            </li>    
                                            <li>
                                                <span><FaUserCircle />   Account</span>
                                            </li> 
                                            <li>
                                                <span><FaMoneyCheckAlt />   Transation</span>
                                            </li> 
                                            <li onClick={logout}>
                                                <span><FaSignOutAlt />   Logout</span>
                                            </li> 
                                        </ul>
                                    </div>
                                }
                                </>
                                :
                                <div className='icon'>
                                    <a onClick={toogleLoginModel}><FaRegUser /></a>
                                </div>
                            }
                        </div>
                        <div className='cart'>
                            <div className='icon' onClick={toogleCart}>
                                <IoIosCart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom_header'>
                    <div className='category_toogle'>
                        <button onClick={handelCategory}>
                            <span><BiSolidCategory /></span> categories
                        </button>
                        <div className={`category_dropdown ${categoryOpen ? 'open' : ''}`}>
                            <ul onClick={handelCategory}>
                                <li><span><GiLargeDress /></span> Dress</li>
                                <li><span><IoWatch /></span> Watch</li>
                                <li><span><PiEyeglassesFill /></span> Eye Glasses</li>
                                <li><span><RiShoppingBasketFill /></span> Groceries</li>
                            </ul>
                        </div>
                    </div>
                    <div className='nav'>
                        <ul>
                            <li><Link className='link' href='/'>Home</Link></li>
                            <li><Link className='link' href='/shop'>Shop</Link></li>
                            <li><Link className='link' href='/'>Order</Link></li>
                            <li><Link className='link' href='/'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
