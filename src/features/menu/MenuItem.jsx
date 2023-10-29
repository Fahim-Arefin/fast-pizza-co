import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem } from "../../store";
import DeleteItem from "../cart/DeleteItem";
import UpdateQuantity from "../cart/UpdateQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(({ cart }) => {
    return cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
    // cart.cart.find((item) => item.pizzaId === id) returns the obj if this obj is present in the cart
    // otherwise return undefined

    /*
      code breakdown -->  return cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
                                step01:cart.cart.find((item) => item.pizzaId === id) retuens undefined or a obj if found
                                step02.1:           if not found then optional chainning will not occur (?.quantity) 
                                    step02.1.1:     then undefined??0 will return 0 bcz of the "nullish coalescing"
                                step02.2:           if found then optional chainning will occur and give a result    
                                    step02.2.1:     then result ?? 0 will return result bcz of the "nullish coalescing"
                                step03: then return the value to currentQuantity
    */
  });

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: 1 * unitPrice,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className="mx-4 flex gap-8 py-2 font-semibold md:mx-0">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-80 grayscale" : ""}`}
      />
      <div className="flex w-full flex-col justify-between ">
        <div className="">
          <p className="text-xl ">{name}</p>
          <p className="text-xs capitalize italic tracking-wide">
            {ingredients.join(", ")}
          </p>
        </div>
        <div className="flex  items-center justify-between">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}

          {!soldOut && (
            <>
              {currentQuantity > 0 ? (
                <div className="flex items-center space-x-6">
                  <UpdateQuantity id={id} quantity={currentQuantity} />
                  <DeleteItem id={id} />
                </div>
              ) : (
                <Button
                  onClick={handleAddToCart}
                  primary
                  className="px-3 py-1.5 text-xs"
                >
                  Add to cart
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
