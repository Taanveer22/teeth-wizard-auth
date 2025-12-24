import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Treatments = () => {
  const loaderData = useLoaderData();
  // console.log(loaderData);
  return (
    <div className="w-11/12 mx-auto">
      {/* ✅ TRUST SIGNAL:
          Public explanation of the app
          (Google dislikes auth-only sites without context) */}
      <section className="text-center py-6 bg-base-300 mb-8">
        <h1 className="text-3xl font-bold">Teeth Wizard</h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Teeth Wizard is a demo dental appointment booking application built
          for learning and practice purposes. No real medical services are
          provided.
        </p>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        {loaderData.map((serviceItem) => (
          <Card serviceItem={serviceItem} key={serviceItem.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
