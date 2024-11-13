"use client"
import React, {useContext} from 'react'
import AppContext from './context'
import Register from './register/page'

const Model = () => {

    const {isLoginOpen,setIsLoginOpen,setUserAuth,setUserData,toogleLoginModel} = useContext(AppContext)

  return (
    <>
    {/* Modal For Login Form */}
    {
        isLoginOpen && (
          <div className='modal'>
            <div className='modal_contant'>
              <button className='close_btn' onClick={toogleLoginModel}>x</button>
              <Register 
                setIsLoginOpen={setIsLoginOpen} 
                setUserAuth={setUserAuth} 
                setUserData={setUserData} 
              />
            </div>
          </div>
        )
      }
    </>
  )
}

export default Model