import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();
  //   console.log(fetcher.state);
  return (
    <fetcher.Form method="PATCH">
      <Button primary className="px-4 py-2">
        {fetcher.state === "submitting" ? "Priotarizing..." : "MAKE PRIORITY"}
      </Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

export default UpdateOrder;
