
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { products } from "./productsMock";

export const AddDocs = () => {

  const rellenar = () => {

    let productsCollection = collection (db, "products");

    products.forEach ((product) => {
      addDoc (productsCollection, product)
    })

  }

  return (
    <button onClick={rellenar}>
      Add Docs
    </button>
  )
}