import * as React from "react";
import { Marker, LayerGroup } from "react-leaflet";
import { Icon } from "leaflet";
import pizzaPng from "./pizza.png";
var pizzaIcon = new Icon({
  iconUrl: pizzaPng,
  iconSize: [50, 50], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

export const PizzaMarkers = (props) => {
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
        />
      ))}
    </LayerGroup>
  );
};
