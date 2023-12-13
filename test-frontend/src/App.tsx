import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const location = useLocation();

  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Elements stripe={stripePromise}>
        <Provider store={store}>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Details />} path="/details/:id" />
          </Routes>
        </Provider>
      </Elements>
    </>
  );
}

export default App;
