"use client"
import React, { useState } from 'react'
import './form.css'
import { db, auth } from '../firebase'
import {collection, addDoc, getDocs} from 'firebase/firestore'

const Register = ({setIsLoginOpen, setUserAuth, setUserData}) => {

    //Toggel Login and Signup Form
    const [isLogin, setIsLogin] = useState(true)

    //handling user Input
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [NewEmail, setNewEmail] = useState("")
    const [NewPassword, setNewPassword] = useState("")
    const [name, setName] = useState("")

    const tooglebtn = () =>
    {
        setIsLogin(!isLogin)
    }

    //craeting database reference
    const dbref = collection(db, "userData")

    //handling signup function
    const signup = async () =>
    {
        if (NewEmail.length === 0 || NewPassword.length === 0 || name.length === 0) 
        {
            alert("All Fildes Are Required")
        } 
        else 
        {
            try 
            {
                await auth.createUserWithEmailAndPassword(NewEmail, NewPassword)
                await addDoc(dbref,{Name:name, Email:NewEmail})
                alert("User Registred Successfully")

                //Fetching user Data for firestrore database
                const fetchdata = await getDocs(dbref)
                const datasnap = fetchdata.docs.map((doc) => ({id:doc.id, ...doc.data()}))
                //filtering the data
                const user = datasnap.find((x) =>{
                    return x.Email === NewEmail
                })
                setUserData(user)

                setNewEmail("")
                setNewPassword("")
                setName("")
                setIsLoginOpen(false)
                setUserAuth(true)
            } 
            catch (error) 
            {
                alert(error)
                setNewEmail("")
                setNewPassword("")
                setName("")
            }
        }
    }

    //Handling Login function
    const login = async () =>
    {
        if (loginEmail.length === 0 || loginPassword.length === 0) 
            {
                alert("All Fildes Are Required")
            } 
            else 
            {
                try 
                {
                    await auth.signInWithEmailAndPassword(loginEmail, loginPassword)
                    alert("User Login Successfully")
                    //fetching user data
                    const fetchdata = await getDocs(dbref)
                    const datasnap = fetchdata.docs.map((doc) => ({id:doc.id, ...doc.data()}))
                    //filtering the data
                    const user = datasnap.find((x) =>{
                        return x.Email === loginEmail
                    })
                    setUserData(user)
                    setLoginEmail("")
                    setLoginPassword("")
                    setIsLoginOpen(false)
                    setUserAuth(true)
                } 
                catch (error) 
                {
                    alert(error)
                    setLoginEmail("")
                    setLoginPassword("")
                }
            }
    }

  return (
    <>
    <div className='register'>
        <div className='form_container'>
            <h2>{isLogin ? 'Welcome To Ecommerce':'Create An Account'}</h2>
            <div className='form'>
                {
                    isLogin ?
                    <>
                    <div className='inputs'>
                        <label>Email</label>
                        <input type='text' placeholder='example@mail.com' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                    </div>
                    <div className='inputs'>
                        <label>Password</label>
                        <input type='password' placeholder='*********' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                    </div>
                    <button className='btn login_btn' onClick={login}>Login</button>
                    </>
                    :
                    <>
                    <div className='inputs'>
                        <label>Name</label>
                        <input type='text' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='inputs'>
                        <label>Email</label>
                        <input type='text' placeholder='example@mail.com' value={NewEmail} onChange={(e) => setNewEmail(e.target.value)} />
                    </div>
                    <div className='inputs'>
                        <label>Password</label>
                        <input type='password' placeholder='*********' value={NewPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                    <button className='btn login_btn' onClick={signup}>Sign Up</button>
                    </>
                }
                <p className='Toggle_from_text'>
                    {isLogin ? "Don't Have Account" : 'Allready Have Account?'}
                    <span className='toggle_btn' onClick={tooglebtn}>
                        {isLogin ? 'Sign Up' : 'Login'}
                    </span>
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register