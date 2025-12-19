import { Link } from "react-router-dom";
import Card from "./Card";

const Services = ({ serviceData }) => {
  // console.log(serviceData);
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-4">Treatments List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceData.slice(0, 4).map((serviceItem) => (
          <Card serviceItem={serviceItem} key={serviceItem.id}></Card>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <Link to="/treatments" className="btn btn-primary">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Services;
