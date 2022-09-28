import React, {useState} from 'react';
import {Link} from "react-router-dom";
import SideBar from "./SideBar";

const MainNavbar = (props) => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }
    return (
        <div>

        <div className="MainNavbar">
            <div className="topNav d-flex">
                <button onClick={toggle}>
                    <img src="./img/hamburger.png"  />
                </button>
                <input type="text" placeholder="введите номер зоны" className="form-control border-0"/>
            </div>

        </div>

            <div className={`${open ? "side-bar left-bar-active" : "side-bar left-bar"}`}>
                <div className="header">
                    <div className="d-flex   justify-content-between">
                        <div>
                            <h3>Eshonib Bahodir</h3>
                            <p>2183912738</p>
                        </div>
                        <div>
                            <button onClick={() => setOpen(false)}>
                                <img src="./img/cancel.png" className="mt-2" alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="wallet">
                        <h3>Баланс</h3>
                        <div className="d-flex align-items-center">
                            <p >0 so'm</p>
                            <button className="ml-2">
                                <img src="./img/wallet.png" alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <ul>
                        <li>
                            <Link to="personal-cabinet">Личный кабинет</Link>
                        </li>
                        <li>
                            <Link >Найти парковку </Link>
                        </li>
                        <li>
                            <Link >Текущие парковки </Link>
                        </li>
                        <li>
                            <Link >Штрафы</Link>
                        </li>
                        <li>
                            <Link >Карта парковок</Link>
                        </li>
                        <li>
                            <Link >О проекте</Link>
                        </li>
                        <li>
                            <Link >Способы оплаты</Link>
                        </li>
                        <li>
                            <Link >Лыготы</Link>
                        </li>
                        <li>
                            <Link >Штрафы</Link>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="mainFooter">
                <div>
                    <button>
                        <img src="./img/home2.png" alt=""/>

                    </button>
                </div>
                <div>
                    <button>
                        <img src="./img/cube.png" alt=""/>

                    </button>
                </div>
                <div>
                    <button>
                        <img src="./img/message.png" alt=""/>
                    </button>
                </div>
                <div>
                    <button>
                        <img src="./img/layer.png" alt=""/>
                    </button>
                </div>
                <div>
                    <button onClick={toggle}>
                        <img src="./img/hamburger2.png"  />
                    </button>
                </div>
            </div>
        </div>

);
};

export default MainNavbar;