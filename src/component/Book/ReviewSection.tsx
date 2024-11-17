import React, { useState } from "react";
import {
  useAddReviewsMutation,
  useGetAllReviewsQuery,
} from "../../redux/features/reviews/reviewSlice";
import { useAppDispatch } from "../../redux/hooks";

interface Review {
  text: string;
  reviewer: string;
}

const ReviewSection: React.FC = () => {
  const [addReviews, { isLoading, isSuccess }] = useAddReviewsMutation();
  const { data: reviews } = useGetAllReviewsQuery(undefined);
  const [review, setReview] = useState("");
  const [reviewerName, setReviewerName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newReview = { text: review, reviewer: reviewerName };
    const result: any = await addReviews(newReview);
    if (result?.acknowledged) {
      setReview("");
      setReviewerName("");
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mt-8 mb-4">Add Your Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Your Name:</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md mb-2"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Review:</label>
          <textarea
            className="w-full p-2 border rounded-md mb-4"
            placeholder="Write your review here..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          {isLoading ? "Loading" : "Submit Review"}
        </button>
      </form>
      <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
      {reviews?.length > 0 ? (
        <div className="space-y-4">
          {reviews
            ?.map((review, index) => (
              <div key={index} className="p-4 border rounded-md bg-gray-50">
                <p className="text-gray-800">{review.text}</p>
                <p className="text-sm text-gray-500">- {review.reviewer}</p>
              </div>
            ))
            .reverse()}
        </div>
      ) : (
        <p>No reviews yet. Be the first to review this book!</p>
      )}
    </div>
  );
};

export default ReviewSection;
