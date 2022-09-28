import React from 'react';
import {Link} from "react-router-dom";
import MainNavbar from "./MainNavbar";

const SideBar = (props) => {
    return (
        <div className={`${props.status ? "side-bar" : "side-bar-none"}`}>
            <div className="header">
             <div className="d-flex   justify-content-between">
                 <div>
                     <h3>Eshonib Bahodir</h3>
                     <p>2183912738</p>
                 </div>
                 <div>
                     <button onClick={<MainNavbar status2={false} />}>
                         <img src="./img/exit.png" className="mt-2" alt=""/>
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
                        <Link >Личный кабинет</Link>
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
    );
};

export default SideBar;