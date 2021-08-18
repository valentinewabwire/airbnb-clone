import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
        {/* <Card
          src="https://cdn.pixabay.com/photo/2014/12/10/06/49/venetian-562762_960_720.jpg"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201_960_720.jpg"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        /> */}
      </div>
      <div className="home__section">
        <Card
          src="https://cdn.pixabay.com/photo/2014/12/10/06/49/venetian-562762_960_720.jpg"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
          price="£75/night"
        />
        <Card
          src="https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201_960_720.jpg"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
          price="£40/night"
        />
        <Card
          src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
          price="£70/night"
        />
      </div>
    </div>
  );
}

export default Home;
