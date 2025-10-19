import React, { useState } from "react";
import { HERO_BG, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/ui/Pill";
import PropertyCard from "@/components/ui/PropertyCard";
import { PropertyProps } from "@/interfaces";

const filters = ["Top Villa", "Self Checkin", "Beachfront", "Luxury", "City", "Countryside"];

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  // Filter properties based on selected filter
  const filteredProperties: PropertyProps[] = selectedFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.some((cat) =>
          cat.toLowerCase().includes(selectedFilter.toLowerCase())
        )
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[500px] flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <h1 className="text-4xl font-bold mb-4">Find your favorite place here!</h1>
        <p className="text-lg max-w-xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="my-8 max-w-7xl mx-auto px-4 flex flex-wrap gap-3">
        {filters.map((filter, index) => (
          <Pill
          key={index}
          label={filter}
          active={selectedFilter === filter}
          onClick={() =>
            setSelectedFilter(selectedFilter === filter ? "" : filter)
          }
          />
          ))}
      </section>

      {/* Listing Section */}
      <section className="my-8 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </section>
    </div>
  );
}
