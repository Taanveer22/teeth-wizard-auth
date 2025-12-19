import { Link } from "react-router-dom";

const Card = ({ serviceItem }) => {
  // console.log(serviceItem);
  const { treatment, image, description, cost, id } = serviceItem;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm h-80">
        <figure className="h-48 w-full">
          <img src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {treatment}
            <div className="badge badge-secondary">$ {cost}</div>
          </h2>
          <p className="text-justify">{description.slice(0, 80)}...</p>
          <div className="card-actions justify-center">
            <button className="btn btn-accent">
              <Link to={`/cardDetail/${id}`}>Checkout More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
