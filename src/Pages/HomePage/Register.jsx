/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import NavBar from "../Shared/Navbar/NavBar";
import swal from "sweetalert";

const Register = () => {
  const [success, setSuccess] = useState("");
  const [registerError, setRegisterError] = useState("");
  const { createUser,updateUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    const name = form.get("name");
    

    setRegisterError("");
    if (password.length < 6) {
      setRegisterError("password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("password should have capital letters");
      // return swal("Good job!", "You clicked the button!", "success");
    } else if (/^[a-zA-Z0-9]*$/.test(password)) {
      setRegisterError("password should have special character");
      return;
    } else {
      swal("Good job!", "account created succesfully", "success");
    }
    // console.log(email, password);
    // console.log(form);
    createUser(email, password)
      .then((result) => {
        
      updateUser(name,photo).then(()=>{})
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="mb-10">
        <NavBar></NavBar>
      </div>
      <h1 className="text-4xl text-center text-[#00FFE1]">R E G I S T E R</h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-[800px] max-w-sm shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="email"
                  className="input rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="email"
                  className="input rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
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
                <button className="btn border-none bg-[#00FFE1] rounded-none">
                  R E G I S T E R
                </button>
              </div>
            </form>
            <p className="text-center text-gray-200">
              Already have an account, Please
              <Link to="/login" className="text-[#00FFE1]">
                {" "}
                login
              </Link>
            </p>
            {registerError && <p className="text-red-600">{registerError}</p>}
            {/* {success && <p className="text-green-400">{success}</p>} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
