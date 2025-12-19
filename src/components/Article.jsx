import { LiaStarSolid } from "react-icons/lia";
import { LiaStarHalf } from "react-icons/lia";

const Article = ({ feedbackItem }) => {
  // console.log(feedbackItem);
  const { name, userImg, review } = feedbackItem;
  
  return (
    <div>
      <div className="card h-60 bg-primary text-primary-content">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <img src={userImg} className="w-12 h-12 rounded-full" />
            <h2 className="card-title">{name}</h2>
          </div>

          <p className="text-justify">{review}</p>

          <div className="flex items-center justify-between">
            <p>{new Date().toLocaleDateString()}</p>
            <div className="flex items-center">
              <LiaStarSolid></LiaStarSolid>
              <LiaStarSolid></LiaStarSolid>
              <LiaStarSolid></LiaStarSolid>
              <LiaStarSolid></LiaStarSolid>
              <LiaStarHalf></LiaStarHalf>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
