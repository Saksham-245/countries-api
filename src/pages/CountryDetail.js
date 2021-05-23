import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner/Spinner";
import TopBar from "../components/TopBar/TopBar";
import classes from "./CountryDetail.module.css";

const CountryDetail = ({ match }) => {
  const {
    params: { name },
  } = match;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
      .then((res) => {
        setData(res.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [name]);
  return (
    <div>
      <TopBar />
      <div style={{ marginTop: "10%", marginLeft: "5%", display: "flex" }}>
        {loading ? (
          <Spinner />
        ) : (
          <div style={{ display: "flex" }}>
            <div>
              <img src={data.flag} alt={data.name} />
            </div>
            <div style={{ marginTop: -45 }}>
              <h2 className={classes.heading}>{data.name}</h2>
              <div style={{ display: "flex" }}>
                <div className={classes.dataOne}>
                  <p>
                    <strong>Native Name: </strong> {data.nativeName}
                  </p>
                  <p>
                    <strong>Population: </strong>{" "}
                    {data.population.toLocaleString("en-US")}
                  </p>
                  <p>
                    <strong>Region: </strong> {data.region}
                  </p>
                  <p>
                    <strong>Sub Region: </strong> {data.subregion}
                  </p>
                  <p>
                    <strong>Capital: </strong> {data.capital}
                  </p>
                  <p>
                    <strong>Border Countries: </strong>
                  </p>
                </div>
                <div className={classes.dataTwo}>
                  <p>
                    <strong>Top Level Domain: </strong>
                    {data.topLevelDomain}
                  </p>
                  <p>
                    <strong>Currencies: </strong>
                    {data.currencies[0].name}
                  </p>
                  <p>
                    <strong>Languages: </strong>
                    {data.languages[0].name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetail;
