import * as React from "react";
import {
  Marker,
  LayerGroup,
  useMapEvent,
  MapContainer,
  Popup
} from "react-leaflet";
import { Icon } from "leaflet";
import pizzaPng from "./pizza.png";
var pizzaIcon = new Icon({
  iconUrl: pizzaPng,
  iconSize: [50, 50], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

export const PizzaMarkers = (props) => {
  useMapEvent("overlayadd", (event) => {
    console.dir(event);
    if (event.name === "Licensed Pizza Establishments") {
      alert("I hope you like pizza and liquor");
    }
  });
  return (
    <LayerGroup>
      {props.inputGeoJSON.features.map((feature) => (
        <Marker
          key={Math.random()}
          icon={pizzaIcon}
          position={[
            feature.geometry.coordinates[1],
            feature.geometry.coordinates[0]
          ]}
        >
          <Popup key={Math.random()} maxHeight={100}>
            This would be a good place for a menu component
          </Popup>
        </Marker>
      ))}
    </LayerGroup>
  );
};
