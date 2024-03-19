
import { Link } from "react-router-dom";


export const Checkout = ({captureForm, sendForm, orderId}) => {
  return (
    <>
      {orderId ? (
        <div style={{textAlign:"center", marginTop:"20px"}}>
          <h2>Muchas gracias por su compra...</h2>
          <h2>Su numero de confirmacion es #{orderId}</h2>
          <Link to="/" style={{color: "white"}}>Seguir comprando...</Link>
        </div>
      ) : (
        <form onSubmit={sendForm}>
          <input
            type="text"
            placeholder="Insert your name"
            name="name"
            id="name"
            onChange={captureForm}
          />
          <input
            type="tel"
            placeholder="Insert your phone"
            name="phone"
            id="phone"
            onChange={captureForm}
          />
          <input
            type="email"
            placeholder="Insert your email"
            name="email"
            id="email"
            onChange={captureForm}
          />
          <input type="submit" value="submit" />
        </form>
      )}
    </>
  );
}
