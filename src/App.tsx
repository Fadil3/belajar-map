import { MapContainer, TileLayer, useMap, Popup, Polygon, FeatureGroup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from 'react';
import { Feature, Root, dataJSON } from './data';

const MyData = () => {
  const [data, setData] = useState<Root>(dataJSON);
  const map = useMap();

  useEffect(() => {
    setData(
      dataJSON
    );
  }, []);

  console.log(dataJSON);
  if (data) {
    // // These next 3 lines purely for debuggins:
    // const geojsonObject = L.geoJSON(data);
    // map.fitBounds(geojsonObject.getBounds());
    // console.log(geojsonObject);

    // set center of map
    map.setView([data.features[0].geometry.coordinates[0][0][1], data.features[0].geometry.coordinates[0][0][0]], 17);

    return (data.features.map((feature: Feature, idx: number) => {
      return (
        <FeatureGroup key={idx} >
          <Popup eventHandlers={
            {
              click: (e) => {
                map.fitBounds(e.target.getBounds());
              }
            }
          }>
            <h2>{feature.properties.pond_uuid_lele}</h2>
            <p>{feature.properties.pond_area_m2}</p>
            <p>{feature.properties.sub_district}</p>
            <p>{feature.properties.district}</p>
            <p>{feature.properties.province}</p>
            <p>{feature.properties.country}</p>
            <button type="submit" onClick={() => {
              console.log(feature.properties.pond_uuid_lele);
            }}>Pond Detail</button>
          </Popup>
          {/* draw polygon */}
          <Polygon
            positions={feature.geometry.coordinates[0].map((coord) => {
              return [coord[1], coord[0]];
            })}
          />
        </FeatureGroup >)
    }))
  } else {
    return null;
  }
};

function App() {
  return (
    <MapContainer
      zoom={30}
      style={{ height: '100vh', width: '100wh' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
      />
      <MyData />
    </MapContainer>

  )
}

export default App
