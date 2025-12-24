import { Link } from "react-router-dom";
import bannerPhoto from "../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-300 w-4/5 mx-auto max-w-5xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerPhoto} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Dental Treatment Offers!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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
