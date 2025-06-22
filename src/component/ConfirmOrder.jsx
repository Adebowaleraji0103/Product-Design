import { TiDeleteOutline } from "react-icons/ti";

const ConfirmOrder = () => {
  return (
    <div className="flex justify-center mb-[5rem]">
      <div className="px-[2rem] py-[1rem] bg-white w-[85%] mt-16 rounded-[10px] text-[14px]">
        <h1 className="font-bold text-[27px] text-rose-700">Your Cart(7)</h1>
        <div className="flex flex-col border-b-zinc-300 border-b-[0.2px] py-5 font-semibold">
          <p>Classic Tiramisu</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <span className="text-rose-700">1x</span>{" "}
              <p className="text-zinc-400">@$5.50</p>{" "}
              <p className="text-zinc-600">@$5.50</p>
            </div>
            <div>
              <TiDeleteOutline className="size-5 text-zinc-600" />
            </div>
          </div>
        </div>

        <div className="flex flex-col border-b-zinc-300 border-b-[0.2px] py-5 font-semibold">
          <p>Vanilla Bean Creame</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <span className="text-rose-700">1x</span>{" "}
              <p className="text-zinc-400">@$5.50</p>{" "}
              <p className="text-zinc-600">@$28.00</p>
            </div>
            <div>
              <TiDeleteOutline className="size-5 text-zinc-600" />
            </div>
          </div>
        </div>

        <div className="flex flex-col border-b-zinc-300 border-b-[0.2px] py-5 font-semibold">
          <p>Classic Tiramisu</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <span className="text-rose-700">1x</span>{" "}
              <p className="text-zinc-400">@$5.50</p>{" "}
              <p className="text-zinc-600">@$5.50</p>
            </div>
            <div>
              <TiDeleteOutline className="size-5 text-zinc-600" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-7 font-semibold mb-10">
          <p>Order Total</p>
          <h2 className="font-bold text-2xl">$46.50</h2>
        </div>

        <div className="flex justify-center bg-rose-700 text-white font-semibold py-3 px-8 rounded-[20px]">
          <button>Confirm Order</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
