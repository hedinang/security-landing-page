import { Card } from "antd"
import { GlobalOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import './style.scss'
import { useState } from "react";
import { IconLayer } from '@deck.gl/layers';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl';
import maplibregl from "maplibre-gl";

const ICON_MAPPING = {
    marker: { x: 0, y: 0, width: 128, height: 128, mask: true }
};

const data = [
    { name: 'Colma (COLM)', address: '376 buoi', exits: 4214, coordinates: [105.81465008529332, 21.04087243204058] },
]
const Contact = () => {
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
    return <div className="contact" id="contact">
        <h6>Liên hệ</h6>
        <div className="contact-content">
            <div>
                <Card hoverable>
                    <div className="contact-card">
                        <GlobalOutlined className="text-[30px] text-[#42baff]" />
                        <div>Trụ sở: Tầng 5 tòa nhà N2 đường Bưởi - Vĩnh Phúc - Ba Đình - Hà Nội</div>
                    </div>
                </Card>
                <Card hoverable>
                    <div className="contact-card">
                        <MailOutlined className="text-[30px] text-[#42baff]" />
                        <div>Email: info@tpss.vn</div>
                    </div>
                </Card>
                <Card hoverable>
                    <div className="contact-card">
                        <PhoneOutlined className="text-[30px] text-[#42baff]" />
                        <div>Số điện thoại: 0392200524</div>
                    </div>
                </Card>
            </div>
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
                            mapStyle='https://api.maptiler.com/maps/hybrid/style.json?key=6XB2ErrAynZGeRhk684q'
                        />
                    </DeckGL>
                </Card >

            </div>
        </div>
        <div className="mt-[30px]" />
    </div>
}
export default Contact
