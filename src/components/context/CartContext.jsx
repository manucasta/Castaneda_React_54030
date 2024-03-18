
import { createContext, useState } from "react"
import { toast, Bounce } from "react-toastify";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []);

  const addToCart = (product) => {
    let existed = inCart (product.id)
    if (existed) {
      let newArray = cart.map ((element) => {
        if (element.id = product.id) {
          return {...element, quantity: product.quantity}
        } else{
      return element
    }
    })
    setCart( newArray )
    localStorage.setItem("cart", JSON.stringify(newArray));

    toast.success("Product added to cart", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    })
  } else {
    setCart ([...cart, product])
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    toast.success("Product added to cart", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  })
  };
}

  const inCart = (id) => {
    let existed = cart.some ((product)=> product.id === id )
      return existed
  }

  const clearCart = () => {
    setCart ( [] )
    localStorage.removeItem("cart")
  }

  const removeProduct = (id) => {
    let newArray = cart.filter ( (product) => product.id !== id );
    setCart (newArray);
    localStorage.setItem("cart", JSON.stringify(newArray))
    
  }

  const getTotalItems = () => {
    let total = cart.reduce( (acc, product) => {
      return acc + product.quantity
    }, 0)
    return total
  }

  const getTotalPrice = () => {
    let total = cart.reduce ((acc, product) => {
      return acc + (product.price * product.quantity)
    }, 0)

    return total
  }

  const getQuantity = (id) => {
    let product = cart.find ((element) => element.id === id)
    if (product) {
      return product.quantity
    }else{
      return product
    }
  }

  let data = {
    cart,
    addToCart,
    clearCart,
    removeProduct,
    getTotalItems,
    getTotalPrice,
    getQuantity
  };

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider