import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        All Content Here
        {/* output current nested route using <Outlet /> */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
