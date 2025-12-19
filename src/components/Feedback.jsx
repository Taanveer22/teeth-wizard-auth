import Article from "./Article";

const Feedback = ({ feedbackData }) => {
  // console.log(feedbackData);
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-4">
        Customers Feedback
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
        {feedbackData.map((feedbackItem) => (
          <Article
            key={feedbackItem.reviewId}
            feedbackItem={feedbackItem}
          ></Article>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
