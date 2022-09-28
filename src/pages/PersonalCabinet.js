import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const PersonalCabinet = () => {
    function openCity(cityName) {
        var i;
        var x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(cityName).style.display = "block";
    }

    useEffect(() =>{

    },[])
    return (
        <div className="PersonalCabinet">
            <div className="pr-cabinet">
                <div className="header">
                    <div className="d-flex justify-content-between">
                        <Link to="/">
                            <img src="./img/arrow.png" alt=""/>
                        </Link>
                        <Link to="/settings">
                            <img src="./img/settings.png" alt=""/>
                        </Link>
                    </div>
                    <h3 className="text-white text-center mb-0 mt-5">Feruz Jalilov</h3>
                    <p  className="text-white text-center mt-0 mb-4" >712893719823</p>
                    <div className="d-flex justify-content-between">
                            <h6 className="m-0 text-white">Баланс</h6>
                            <h6 className="m-0 text-white">Гос.номер</h6>
                    </div>
                    <div className="d-flex justify-content-between mt-1">
                       <h4 className="text-white">
                           <span >0РУБ</span>
                           <Link><img src="./img/wallet.png" alt="" style={{marginLeft: "8px", marginTop: "-5px"}}/></Link>
                       </h4>
                        <h4 className="text-white">
                            B423423CE23
                        </h4>
                    </div>
                    </div>
            </div>
             <div className="d-flex justify-content-between">
                <button className="btn bg-transparent  pt-3 pb-3 w-100" onClick={() => openCity('history')}>ИСТОРИЯ</button>
                <button className="btn bg-transparent pt-3 pb-3  w-100" onClick={() => openCity('my_auto')}>МОИ АВТО</button>
                <button className="btn bg-transparent pt-3 pb-3  w-100" onClick={() => openCity('notification')}>УВЕДОМЛЕНИЯ</button>
            </div>

            <div id="history" className="  city">
                <div className="prCabinet">
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <div className="d-flex align-items-center">
                            <button><img src="./img/minus2.png" alt=""/></button>
                            <h3 className="m-0">Оплата</h3>
                            <span>
                                <img src="./img/car2.png" alt=""/>
                                D888XY716
                            </span>
                        </div>
                        <div>
                           <h4 className="m-0">
                               0.0 so'm
                           </h4>
                        </div>
                    </div>
                    <p className="prtitle">
                        Парковка в зоне №135 17 сентября 13:31 длительностю 03600600
                    </p>
                </div>
                <div className="prCabinet">
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <div className="d-flex align-items-center">
                            <button><img src="./img/minus2.png" alt=""/></button>
                            <h3 className="m-0">Оплата</h3>
                            <span>
                                <img src="./img/car2.png" alt=""/>
                                D888XY716
                            </span>
                        </div>
                        <div>
                           <h4 className="m-0">
                               0.0 so'm
                           </h4>
                        </div>
                    </div>
                    <p className="prtitle">
                        Парковка в зоне №135 17 сентября 13:31 длительностю 03600600
                    </p>
                </div>
                <div className="prCabinet">
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <div className="d-flex align-items-center">
                            <button><img src="./img/minus2.png" alt=""/></button>
                            <h3 className="m-0">Оплата</h3>
                            <span>
                                <img src="./img/car2.png" alt=""/>
                                D888XY716
                            </span>
                        </div>
                        <div>
                           <h4 className="m-0">
                               0.0 so'm
                           </h4>
                        </div>
                    </div>
                    <p className="prtitle">
                        Парковка в зоне №135 17 сентября 13:31 длительностю 03600600
                    </p>
                </div>
            </div>

            <div id="my_auto" className="  city" style={{display: "none"}}>
                <div className="myAuto">
                    <a href="#!">
                        Добавить авто
                    </a>

                    <div className="d-flex auto">
                        <img src="./img/star.png" className="d-block" alt=""/>
                 <div>
                     <h2>70H773OA</h2>
                     <span>
                            Легковые
                        </span>
                 </div>
                    </div>
                </div>
            </div>

            <div id="notification" className=" city" style={{display: "none"}}>
              <div className="not">
                  <a href="">
                      С 10 января 2022 года платное парковочное пространство г. Казани работает по новому графику:
                      - в рабочие дни с 8:00 до 19:00 парковка функционирует в платном режиме.
                      - с 19:00 до 08:00, а также в выходные и праздничные дни оплата не взымается.
                  </a>
              </div>
            </div>

        </div>
    );
};

export default PersonalCabinet;