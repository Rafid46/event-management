import NavBar from "../Shared/Navbar/NavBar";
import banner2 from "../../assets/game2.jpg";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import pic4 from "../../assets/pic4.png";
import pic5 from "../../assets/pic5.png";
import pic6 from "../../assets/pic6.png";
import pic7 from "../../assets/pic7.png";
import pic8 from "../../assets/abstract.jpg";
import navBg from "../../assets/5295524.png";
import Banner from "./Banner";
const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div className="mb-2">
      <div
        style={{ backgroundImage: `url(${navBg})` }}
        className="bg-cover bg-fixed bg-center h-[800px] max-w-10xl mx-auto"
      >
        <NavBar></NavBar>
        <div className="mt-[150px]">
          <Banner></Banner>
        </div>
      </div>
      {/* <div>
        <img className="w-full" src={banner3} />
      </div> */}
      <hr className="mt-20 border-[#00FFE1]" />
      {/* extra section 1 */}
      <section className="mt-20 mb-20">
        <div className="flex flex-col lg:flex-row items-center justify-around">
          <div className="w-[300px] lg:w-[700px] flex-wrap">
            <h1 className="text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text leading-relaxed">
              GameCon 10 is gearing up for gaming fun and fellowship Labor Day
              weekend, September 2024. We appreciate all your support of our
              family community gaming convention. We do encourage attendees to
              wear a mask in the vendor-gaming areas during the convention.
              However, this is not a requirement. We look forward to seeing you
              there! .GMs event submissions will be open through August 4th,
              2024. Event tickets or sign ups will be open to the public
              starting July 1st.
            </h1>
          </div>
          <div data-aos="fade-down">
            <img className="w-[500px]" src={banner2} alt="" />
          </div>
        </div>
      </section>
      <hr className="mb-20 border-[#00FFE1]" />
      {/* service section */}
      <section
        className="border-2 border-[#00FFE1] mb-20 lg:mb-20"
        style={{ backgroundImage: `url(${pic8})` }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 w-[150px] lg:w-[600px]  mx-auto py-20 items-center">
          <div className="">
            <img src={pic1} />
          </div>
          <div>
            <img src={pic2} />
          </div>
          <div>
            <img src={pic3} />
          </div>
          <div>
            <img src={pic4} />
          </div>
          <div>
            <img src={pic5} />
          </div>
          <div>
            <img src={pic6} />
          </div>
          <div>
            <img src={pic7} />
          </div>
        </div>
      </section>
      <section className="">
        <h1 className="text-4xl text-[#00FFE1] text-center mb-20 lg:mb-5">
          <span className="mr-10">O U R</span>S E R V I C E S
        </h1>
        <div className="grid grid-cols-1 space-y-20 lg:space-y-10">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </section>
      {/* extra section 2 */}
      <footer className="footer pt-10 text-white text-center items-center justify-evenly">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer flex justify-center">
        <aside className="items-center grid-flow-col">
          <p></p>
        </aside>
        <nav className="mt-5">
          <div className="grid grid-flow-col gap-4 mx-auto">
            <a className="mr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a className="mr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a className="mr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
