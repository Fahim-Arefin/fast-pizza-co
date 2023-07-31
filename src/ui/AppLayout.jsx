import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Spinner from "./Spinner";

function AppLayout() {
  //not useNagivate() its useNavigation()  (React Router feature)
  const navigation = useNavigation();
  //   console.log(navigation);
  return (
    <div>
      <Header />
      <main>
        {navigation.state === "loading" && <Spinner />}
        {/* output current nested route using <Outlet /> */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
