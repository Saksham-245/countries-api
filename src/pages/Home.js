import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar/TopBar";
import Card from "../components/Cards";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  useEffect(() => {}, []);

  return (
    <div>
      <TopBar />
      {/* {cards.map((data) => {
        console.log(data);
        return <Card />;
      })} */}
      <Card />
      Home
    </div>
  );
};

export default Home;
