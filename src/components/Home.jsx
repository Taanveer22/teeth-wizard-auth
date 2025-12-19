import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Feedback from "./Feedback";
import Services from "./Services";

const Home = () => {
  const loaderData = useLoaderData();
  // console.log(loaderData);
  const { serviceData, feedbackData } = loaderData;
  // console.log(serviceData);
  // console.log(feedbackData);

  return (
    <div>
      <section className="mb-8">
        <Banner></Banner>
      </section>
      <section className="mb-8">
        <Services serviceData={serviceData}></Services>
      </section>
      <section className="mb-8">
        <Feedback feedbackData={feedbackData}></Feedback>
      </section>
    </div>
  );
};

export default Home;
