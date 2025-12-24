import { Link } from "react-router-dom";
import bannerPhoto from "../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-300 w-4/5 mx-auto max-w-5xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerPhoto} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">Teeth Wizard</h1>
            <p className="text-gray-500 my-2">
              A demo dental appointment booking application built for learning
              purposes.
            </p>
            <Link to="/register" className="btn btn-primary">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
