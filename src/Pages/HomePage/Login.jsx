import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    console.log(form);
  };
  return (
    <div>
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
                <button className="btn border-none bg-[#00FFE1] rounded-none">
                  L o g i n
                </button>
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
    </div>
  );
};

export default Login;
