import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const cart = fakeCart;
  const navigation = useNavigation();

  //if error is returned from action the formError can referance it
  const formError = useActionData();

  const isSubmitting = navigation.state === "submitting";
  // console.log(navigation);

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {formError?.phone && <p>{formError.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        {/* a nice technic to pass data 
          cart array info in not a thing that we pass in a form input and read
          but if we include cart data we can make it as a hidden field and pass it to action fucn
          so that our all data can access in a single point
        */}
        <div>
          <input type="hidden" value={JSON.stringify(cart)} name="cart" />
        </div>

        <div>
          <button disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData); //convert the formData into data that is our desired values that we put in input field

  //priority=on and off but we want true or false
  //cart data in in json format bcz it needs to be json to pass it inside form data
  //now we need it into javascript format again so we need to parse it

  //formated data
  //order has no id
  const order = {
    ...data,
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };

  // console.log(order);

  //error check
  const error = {};
  if (!isValidPhone(order.phone)) {
    error.phone = "Please add valid phone no.";
  }
  //Object.keys(error) will convert error obj into array with the error obj keys
  if (Object.keys(error).length > 0) {
    // return error and this will be access from component usuing a hook called
    return error;
  }

  //if no error return then this codes run
  //now this new order has id bcz it is placed in the database
  const newOrder = await createOrder(order);
  // console.log(newOrder);

  // return null;
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
