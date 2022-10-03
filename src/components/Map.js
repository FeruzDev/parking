import React, {useEffect, useRef, useState} from 'react';
import {Circle, Marker, Polyline, Popup, Tooltip, useMap, MapContainer , TileLayer} from "react-leaflet";
import L, {DomUtil as  MarkerCluster} from 'leaflet'
import "../map.css"
import axios from 'axios'
import {Link} from "react-router-dom";
import MainNavbar from "./MainNavbar";
import icon from './Const'
import useGeoLocation from "./Geo";
const Map = () => {
    const [open, setOpen] = useState(false)
    const [bigData, setBigData] = useState([])
    const [selectData, setSelectData] = useState({})
    const position = [41.321423, 69.253122]
    const limeOptions = { color: '#026BB6' }

    const mapRef = useRef();
    function LocationMarker() {
        const [position, setPosition] = useState(null);
        const [bbox, setBbox] = useState([]);

        const map = useMap();


        useEffect(() => {
            map.locate().on("locationfound", function (e) {
                setPosition(e.latlng);
                map.flyTo(e.latlng, map.getZoom());
                const radius = e.accuracy;
                // const circle = L.circle(e.latlng, radius);
                // circle.addTo(map);
                setBbox(e.bounds.toBBoxString().split(","));
            });
        }, [map]);

        return position === null ? null : (
            // eslint-disable-next-line no-undef
            <Marker position={position} icon={icon}>
                <Popup>
                    You are here. <br />
                    Map bbox: <br />
                    <b>Southwest lng</b>: {bbox[0]} <br />
                    <b>Southwest lat</b>: {bbox[1]} <br />
                    <b>Northeast lng</b>: {bbox[2]} <br />
                    <b>Northeast lat</b>: {bbox[3]}
                </Popup>
            </Marker>
        );
    }



    const markerIcon = new L.Icon({
        // iconUrl: require("resources/images/marker.png"),
        iconSize: [40, 40],
        iconAnchor: [17, 46], //[left/right, top/bottom]
        popupAnchor: [0, -46], //[left/right, top/bottom]
    });


    const location = useGeoLocation();
    const ZOOM_LEVEL = 9;
    const showMyLocation = () => {
        if (location.loaded && !location.error) {
            mapRef.current.leafletElement.flyTo(
                [location.coordinates.lat, location.coordinates.lng],
                ZOOM_LEVEL,
                { animate: true }
            );
        } else {
            alert(location.error.message);
        }
    };

    useEffect(()=>{
        axios.get("https://parking.burgutsoft.uz/api/zones/")
            .then( res =>{
                setBigData(res.data)
                console.log(res.data.data)
            })

    }, [])
    return (
        <div>
            <MainNavbar />

            <MapContainer  center={position} zoom={17} locate={true}  scrollWheelZoom={true} zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                {
                    bigData?.map(item =>(

                            <>

                                <Polyline eventHandlers={{
                                    click: (e) => {
                                        setSelectData(item)
                                        setOpen(true)
                                    },
                                }}
                                          weight={6}  pathOptions={limeOptions}   positions={item.content} >
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


                                    {/*<Tooltip direction="top" offset={[0, 10]} opacity={1} permanent>*/}
                                    {/*    {item.cost}  so'm*/}
                                    {/*</Tooltip>*/}




                                </Polyline>
                                <Marker position={item.centerpoly[0] == 0 ? "" : item.centerpoly}>

                                </Marker>

                            </>
                    ))
                }


                <LocationMarker />


            </MapContainer>


            <button className="btn btn-primary bg-white geoBtn"  onClick={showMyLocation}><img src="/img/pin.png" alt=""/></button>

            <div  className={`${open ? "d-block" : "d-none"} popup-main`}>
                {
                    console.log(selectData)
                }
                <button onClick={() => setOpen(false)}><img src="./img/cross.png" alt=""/></button>
                <h3> Зона №{selectData?.zone_id}</h3>
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