/* eslint-disable import/first */
import { useState } from 'react';
import DeckGL from '@deck.gl/react';
import { LineLayer, TextLayer, IconLayer } from '@deck.gl/layers';
import { Map } from 'react-map-gl';
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

// Data to be used by the LineLayer
// const data = [
//   {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]},
//   {sourcePosition: [-20.41669, 100.7853], targetPosition: [-122.41669, 37.781]}
// ];

const ICON_MAPPING = {
  marker: {x: 0, y: 0, width: 128, height: 128, mask: true}
};

// const data = [
//   { name: 'Colma (COLM)', address: '365 D Street, Colma CA 94014', coordinates: [-122.466233, 37.684638] },
// ]

const data = [
  { name: 'Colma (COLM)', address: '365 D Street, Colma CA 94014', exits: 4214, coordinates: [-122.466233, 37.684638] },
]
export default function TestGL() {
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 1
  });

  // const layer = new TextLayer({
  //   id: 'text-layer',
  //   data,
  //   pickable: true,
  //   getPosition: d => d.coordinates,
  //   getText: d => d.name,
  //   getSize: 10,
  //   getAngle: 0,
  //   getTextAnchor: 'middle',
  //   getAlignmentBaseline: 'center'
  // });

  const layer = new IconLayer({
    id: 'icon-layer',
    data,
    pickable: true,
    // iconAtlas and iconMapping are required
    // getIcon: return a string
    iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
    iconMapping: ICON_MAPPING,
    getIcon: d => 'marker',

    sizeScale: 5,
    getPosition: d => d.coordinates,
    getSize: d => 5,
    getColor: d => [Math.sqrt(d.exits), 140, 0]
  });

  return (
    <div>
      <DeckGL
        style={{ width: 600, height: 400, overflow: "hidden" }}
        viewState={viewState}
        onViewStateChange={({ viewState }) => setViewState(viewState)}
        controller={true}
        layers={[layer]}
      >
        <Map
          mapLib={maplibregl}
          mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        />
      </DeckGL>
    </div>
  );
}
