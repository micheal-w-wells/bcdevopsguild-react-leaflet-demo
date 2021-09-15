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
        <MapContainer center={center} zoom={15} minZoom={6} id="mapid">
          <LayersControl position={"bottomright"}>
            <LayersControl.BaseLayer checked name="Base Layer">
              <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
            </LayersControl.BaseLayer>
            <LayersControl.Overlay checked name="Regional Districts">
              <WMSTileLayer
                key={Math.random()}
                transparent={true}
                opacity={0.5}
                format={"image/png"}
                url="http://openmaps.gov.bc.ca/geo/ows"
                layers={
                  "WHSE_LEGAL_ADMIN_BOUNDARIES.ABMS_REGIONAL_DISTRICTS_SP"
                }
              />
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Fed Parks">
              <WMSTileLayer
                key={Math.random()}
                transparent={true}
                opacity={0.5}
                format={"image/png"}
                url="http://openmaps.gov.bc.ca/geo/ows"
                layers={"WHSE_ADMIN_BOUNDARIES.CLAB_NATIONAL_PARKS"}
              />
            </LayersControl.Overlay>
          </LayersControl>
        </MapContainer>
      </div>
    </div>
  );
}
