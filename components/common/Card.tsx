import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  price,
  location,
  onClick,
}) => {
  return (
    <div
      className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>

        {location && <p className="text-gray-500 text-sm mt-2">{location}</p>}
        {price && (
          <p className="text-blue-600 font-semibold text-sm mt-1">{price}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
