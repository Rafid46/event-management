import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const links = (
    <>
      <li className="text-2xl font-light text-[#00FFE1] mr-20">
        <NavLink to="/">H O M E</NavLink>
      </li>
      <li className="text-2xl font-light  text-[#00FFE1] mr-20">
        <NavLink to="/convention">C O N V E N T I O N</NavLink>
      </li>
      <li className="text-2xl font-light  text-[#00FFE1] mr-20">
        <NavLink to="/about">A B O U T</NavLink>
      </li>

      {user && (
        <>
          <li className="text-2xl font-light  text-[#00FFE1] mr-20">
            <NavLink to="/esports">E S P O R T S</NavLink>
          </li>
          <li className="text-2xl font-light  text-[#00FFE1] mr-20">
            <NavLink to="/bookings">P U R C H A S E</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-8 mr-2 rounded-full">
              <img src="" />
            </div>
          </label>
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn rounded-none w-[130px] hover:text-[#00FFE1]"
            >
              L O G O U T
            </button>
          ) : (
            <Link to="/login">
              <button className="btn rounded-none w-[130px] hover:text-[#00FFE1]">
                L o g i n
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
