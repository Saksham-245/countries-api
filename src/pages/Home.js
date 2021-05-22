import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar/TopBar";
import axios from "axios";
import Card from "../components/Card/Cards";
import Spinner from "../components/Spinner/Spinner";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      const data = res.data.slice(0, 98);
      setLoading(false);
      setCards(data);
    });
  }, []);

  return (
    <div>
      <TopBar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginLeft: "5%",
          marginRight: "5%",
        }}
      >
        {loading ? (
          <Spinner />
        ) : (
          cards.map((data, i) => {
            return (
              <Card
                key={i}
                country={data.name}
                source={data.flag}
                population={data.population.toLocaleString("en-US")}
                region={data.region}
                capital={data.capital}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
