import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="mesta">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ">
                           <div className="mesta-count">
                               <div >
                                   <h2>132</h2>
                                   <p>ПАРКОВОК</p>
                               </div>
                               <div >
                                   <h2>3497</h2>
                                   <p>МЕСТ</p>
                               </div>
                               <div >
                                   <h2>2321</h2>
                                   <p>СВОБОДНО МЕСТ</p>
                               </div>
                           </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="emb">
                                <div>
                                    <div></div>
                                    <h3>ПЛАТНЫЕ ПАРКОВКИ</h3>
                                </div>
                                <div>
                                    <div></div>
                                    <h3>БЕСПЛАТНЫЕ ПАРКОВКИ</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="page-footer font-small footer-pair pt-4 ">
                <div className="container-fluid text-center text-md-left container">
                    <div className="row ">
                        <div className="col-md-3 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Parking Tashkent</h5>
                            <p>2022
                                Все права сохранены за своими правообладателями</p>
                        </div>
                        <div className="col-md-3 mt-md-0 mt-3">
                            <h3 className="text-uppercase">+998 99 581 19 29</h3>
                            <p>Единый контактный центр </p>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-3" />
                            <div className="col-md-3 mb-md-0 mb-3">
                                <h5 className="text-uppercase">Links</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 mb-md-0 mb-3">
                                <h5 className="text-uppercase">Links</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;