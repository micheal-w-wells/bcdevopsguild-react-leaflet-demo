import * as React from "react";
import "./styles.css";
import * as pizzageojson from "./pizzaGeoJson.json";
import { PizzaMarkers } from "./PizzaMarkers";

//import "leaflet/dist/leaflet.css";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
  GeoJSON
} from "react-leaflet";
import { GeoJsonObject } from "geojson";
export default function App() {
  const center: [number, number] = [51.1664, -120.906];
  return (
    <div className="App">
      <div>
        <MapContainer center={center} zoom={15} minZoom={0} id="mapid">
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
            <LayersControl.Overlay checked name="custom geojson">
              <GeoJSON
                key={Math.random()}
                data={
                  {
                    type: "FeatureCollection",
                    features: [
                      {
                        type: "Feature",
                        properties: {},
                        geometry: {
                          type: "Polygon",
                          coordinates: [
                            [
                              [-120.65760612487792, 50.95588567468203],
                              [-120.61975479125977, 50.95588567468203],
                              [-120.61975479125977, 50.96502198849013],
                              [-120.65760612487792, 50.96502198849013],
                              [-120.65760612487792, 50.95588567468203]
                            ]
                          ]
                        }
                      }
                    ]
                  } as GeoJsonObject
                }
              />
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Licensed Pizza Establishments">
              <PizzaMarkers inputGeoJSON={pizzageojson} />
            </LayersControl.Overlay>
          </LayersControl>
        </MapContainer>
      </div>
    </div>
  );
}
