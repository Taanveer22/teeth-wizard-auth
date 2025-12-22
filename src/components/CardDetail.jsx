import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const CardDetail = () => {
  const loaderData = useLoaderData();
  // console.log(loaderData);
  const { treatment, image, description, cost } = loaderData;

  return (
    <div className="w-11/12 mx-auto mb-8">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
            <p className="mb-5 text-lg font-medium">Cost : ${cost}</p>
            <p className="mb-5 text-justify">{description}</p>
            <button
              onClick={() =>
                document.getElementById("custom_modal").showModal()
              }
              className="btn btn-primary"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      <Modal treatment={treatment}></Modal>
    </div>
  );
};

export default CardDetail;
