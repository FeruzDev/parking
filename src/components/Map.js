import React, {useEffect, useState} from 'react';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import {Circle, Marker, Polyline, Popup, Tooltip} from "react-leaflet";
import L, {DomUtil as  MarkerCluster} from 'leaflet'
import "../map.css"
import axios from 'axios'
import MarkerClusterGroup from "react-leaflet-cluster";
import {Link} from "react-router-dom";
import MainNavbar from "./MainNavbar";
const Map = () => {
    const [open, setOpen] = useState(false)
    const [bigData, setBigData] = useState(false)
    const [selectData, setSelectData] = useState({})
    const position = [41.321423, 69.253122]
    const polyline = [
            {
            coordinates :[
                [41.321423, 69.253122],
               [41.321971, 69.244916],
            ],
                cost: "2000",
                name: "101"
             },
        {
            coordinates :[
                [41.33064, 69.24217],
                [41.33054, 69.24125],
                [41.33049, 69.24101],
                [41.33007, 69.24037],
                [41.32938, 69.23988],
            ],
                cost: "2000",
                name: "102"
             },
        {
            coordinates :[
                [41.3384, 69.2079],
                [41.3333, 69.2169],
            ],
                cost: "2000",
                name: "103"
             },
    ]
    const limeOptions = { color: '#026BB6' }

    var config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    };

    useEffect(()=>{
        axios.get("https://parking.burgutsoft.uz/api/zones")
            .then( res =>{
                setBigData(res.data.data)
            })
    }, [])
    return (
        <div>
            <MainNavbar />

            <MapContainer  center={position} zoom={17}   scrollWheelZoom={true} zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                {
                    polyline?.map(item =>(

                        <Polyline eventHandlers={{
                            click: (e) => {
                                setSelectData(item)
                                setOpen(true)
                            },
                        }}
                                  weight={6}  pathOptions={limeOptions}   positions={item.coordinates} >
                            {/*<Popup>*/}
                            {/*    <div  className="popup-main">*/}
                            {/*        <h3> Зона №{item.name}</h3>*/}
                            {/*        <span>Уличная парковка (УДС)</span>*/}
                            {/*        <p>Адрес</p>*/}
                            {/*        <span>  Лейтенанта Шмидта, 8</span>*/}
                            {/*        <label  >*/}
                            {/*            Цена за час*/}
                            {/*        </label>*/}
                            {/*        <p>70</p>*/}
                            {/*        <label htmlFor=""> Мест свободно</label>*/}
                            {/*        <p  >0 из 27</p>*/}
                            {/*        <label> Мест для инвалидов</label>*/}
                            {/*        <p>0</p>*/}
                            {/*        <Link to="/cabinet" className="btn btn-primary  main-button text-white mt-3 ">Оплатить парковку</Link>*/}
                            {/*    </div>*/}

                            {/*</Popup>*/}
                            <Tooltip direction="top" offset={[0, 10]} opacity={1} permanent>
                                {item.cost} so'm
                            </Tooltip>

                        </Polyline>


                    ))
                }
            </MapContainer>

            <div  className={`${open ? "d-block" : "d-none"} popup-main`}>
                <button onClick={() => setOpen(false)}><img src="./img/cross.png" alt=""/></button>
                <h3> Зона №{selectData?.name}</h3>
                <span>Уличная парковка (УДС)</span>
                <p>Адрес</p>
                <span>  Лейтенанта Шмидта, 8</span>
                <label  >
                    Цена за час
                </label>
                <p>70</p>
                <label htmlFor=""> Мест свободно</label>
                <p  >0 из 27</p>
                <label> Мест для инвалидов</label>
                <p>0</p>
                <Link to="/cabinet" className="btn btn-primary  main-button text-white mt-3 ">Оплатить парковку</Link>
            </div>
        </div>
    );
};

export default Map;