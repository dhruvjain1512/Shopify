
import {BsFillTrash3Fill} from "react-icons/bs"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return(
    <div className="flex justify-around p-3 rounded-xl items-center h-[210px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-[30px]">
      <img src={item.image} className="h-[190px] w-[29%]"/>
      <div className="flex flex-col w-[60%] justify-between gap-6">
        <p className="text-xl text-slate-700 font-semibold">{item.title}</p>
        <p className="w-full text-gray-700">{item.description.split(" ").splice(0,15).join(" ")+"..."}</p>
        <div className="flex w-[90%] justify-between items-center pb-[15px]">
          <p className="text-green-600 font-bold relative left-[-10px]">{`$${item.price}`}</p>
          <BsFillTrash3Fill size='34px' onClick={removeFromCart} className="p-2 rounded-3xl bg-red-300 hover:bg-red-500 mb-2"/>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
