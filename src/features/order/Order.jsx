// Test ID: IIDSAT

import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import OrderItem from "../order/OrderItem";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";
import Spinner from "../../ui/Spinner";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address,
  // these are only for the restaurant staff

  const order = useLoaderData();
  console.log(order);

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  const fetcher = useFetcher();
  useEffect(() => {
    //data will be stored in fetcher.data
    if (!fetcher.data && fetcher.state === "idle") {
      fetcher.load("/menu");
    }
  }, [fetcher]);

  console.log(fetcher);

  return (
    <>
      {fetcher.state === "loading" ? (
        <Spinner />
      ) : (
        <div className="mx-auto my-12 space-y-14 px-4 md:text-start xl:w-[70%]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-4xl font-bold">Order #{id} Status</h2>

            <div className="space-x-4">
              {priority && (
                <span className="rounded-full bg-red-500 px-4 py-1.5 uppercase text-white ">
                  Priority
                </span>
              )}
              <span className="rounded-full bg-green-500 px-4 py-1.5 uppercase text-white ">
                {status} order
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-stone-200 px-4 py-6">
            <p className="font-semibold tracking-wide md:text-xl">
              {deliveryIn >= 0
                ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
                : "Order should have arrived"}
            </p>
            <p className="text-xs md:text-sm">
              (Estimated delivery: {formatDate(estimatedDelivery)})
            </p>
          </div>

          <ul className="space-y-2 divide-y-2">
            {cart.map((item) => (
              <OrderItem
                item={item}
                isLoadingIngredients={fetcher.state === "loading"}
                ingredients={
                  fetcher.data?.find((el) => el.id === item.pizzaId)
                    ?.ingredients
                }
              />
            ))}
          </ul>

          <div className="space-y-4 rounded-lg bg-stone-200 px-4 py-6">
            <p className="text-sm md:text-lg">
              Price pizza: {formatCurrency(orderPrice)}
            </p>
            {priority && (
              <p className="text-sm md:text-lg">
                Price priority: {formatCurrency(priorityPrice)}
              </p>
            )}
            <p className="font-semibold md:text-xl">
              To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
            </p>
          </div>

          {!priority && <UpdateOrder />}
        </div>
      )}
    </>
  );
}

export async function loader({ params }) {
  //params is provided by React Router
  //we cannot use useParams() hook bcz we are not in the component
  //but React Router gives us the params in the loader parameter obj
  // so just destructure it and use it
  const order = getOrder(params.orderId);
  return order;
}
export default Order;
