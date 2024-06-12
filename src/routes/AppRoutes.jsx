import Loader from "../components/loader/Loader";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Overview from "../components/Product/Overview";
import { PrivateRoute } from "./RouteSetiings";

const HomePage = lazy(() => import("../pages/Homepage"));
const TshirtList = lazy(() => import("../pages/TshirtList"));

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="pb-20 pt-40 flex justify-center items-center h-screen">
          <Loader />
        </div>
      }
    >
      <Routes>
        <Route
          path="/"
          element={
              <Navigate replace to="homepage" />
          }
        />
        <Route
          path="/homepage"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/product/find/:id"
          element={
            <PrivateRoute>
              <Overview />
            </PrivateRoute>
          }
        />
        <Route
          path="/products/tshirts"
          element={
            <PrivateRoute>
              <TshirtList />
            </PrivateRoute>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes