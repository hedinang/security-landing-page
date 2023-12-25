/* eslint-disable import/first */
import { useState } from 'react';
import DeckGL from '@deck.gl/react';
import { Card } from "antd"
import { LineLayer, TextLayer, IconLayer } from '@deck.gl/layers';

import { Map } from 'react-map-gl';
import maplibregl from "maplibre-gl";
// import "maplibre-gl/dist/maplibre-gl.css";
import './map.scss'

// Data to be used by the LineLayer
// const data = [
//   {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]},
//   {sourcePosition: [-20.41669, 100.7853], targetPosition: [-122.41669, 37.781]}
// ];

const ICON_MAPPING = {
  marker: { x: 0, y: 0, width: 128, height: 128, mask: true }
};

const data = [
  { name: 'Colma (COLM)', address: '376 buoi', exits: 4214, coordinates: [105.81465008529332, 21.04087243204058] },
]

export default function TestGL() {
  const [viewState, setViewState] = useState({
    longitude: 105.81465008529332,
    latitude: 21.04087243204058,
    zoom: 15
  });
  const layer = new IconLayer({
    id: 'icon-layer',
    data,
    pickable: true,
    iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
    iconMapping: ICON_MAPPING,
    getIcon: d => 'marker',

    sizeScale: 5,
    getPosition: d => d.coordinates,
    getSize: d => 5,
    getColor: d => [Math.sqrt(d.exits), 140, 0]
  });

  return (
    <div className='map'>
      <Card hoverable className='map-card'>
        <DeckGL
          viewState={viewState}
          onViewStateChange={({ viewState }) => setViewState(viewState)}
          // controller={{ dragPan: false }}
          controller={true}
          layers={[layer]}
        >
          <Map
            mapLib={maplibregl}
            mapStyle='https://api.maptiler.com/maps/topo/style.json?key=6XB2ErrAynZGeRhk684q'
          />
        </DeckGL>
      </Card >

    </div>
  );
}
