import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
// import "./styles.css";
import { MapContainer, TileLayer, Circle, FeatureGroup, Popup } from "react-leaflet";
// import ModalExample from "./ModalExample";

export default function App2() {
  const [modal, setModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState({});

  const toggle = () => setModal(!modal);

  const position = [39.74739, -105];

  const lightRailStop = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          name: "18th & California Light Rail Stop",
          otherProp: "Other Property 1"
        },
        geometry: {
          type: "Point",
          coordinates: [-104.98999178409576, 39.74683938093904]
        }
      },
      {
        type: "Feature",
        properties: {
          name: "20th & Welton Light Rail Stop",
          otherProp: "Other Property 2"
        },
        geometry: {
          type: "Point",
          coordinates: [-104.98689115047453, 39.747924136466565]
        }
      }
    ]
  };

  return (
    <>
      <MapContainer center={position} zoom={13} style={{ height: "100vh" }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {lightRailStop.features.map((feature, index) => {
          return (
            <FeatureGroup color="purple" key={index}>
              <Popup>
                <p>{feature.properties.name}</p>
                <button
                  id="button"
                  className="btn btn-primary"
                  onClick={() => {
                    toggle(true);
                    setSelectedFeature(feature);
                  }}
                >
                  More Info
                </button>
              </Popup>
              <Circle
                center={[
                  feature.geometry.coordinates[1],
                  feature.geometry.coordinates[0]
                ]}
                fillColor="#ff7800"
                radius={200}
                color={"#000"}
                weight={1}
                opacity={1}
                fillOpacity={0.8}
              />
              {/* <ModalExample
                modal={modal}
                toggle={toggle}
                selectedFeature={selectedFeature}
              /> */}
            </FeatureGroup>
          );
        })}
      </MapContainer>
    </>
  );
}
