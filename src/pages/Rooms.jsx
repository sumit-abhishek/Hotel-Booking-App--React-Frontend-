import React from "react";
import RoomsFilter from "../components/RoomsFilter";
import RoomsCard from "../components/RoomsCard";
import jaypee from "../assets/jaypee.jpg";
import jwmarriott from "../assets/jw-marriott.jpg";
import bagoristay from "../assets/bagori-stay.jpg";
const locationData = [
  { text: "lansdowne", label: "Lansdowne" },
  { text: "chakrata", label: "Chakrata" },
  { text: "kanatal", label: "Kanatal" },
  { text: "mussoriee", label: "Mussoriee" },
  { text: "harshil", label: "Harshil" },
  { text: "chopta", label: "Chopta" },
];
const hotelClassData = [
  { text: "one-star", label: "1-Star" },
  { text: "two-star", label: "2-Star" },
  { text: "three-star", label: "3-Star" },
  { text: "four-star", label: "4-Star" },
  { text: "five-star", label: "5-Star" },
];
const popularFilterData = [
  { text: "freewifi", label: "Free Wifi" },
  { text: "breakfast", label: "Breakfast" },
  { text: "fitness", label: "Fitness Studio" },
  { text: "swimming", label: "Swimming Pool" },
  { text: "pet", label: "Pets Allowed" },
  { text: "camp", label: "Campsite" },
  { text: "bonfire", label: "Bonfire" },
  { text: "trek", label: "Trekking" },
];
const Rooms = () => {
  return (
    <>
      <div className="rooms-main">
        <div className="rooms">
          <form className="rooms-filter" id="search-filter">
            <RoomsFilter
              name={"location-rooms-filter"}
              type={"Radio"}
              title={"Location"}
              data={locationData}
            />
            <RoomsFilter
              name={"classification-rooms-filter"}
              type={"Radio"}
              title={"Hotel Class"}
              data={hotelClassData}
            />
            <RoomsFilter
              name={"popular-rooms-filter"}
              type={"checkbox"}
              title={"Popular Filters"}
              data={popularFilterData}
            />
            <div className="search-rooms-filter">
              <input className="btn btn-primary" type="submit" value="Search" />
            </div>
            <div className="reset-rooms-filter">
              <input className="btn btn-primary" type="reset" value="Reset" />
            </div>
          </form>
          <div className="rooms-availability">
            <RoomsCard
              data={{
                title: "Hotel Jaypee",
                image: jaypee,
                distance: 600,
                description:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt aut et numquam rerum obcaecati. Eius voluptatibus animi rerum deserunt praesentium quisquam nisi illo obcaecati, quidem non, nam quo cum sunt.",
              }}
            />
            <RoomsCard
              data={{
                title: "Hotel JW Marriott",
                image: jwmarriott,
                distance: 800,
                description:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt aut et numquam rerum obcaecati. Eius voluptatibus animi rerum deserunt praesentium quisquam nisi illo obcaecati, quidem non, nam quo cum sunt.",
              }}
            />
            <RoomsCard
              data={{
                title: "Bagori Stay",
                image: bagoristay,
                distance: 800,
                description:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt aut et numquam rerum obcaecati. Eius voluptatibus animi rerum deserunt praesentium quisquam nisi illo obcaecati, quidem non, nam quo cum sunt.",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
