import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Feedback from "./Feedback";
import Services from "./Services";

const Home = () => {
  const loaderData = useLoaderData();
  const { serviceData, feedbackData } = loaderData;

  return (
    <div>
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

      {/* Banner */}
      <section className="mb-8">
        <Banner />
      </section>

      {/* Services */}
      <section className="mb-8">
        <Services serviceData={serviceData} />
      </section>

      {/* Feedback */}
      <section className="mb-8">
        <Feedback feedbackData={feedbackData} />
      </section>
    </div>
  );
};

export default Home;
