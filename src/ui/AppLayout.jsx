import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  //to know whether the app is currently, idle, loading, or submitting
  const navigation = useNavigation();
  //when the data is loading
  const isLoading = navigation.state === "loading";
  console.log(navigation);
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto] bg-blue-50">
      {/* display the spinning when the data is loading  */}
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
