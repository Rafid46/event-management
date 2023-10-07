import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/Navbar/NavBar";

const Root = () => {
  return (
    <div className="font-DM">
      <div className="mt-10 mb-10">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};
export default Root;
