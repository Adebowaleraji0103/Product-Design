import { MdOutlineAddShoppingCart } from "react-icons/md";

const Card = ({productDetails}) => {
    console.log(productDetails.label)
  return (
    <div className=" px-4 ">
      <div className="w-[full] h-[16rem] object-center">
        <img
          className="w-full h-full rounded-[10px]"
          src="./images/first.jpg"
          alt=""
        />
      </div>

      <div className="flex m-auto items-center bg-amber-50 text-[17px] translate-0 py-2  px-7 gap-3 border border-gray-300 rounded-[25px] w-fit font-semibold mt-[-19px]  ">
        <MdOutlineAddShoppingCart className="text-rose-900 size-4" />
        <p>Add to Cart</p>
      </div>

      <div className="font-semibold text-[20px] ">
        <p className=" text-zinc-400 font-normal">{productDetails.label}</p>
        <p className="">{productDetails.name}</p>
        <p className="text-rose-700">{productDetails.price}</p>
      </div>
    </div>
  );
};

export default Card;
