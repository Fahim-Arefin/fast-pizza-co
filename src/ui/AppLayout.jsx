import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Spinner from "./Spinner";

function AppLayout() {
  //not useNagivate() its useNavigation()  (React Router feature)
  const navigation = useNavigation();
  //   console.log(navigation);
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      {navigation.state === "loading" && <Spinner />}
      <Header />
      <main className="w-full md:mx-auto md:w-[80%]">
        {/* output current nested route using <Outlet /> */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
