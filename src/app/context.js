"use client"
import { createContext, useState } from "react";
import ProductDetail from "./product_detail";
import { useRouter } from "next/navigation";

const AppContext = createContext()

export const AppProvider = ({children}) =>
{
    //handling regsiter popup
    const[isLoginOpen, setIsLoginOpen] = useState(false)

    //checking user auth
    const [useAuth, setUserAuth] = useState(false)

    //handling user Data
    const [userData, setUserData] = useState()

    //handling product
    const[product, setProduct] = useState(ProductDetail)

    //Handling Product Details
    const[detail, setDetail] = useState([])

    //Handling Cart Product
    const[cartData, setCartData] = useState([])

    //handling cart toogle
    const[cartOpen, setCartOpen] = useState(false)

    const toogleCart = () =>
    {
        setCartOpen(!cartOpen)
    }

    const AddToCart = (data) =>
    {
        const exsistProduct = cartData.find((x) =>
        {
            return x.id === data.id
        })
        if (exsistProduct) 
        {
            alert("This Product Is allready In cart")
        } 
        else 
        {
            setCartData([...cartData, {...data, qty:1}])
            alert("Product Added To Cart")
        }
        console.log(cartData)
    }

    const toogleLoginModel = () => 
    {
        setIsLoginOpen(!isLoginOpen);
    };

    //handling Product Detail function

    const Router = useRouter()

    const productInfo = (curElm) =>
    {
        setDetail(curElm)
        Router.push('/detail')
    }

    return(
        <AppContext.Provider 
        value={{
            isLoginOpen,
            setIsLoginOpen,
            useAuth,
            setUserAuth,
            userData,
            setUserData,
            toogleLoginModel,
            product,
            setProduct,
            detail,
            setDetail,
            productInfo,
            AddToCart,
            cartOpen,
            setCartOpen,
            toogleCart,
            cartData,
            setCartData
        }}
        >
            {children}
        </AppContext.Provider>
    )

}
export default AppContext