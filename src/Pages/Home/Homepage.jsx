import React, { useState } from "react";
import pokeDatos from "./Pokedata";
import "./Homepage.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSortAlphaDown } from "@fortawesome/free-solid-svg-icons";
import { faSortNumericDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

library.add(faSortAlphaDown);
library.add(faSortNumericDown);

const Homepage = () => {
  const [filter, setFilter] = useState([]);

  const [order, setOrder] = useState(pokeDatos);
  const [alphabeticOrder, setAlphabeticOrder] = useState(false);

  const orderByNumber = () => {
    const numberAscending = [...order].sort((a, b) => (a.id < b.id ? -1 : 1));
    setOrder(numberAscending);
    setAlphabeticOrder(false);
  };

  const orderByName = () => {
    const stringAscending = [...order].sort((a, b) =>
      a.name < b.name ? -1 : 1
    );
    setOrder(stringAscending);
    setAlphabeticOrder(true);
  };

  const searchText = (event) => {
    if (event.target.value == "") {
      setOrder(pokeDatos);
    } else {
      setFilter(event.target.value);
      let filtro = event.target.value;
      let arrayFiltrado = pokeDatos.filter((item) =>
        item.name.toLowerCase().includes(filtro)
      );
      setOrder(arrayFiltrado);
    }
  };

  return (
    <>
      <div className="header">
        <img className="pokedex-logo" src="/images/logo.png" alt="Logo" />
      </div>
      <section className="py-4 container">
        <div className="row md-3 justify-content-center content-center">
          <div className="col-12 searchbar ">
            <div className="col-12 md-8 text-center">
              <input
                type="text"
                placeholder="Enter Pokemon Name..."
                className="from-control"
                onChange={searchText.bind(this)}
              />
              <div className="searchIcon">
                <SearchIcon />
              </div>
              <div className="sortButton mx-4 pt-2">
                {alphabeticOrder ? (
                  <FontAwesomeIcon
                    icon="fas fa-sort-numeric-down"
                    onClick={() => orderByNumber()}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon="fas fa-sort-alpha-down"
                    onClick={() => orderByName()}
                  />
                )}
              </div>
            </div>
          </div>

          <Row xs={2} md={4} className="gx-4 gy-4">
            {order.map((item, index) => {
              return (
                <Link className="classLink" to={`/detallePokemon/${item.name}`}>
                  <Col key={index}>
                    <Card
                      className="borderCard"
                      style={{
                        borderColor: item?.color,
                        borderWidth: "5.5px",
                        boxShadow: "0 0 10px grey",
                        backdropFilter: "blur(8px)",
                        backgroundColor: "transparent",
                      }}
                    >
                      <p className="pokeId" style={{ color: item?.color }}>
                        #{item?.id}
                      </p>
                      <Card.Img
                        variant="top"
                        src={item?.image}
                        className="cardPhoto"
                      />
                      <Card.Text
                        className="card-title"
                        style={{ backgroundColor: item?.color }}
                      >
                        {item?.name}
                      </Card.Text>
                    </Card>
                  </Col>
                </Link>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Homepage;
