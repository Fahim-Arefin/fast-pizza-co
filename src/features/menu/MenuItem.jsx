import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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
          <Button primary className="px-3 py-1.5 text-xs">
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
