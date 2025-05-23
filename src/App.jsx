import style from "./App.module.css";
import { Card } from "./components/card";
import img1 from "./assets/images/1.jpg";
import img2 from "./assets/images/2.jpg";
import img3 from "./assets/images/3.jpg";

import { MapContainer, TileLayer, Marker, Popup  } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

function App() {
  // function outra(){
  //   console.log("alguma coisa")
  // }

  const position = [-25.424847, -49.2749795];

  return (
    <>
      <section>
        <h1 className={style.title}>Cards - componentes</h1>
        {/* <button onClick={outra}>clique</button> */}
        <Card
          name={"Paisagem 01"}
          desc={"Descrição de alguma paisagem de exemplo"}
          img={img1}
        />
        <Card
          name={"Paisagem 02"}
          desc={"Descrição de alguma paisagem de exemplo"}
          img={img2}
        />
        <Card
          name={"Paisagem 03"}
          desc={"Descrição de alguma paisagem de exemplo"}
          img={img3}
        />
      </section>
      <h1 className={style.title}>Mapa</h1>
      <section>
        <MapContainer center={position} zoom={30} scrollWheelZoom={false} style={{ width: "100%", height: "400px" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </section>
    </>
  );
}

export default App;
