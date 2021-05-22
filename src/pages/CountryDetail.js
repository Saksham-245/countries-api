import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import TopBar from "../components/TopBar/TopBar";
import "./CountryDetail.css";

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
      <div style={{ marginTop: "5%", marginLeft: "5%" }}>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <img src={data.flag} alt={data.name} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetail;
