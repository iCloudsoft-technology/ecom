import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  // Round the rating to the nearest half-star
  const roundedRating = Math.round(rating * 2) / 2;

  // Create an array representing the star icons
  const stars = Array.from({ length: 5 }, (_, index) => {
    const isHalfStar = roundedRating - index === 0.5;
    const isFilledStar = index < roundedRating;
    return (
      <span key={index}>
        {isFilledStar ? (
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "gold", fontSize: "13px" }}
          />
        ) : isHalfStar ? (
          <FontAwesomeIcon
            icon={faStar}
            style={{ width: "50%", color: "gold", fontSize: "13px" }}
          />
        ) : (
          <FontAwesomeIcon icon={faStar} style={{ color: "lightgray" }} />
        )}
      </span>
    );
  });

  return <div>{stars}</div>;
};

export default StarRating;
