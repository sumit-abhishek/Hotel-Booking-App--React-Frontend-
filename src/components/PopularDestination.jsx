import React from "react";
import locationLansdowne from "../assets/location-lansdowne.jpg";
import locationKanatal from "../assets/location-kanatal.jpg";
import locationChakrata from "../assets/location-chakrata.jpg";
import locationHarshil from "../assets/location-harshil.jpg";
import locationMussoorie from "../assets/location-mussoriee.jpg";
import locationChopta from "../assets/location-chopta.jpg";
import "../style/popularDestination.css";
import PopularDestinationCard from "./PopularDestinationCard";

const popularDestinationCardDetails = [
  {
    image: locationLansdowne,
    title: "Lansdowne",
    desc: "Discover Lansdowne Hill Station's charm with its scenic beauty, colonial architecture, and peaceful surroundings ideal for relaxation and rejuvenation.",
  },
  {
    image: locationKanatal,
    title: "Kanatal",
    desc: "Kanatal Hill Station offers panoramic mountain views, serene surroundings, and adventure activities, making it a perfect escape for nature enthusiasts.",
  },
  {
    image: locationChakrata,
    title: "Chakrata",
    desc: "Experience Chakrata Hill Station's tranquility, where untouched beauty, peaceful surroundings, and fresh mountain air create an idyllic retreat.",
  },
  {
    image: locationHarshil,
    title: "Harshil",
    desc: "Discover Harshil Valley's charm with lush greenery, peaceful villages, and breathtaking mountain scenery, ideal for nature lovers and adventurers.",
  },
  {
    image: locationMussoorie,
    title: "Mussoorie",
    desc: 'Mussoorie Hill Station, the "Queen of Hills," boasts breathtaking views, serene trails, and a delightful ambiance for relaxation and adventure.',
  },
  {
    image: locationChopta,
    title: "Chopta",
    desc: "Chopta Hill Station features majestic peaks, verdant valleys, and a tranquil atmosphere, making it an ideal destination for nature lovers.",
  },
];
const PopularDestination = () => {
  return (
    <div className="destination-main">
      <div className="destination">
        <div className="destination-heading">
          <h2>Popular Destinations You Can Travel</h2>
          <p>
            Discover breathtaking hilly destinations with stunning vistas,
            perfect for adventure seekers and nature lovers alike.
          </p>
        </div>
        <div className="destination-section">
          {popularDestinationCardDetails.map((item, index) => (
            <PopularDestinationCard key={index} cardDetails={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
