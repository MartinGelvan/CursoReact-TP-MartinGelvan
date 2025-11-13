import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/header";

export const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};
