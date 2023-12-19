import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import "../pages/Cart.css";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div  className="mt-5">
  {
    cart.length > 0  ? 
    (<div  className="flex gap-6 max-w-[1200px] mx-auto justify-between"> 
      <div className="flex flex-col w-[55%] h-[75vh] shadow-inner overflow-scroll gap-4 overflow-x-hidden p-4  rounded-xl">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col gap-2 w-[35%] justify-between">

        <div>
          <div className="text-green-700 text-xl font-semibold tracking-wide">Your Cart</div>
          <div className="text-green-700 text-5xl uppercase font-semibold">Summary</div>
          <p>
            <span className="text-slate-700 text-lg font-semibold">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col gap-2 w-[75%]">
          <p className="text-slate-700 text-lg font-semibold">Total Amount:
          <span className="text-slate-800 text-lg font-bold">${totalAmount}</span></p>
          <button className="bg-green-700 rounded-md pt-2 pb-2 pr-6 pl-6 text-white tracking-wider text-lg">
            CheckOut Now
          </button>
        </div>
      </div>

    </div>) :

    (<div className="min-h-[60vh] flex flex-col justify-center items-center gap-6">
      <h1 className="text-xl text-grey-300 font-semibold">Cart Empty</h1>
      <Link to={"/"}>
        <button  className="bg-green-500 rounded-md pt-2 pb-2 pr-6 pl-6 text-white tracking-wider text-lg">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
