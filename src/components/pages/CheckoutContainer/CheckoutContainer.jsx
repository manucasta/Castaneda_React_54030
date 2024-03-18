
import React, { useContext, useState } from 'react'
import { Checkout } from './Checkout'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'

const CheckoutContainer = () => {

  const [userInfo, setUserInfo] = useState ({
    name: "",
    email:"",
    phone:""
  })

  const {cart, getTotalPrice, clearCart} = useContext (CartContext);
  let total = getTotalPrice ();
  const [orderId, setOrderId] = useState (null);

  const sendForm = (event) => {
    event.preventDefault();

    let order = {
      buyer : userInfo,
      items: cart,
      total: total
    }

    let ordersCollection = collection (db, "orders");

    addDoc (ordersCollection, order).then ((res) => setOrderId (res.id))

    cart.forEach((product) => {

      let refDoc = doc(db, "products", product.id)

      updateDoc (refDoc, {stock: product.stock - product.quantity})
    })

    clearCart ();
  }

  const captureForm = (event) => {
    setUserInfo({...userInfo, [event.target.name]: event.target.value})
  }

  return (
    <>
    <Checkout captureForm={captureForm} sendForm = {sendForm} orderId={orderId} />
    </>
  )
}

export default CheckoutContainer