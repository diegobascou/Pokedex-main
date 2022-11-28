import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Pokecard.css";
import pokeDatos from "../../Home/Pokedata";

function Pokecard() {
  const { name } = useParams();
  const navigate = useNavigate();


  const props = pokeDatos.find((pokemon) => {
    return pokemon.name == name;
  });

  const indexActual = pokeDatos.findIndex((pokemon) => {
    return pokemon.name == name;
  });

  function moveLeft() {
    if (indexActual == 0) {
      let indexLeft = pokeDatos.length - 1;
      const pokeLeft = pokeDatos[indexLeft];
      navigate("/detallePokemon/"+pokeLeft.name);
    } else {
      let indexLeft = indexActual - 1;
      const pokeLeft = pokeDatos[indexLeft];
      navigate("/detallePokemon/"+pokeLeft.name);
    }
  }

  function moveRight() {
    if (indexActual == pokeDatos.length - 1) {
      let indexRight = 0;
      const pokeRight = pokeDatos[indexRight];
      navigate("/detallePokemon/" + pokeRight.name);
    } else {
      let indexRight = indexActual + 1;
      const pokeRight = pokeDatos[indexRight];
      navigate("/detallePokemon/" + pokeRight.name);
    }
  }

  return (
    <div className="App">
      <div className="pokeCard">
        <div
          key={props.data}
          className="newCard"
          style={{ backgroundColor: props?.color }}
        >
          <div className="cardHeader">
            <div className="cardTitle">
              <img
                className="flechaIzq"
                src="/images/flecha-izquierda.png"
                onClick={() => {
                  navigate("../");
                }}
              ></img>
              <h2 className="nombre">{props.name}</h2>
            </div>
            <div className="cardId">
              <h4 className="id">#{props.id}</h4>
            </div>
          </div>
          <div className="imgContainer">
            <div className="cardImg">
            <img
                className="moveLeft"
                src="/images/moveleft.png"
                onClick={moveLeft}
              ></img>
              <img className="cardImage" src={props.image}></img>
              <img
                className="moveRight"
                src="/images/moveright.png"
                onClick={moveRight}
              ></img>

            </div>
          </div>

          <div className="main">
            <div className="type">
              <button
                className="main_type"
                style={{ backgroundColor: props?.color }}
              >
                {props?.main_type}
              </button>
              {props.secondary_color && (
                <button
                  className="secondary_type"
                  style={{ backgroundColor: props?.secondary_color }}
                >
                  {props?.secondary_type}
                </button>
              )}
            </div>
            <div className="aboutTitle">
              <h3 className="about" style={{ color: props?.color }}>
                About
              </h3>
            </div>
            <div className="gridContainer1">
              <div className="container1">
                <div className="weights">
                  <img
                    className="weightImage"
                    alt="weight"
                    src="/images/weight.svg"
                  ></img>
                  <p className="weightProp">{props.weight}</p>
                </div>
              </div>

              <div className="container2">
                <div className="heights">
                  <img className="heightImage" src="/images/height.svg"></img>
                  <p className="heightProp">{props.height}</p>
                </div>
              </div>

              <div className="container3">
                <div className="abilities">
                  <p className="main_ability">{props.main_ability}</p>
                  <p className="secondary_ability">{props.secondary_ability}</p>
                </div>
              </div>
            </div>
            <div className="gridContainer2">
              <div className="weight">
                <p>Weight</p>
              </div>
              <div className="height">
                <p>Height</p>
              </div>
              <div className="ability">
                <p>Moves</p>
              </div>
            </div>
            <div className="description">
              <p className="desc">{props.description}</p>
            </div>
            <div className="baseStats">
              <h3 className="stats" style={{ color: props?.color }}>
                Base Stats
              </h3>
            </div>
            <div className="progressContainer">
              <div className="progress1" style={{ color: props?.color }}>
                <p className="hp">
                  HP: {"|"} {"0"}
                  {props.stats.HP}{" "}
                  <progress max="200" value={props.stats.HP}>
                    47/68
                  </progress>
                </p>
              </div>
              <div className="progress1" style={{ color: props?.color }}>
                <p className="atk">
                  ATK: {"|"} {"0"}
                  {props.stats.ATK}{" "}
                  <progress max="200" value={props.stats.ATK}>
                    47/68
                  </progress>
                </p>
              </div>
              <div className="progress1" style={{ color: props?.color }}>
                <p className="def">
                  DEF: {"|"} {"0"}
                  {props.stats.DEF}{" "}
                  <progress max="200" value={props.stats.DEF}>
                    47/68
                  </progress>
                </p>
              </div>
              <div className="progress1" style={{ color: props?.color }}>
                <p>
                  SATK: {"|"} {"0"}
                  {props.stats.SATK}{" "}
                  <progress max="200" value={props.stats.SATK}>
                    47/68
                  </progress>
                </p>
              </div>
              <div className="progress1" style={{ color: props?.color }}>
                <p className="sdef">
                  SDEF: {"|"} {"0"}
                  {props.stats.SDEF}{" "}
                  <progress max="200" value={props.stats.SDEF}>
                    47/68
                  </progress>
                </p>
              </div>
              <div className="progress1" style={{ color: props?.color }}>
                <p className="spd">
                  SPD: {"|"} {"0"}
                  {props.stats.SPD}{" "}
                  <progress max="200" value={props.stats.SPD}>
                    47/68
                  </progress>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokecard;
