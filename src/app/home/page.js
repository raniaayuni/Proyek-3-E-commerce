"use client"
import React, { useEffect, useState } from 'react'
import './home.css'
import { FaTruckFast } from "react-icons/fa6";
import { GiPiggyBank } from "react-icons/gi";
import { FaUndoAlt } from "react-icons/fa";
import { IoMdAlarm } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProductDetail from '../product_detail';
import { useContext } from 'react';
import AppContext from '../context';

const Home = () => {

  const {productInfo} = useContext(AppContext)

  //swiper js ref
  const [swiperRef, setSwiperRef] = useState(null);

  //Handling Product Detail
  const[deal, setDeal] = useState([])

  //filtering the productDetail on Different Category
  useEffect(() =>
  {
    filterProduct()
  },[])

  const filterProduct = () =>
  {
    //filtering the today deal product from product_detail
    const dealproduct = ProductDetail.filter((curElm) =>
    {
      return curElm.deal === true
    })
    setDeal(dealproduct)
  }
  console.log(deal)

  return (
    <>
    <div className='homepage'>
      <div className='hero_banner'>
        <div className='banner'>
          <div className='banner-left'>
            <h3>lifestyle collection</h3>
            <h1>MEN</h1>
            <h2>sale up to <span className='discount'>30% off</span></h2>
            <p>Get Free Shipping on orders over $99.00</p>
            <button className='shop-now-btn'>shop now</button>
          </div>
        </div>
        <div className='side_banners'>
          <div className='side-banner summer-sale'>
            <h4>NEW ARRIVALS</h4>
            <h5>SUMMER SALE 20% OFF</h5>
            <button className='side-shop-btn'>shop now</button>
          </div>
          <div className='side-banner gaming-sale'>
            <h4>gaming 4k</h4>
            <h5>DESKTOPS & LAPTOPS</h5>
            <button className='side-shop-btn'>shop now</button>
          </div>
        </div>
      </div>
      <div className='info'>
        <div className='info_bar'>
          <div className='info_item'>
            <FaTruckFast className='info_icon'/>
            <div>
              <h4>Fast delivery</h4>
              <p>start from $10</p>
            </div>
          </div>
          <div className='info_item'>
            <GiPiggyBank className='info_icon'/>
            <div>
              <h4>Money Guarantee</h4>
              <p>7 Days Back</p>
            </div>
          </div>
          <div className='info_item'>
            <FaUndoAlt className='info_icon'/>
            <div>
              <h4>365 Days</h4>
              <p>For free return</p>
            </div>
          </div>
          <div className='info_item'>
            <IoMdAlarm className='info_icon'/>
            <div>
              <h4>Payment</h4>
              <p>Secure system</p>
            </div>
          </div>
        </div>
      </div>
      <div className='category_container'>
        <div className='category_card'>
          <img src='images/cat-1.webp' alt='' className='category_image' />
          <p className='category-name'>Toys</p>
        </div>
        <div className='category_card'>
          <img src='images/cat-2.webp' alt='' className='category_image' />
          <p className='category-name'>Sports</p>
        </div>
        <div className='category_card'>
          <img src='images/cat-3.webp' alt='' className='category_image' />
          <p className='category-name'>Gaming</p>
        </div>
        <div className='category_card'>
          <img src='images/cat-4.webp' alt='' className='category_image' />
          <p className='category-name'>Furniture</p>
        </div>
        <div className='category_card'>
          <img src='images/cat-5.webp' alt='' className='category_image' />
          <p className='category-name'>Fashion</p>
        </div>
        <div className='category_card'>
          <img src='images/cat-6.webp' alt='' className='category_image' />
          <p className='category-name'>Cameras</p>
        </div>
      </div>
      <div className='product_deal'>
        <h3>Deals of the day</h3>
        <div className='container'>
          <div className='deal_product_grid'>
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={5}
              centeredSlides={false}
              spaceBetween={10}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              >
            {
              deal.map((curElm) =>
              {
                return(
                  <>
                  <SwiperSlide>
                  <div className='product_card'>
                    <div className='product_img'>
                      <img src={curElm.img} />
                    </div>
                    <div className='product_info'>
                      <p className='title'>{curElm.Name}</p>
                      <p className='price'>${curElm.price}</p>
                      <button className='add_to_cart'>Add To cart</button>
                    </div>
                    <div className='product_icon'>
                      <div className='icon_eye' onClick={() => productInfo(curElm)}>
                        <FaRegEye />
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  </>
              )
             })
            }
            </Swiper>
          </div>
        </div>
      </div>
      <div className='brands_container'>
        <h3 className='title'>Featured Brands</h3>
        <div className='brand_list'>
          <img src='images/b1.png' />
          <img src='images/b2.png' />
          <img src='images/b3.png' />
          <img src='images/b4.png' />
          <img src='images/b5.png' />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home