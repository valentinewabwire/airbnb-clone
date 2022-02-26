import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";

//ES7 snippet to do 'rfce'
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://cdn.pixabay.com/photo/2015/05/23/16/59/homestead-780767_960_720.jpg"
          title="Online Experince"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <Card
          src="https://cdn.pixabay.com/photo/2021/10/09/00/15/landscape-6692712_960_720.jpg"
          title="Unique Stay"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <Card
          src="https://cdn.pixabay.com/photo/2019/06/25/22/30/manor-house-4299218_960_720.jpg"
          title="Entire homes"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://cdn.pixabay.com/photo/2016/08/21/17/07/penthouse-1610299_960_720.jpg"
          title="Mansion in Malindi"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          price="$ 250 /night"
        />
        <Card
          src="https://cdn.pixabay.com/photo/2020/09/03/10/57/bedroom-5540915_960_720.jpg"
          title="Sarova Mombasa"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          price="$ 450 /night"
        />
        <Card
          src="https://cdn.pixabay.com/photo/2021/07/20/06/09/balcony-6479821_960_720.jpg"
          title="Lamu stay"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          price="$ 50 /night"
        />
      </div>
    </div>
  );
}

export default Home;
