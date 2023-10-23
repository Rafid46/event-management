import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { CgProfile } from "react-icons/Cg";
import swal from "sweetalert";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  // const { photoURL } = mainUser;
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        // console.log(result.user);
        return swal("", "Logout successfully", "success");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const links = (
    <>
      <li className="text-2xl font-light text-[#00FFE1] mr-20">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : ""
          }
        >
          H O M E
        </NavLink>
      </li>
      {/* <li className="text-2xl font-light  text-[#00FFE1] mr-20">
        <NavLink to="/convention">C O N V E N T I O N</NavLink>
      </li> */}
      <li className="text-2xl font-light  text-[#00FFE1] mr-20">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : ""
          }
        >
          A B O U T
        </NavLink>
      </li>
      <li className="text-2xl font-light  text-[#00FFE1] mr-20">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : ""
          }
        >
          L O G I N
        </NavLink>
      </li>
      {user && (
        <>
          <li className="text-2xl font-light  text-[#00FFE1] mr-20">
            <NavLink
              to="/esports"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white" : ""
              }
            >
              E S P O R T S
            </NavLink>
          </li>
          <li className="text-2xl font-light  text-[#00FFE1] mr-20">
            <NavLink
              to="/purchase"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white" : ""
              }
            >
              P U R C H A S E
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar mb-10">
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
          {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-8 mr-2 rounded-full">
              <img src="" />
            </div>
          </label> */}
          {user ? (
            <div>
              <img className="rounded-full w-[50px] mr-2" src={user.photoURL} />
              <p className="text-2xl font-thin text-white mr-2">
                {user.displayName}
              </p>
              <button
                onClick={handleSignOut}
                className="btn rounded-none w-[130px] hover:text-[#00FFE1]"
              >
                L O G O U T
              </button>
            </div>
          ) : (
            <div>
              <CgProfile className="text-white text-5xl font-normal mr-5 items-center"></CgProfile>
              <Link to="/login">
                <button className="btn rounded-none w-[130px] hover:text-[#00FFE1]">
                  L o g i n
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
