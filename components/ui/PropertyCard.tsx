// components/ui/PropertyCard.tsx
import React from "react";
import { PropertyProps } from "@/interfaces";
import { Star } from "lucide-react";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{property.name}</h2>
        <p className="text-gray-500 text-sm">{property.address.city}, {property.address.country}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold">${property.price}</span>
          <div className="flex items-center text-yellow-500">
            <Star size={16} className="mr-1" />
            {property.rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
