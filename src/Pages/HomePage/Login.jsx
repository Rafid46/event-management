/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import NavBar from "../Shared/Navbar/NavBar";
import swal from "sweetalert";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const Login = () => {
  const [mainUser, setMainUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(result.user);
        navigate(location.state ? location?.state : "/");
        swal("Hello there", "Login successful", "success");
        setMainUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const { signIn, loading } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    console.log(form);
    signIn(email, password)
      .then((result) => {
        navigate(location.state ? location?.state : "/");
        return swal("Hello there", "Login successful", "success");
        // console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
        swal("incorrect password or email");
      });
  };
  // const handleGoogleSignIn = () => {
  //   googleIn()
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(result.user);
  //       setMainUser(user);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  return (
    <div>
      <div className="mb-10">
        <NavBar></NavBar>
      </div>
      <h1 className="text-4xl text-center text-[#00FFE1]">L O G I N</h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-[800px] max-w-sm shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input rounded-none mb-5"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input rounded-none"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-white"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="coolBeans">L O G I N</button>
              </div>
            </form>
            <p className="text-center text-gray-200">
              Do not have an account, Please
              <Link className="text-[#00FFE1]" to="/register">
                {" "}
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn border-none bg-[#00FFE1] rounded-none items-center"
        >
          <FaGoogle className="text-2xl"></FaGoogle>
          Google
        </button>
        {/* <p>{mainUser.displayName}</p>
        <img src={mainUser.photoURL} alt="" /> */}
      </div>
    </div>
  );
};

export default Login;
