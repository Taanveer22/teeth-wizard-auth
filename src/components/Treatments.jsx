import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Treatments = () => {
  const loaderData = useLoaderData();
  // console.log(loaderData);
  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        {loaderData.map((serviceItem) => (
          <Card serviceItem={serviceItem} key={serviceItem.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
