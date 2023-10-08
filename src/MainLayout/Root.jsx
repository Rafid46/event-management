import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/Navbar/NavBar";

const Root = () => {
  return (
    <div className="font-DM">
      <Outlet></Outlet>
    </div>
  );
};
export default Root;
