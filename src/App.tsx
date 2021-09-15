import * as React from "react";
import "./styles.css";
//import "leaflet/dist/leaflet.css";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer
} from "react-leaflet";
export default function App() {
  const center: [number, number] = [51.1664, -120.906];
  return (
    <div className="App">
      <div>
        <MapContainer center={center} zoom={10} id="mapid">
          <LayersControl position={"bottomright"}>
            <LayersControl.BaseLayer checked name="Base Layer">
              <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
            </LayersControl.BaseLayer>
            <LayersControl.Overlay checked name="Pizza">
              <WMSTileLayer
                key={Math.random()}
                transparent={true}
                opacity={0.5}
                format={"image/png"}
                url="http://openmaps.gov.bc.ca/geo/ows"
                layers={"WHSE_FOREST_VEGETATION.BEC_BIOGEOCLIMATIC_POLY"}
              />
            </LayersControl.Overlay>
          </LayersControl>
        </MapContainer>
      </div>
    </div>
  );
}
