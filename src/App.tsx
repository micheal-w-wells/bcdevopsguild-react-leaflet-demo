import * as React from 'react';
import './styles.css';
import * as pizzageojson from './pizzaGeoJson.json';
import * as favpizzaspots from './favpizzaspots.json';

import { PizzaMarkers } from './PizzaMarkers';

//import "leaflet/dist/leaflet.css";
import { LayersControl, MapContainer, TileLayer, WMSTileLayer, GeoJSON } from 'react-leaflet';
import { GeoJsonObject } from 'geojson';
export default function App() {
  const center: [number, number] = [51.1664, -120.906];
  return (
    <div className="App">
      <div>
        <MapContainer center={center} zoom={15} minZoom={0} id="mapid">
          <LayersControl position={'bottomright'}>
            <LayersControl.BaseLayer checked name="Base Layer">
              <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
            </LayersControl.BaseLayer>
            <LayersControl.Overlay checked={false} name="Regional Districts">
              <WMSTileLayer
                key={Math.random()}
                transparent={true}
                opacity={0.5}
                format={'image/png'}
                url="http://openmaps.gov.bc.ca/geo/ows"
                layers={'WHSE_LEGAL_ADMIN_BOUNDARIES.ABMS_REGIONAL_DISTRICTS_SP'}
              />
            </LayersControl.Overlay>
            <LayersControl.Overlay checked={false} name="Old Growth">
              <WMSTileLayer
                key={Math.random()}
                transparent={true}
                opacity={0.5}
                format={'image/png'}
                url="http://openmaps.gov.bc.ca/geo/ows"
                layers={'WHSE_FOREST_VEGETATION.OGSR_TAP_PRIORITY_DEF_AREA_SP'}
              />
            </LayersControl.Overlay>
            <LayersControl.Overlay checked={false} name="Fed Parks">
              <WMSTileLayer
                key={Math.random()}
                transparent={true}
                opacity={0.5}
                format={'image/png'}
                url="http://openmaps.gov.bc.ca/geo/ows"
                layers={'WHSE_ADMIN_BOUNDARIES.CLAB_NATIONAL_PARKS'}
              />
            </LayersControl.Overlay>
            <LayersControl.Overlay checked={false} name="Licensed Pizza Establishments">
              <PizzaMarkers inputGeoJSON={pizzageojson} />
            </LayersControl.Overlay>
          </LayersControl>
        </MapContainer>
      </div>
    </div>
  );
}
