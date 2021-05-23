import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar/TopBar";
import axios from "axios";
import Card from "../components/Card/Cards";
import Spinner from "../components/Spinner/Spinner";
import { Link } from "react-router-dom";
import Search from "../components/Search/Search";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/").then((res) => {
      const data = res.data.slice(0, 96);
      setLoading(false);
      setCards(data);
    });
  }, []);

  return (
    <div>
      <TopBar />
      <Search />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginLeft: "5%",
          marginRight: "5%",
          paddingTop: "10%",
        }}
      >
        {loading ? (
          <Spinner />
        ) : (
          cards.map((data, i) => {
            return (
              <Link to={`/name/${data.name}`} key={i}>
                <Card
                  country={data.name}
                  source={data.flag}
                  population={data.population}
                  region={data.region}
                  capital={data.capital}
                />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
