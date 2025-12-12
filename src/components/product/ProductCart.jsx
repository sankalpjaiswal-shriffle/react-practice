import { useDispatch, useSelector } from "react-redux";
import Button from "../common/Button";
import { increment, decrement, removeItem } from "../reducers/cartSlice";

export default function ProductCart() {
  const cart =
    useSelector((state) => state.cart) ||
    JSON.parse(localStorage.getItem("cart"));
  const dispatch = useDispatch();

  if (cart.length === 0)
    return (
      <div className="flex items-center justify-center text-black dark:text-white mt-4">
        Add products to cart
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className=" text-3xl text-black dark:text-white font-bold mt-2">
        Product Cart
      </h1>
      <ul className="mt-4">
        {cart?.map((item) => (
          <li
            key={item.id}
            className="flex items-center border-2 gap-2 text-black dark:text-white rounded-2xl p-4 m-4"
          >
            <img
              src={item.images[0]}
              title={item.title}
              alt={item.title}
              className="h-24 w-24"
            />
            <div className="flex flex-col">
              <h3 className="text-black dark:text-white font-bold">
                {item.title}
              </h3>
              <p className="text-black dark:text-white">
                Price: <span>${item.price}</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button onClick={() => dispatch(decrement(item.id))}>-</Button>
              <p className="font-bold">{item.quantity}</p>
              <Button onClick={() => dispatch(increment(item.id))}>+</Button>
            </div>
            <Button onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
