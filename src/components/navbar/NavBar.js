import React from 'react';

class NavBar extends React.Component {

    render(){
        return (
            <div>
                <nav className="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
                    <ul className="nav sidebar-nav">
                        <div className="sidebar-header">
                            <div className="sidebar-brand pt-2">
                                <h4 className="text-white h5 text-left"><img src={require("../../assets/img/Logo-UCAC-1.png")} alt="" className="logo" />  KTO-Mugest </h4>
                            </div>
                        </div>
                        <li className="dropdown">
                            <a href="#consulter" className="dropdown-toggle my-3"  data-toggle="dropdown">Consulter <span className="caret"></span></a>
                            <ul className="dropdown-menu animated fadeInLeft" role="menu">
                                <li><a href="#situation" id="situation">Sa situation</a></li>
                                <li><a href="#videos" id="assistances">Les assistances sociales</a></li>
                                <li><a href="#">Consulter état des autres comptes</a></li>                
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#envoyer" className="dropdown-toggle my-3"  data-toggle="dropdown">Envoyer <span className="caret"></span></a>
                            <ul className="dropdown-menu animated fadeInLeft" role="menu">
                                <li><a href="#pictures" id="sms-bureau"><i className="fa fa-envelope-o"></i>  SMS au bureau</a></li>
                                <li><a href="#videos" id="sms-membre"><i className="fa fa-envelope-o"></i>  SMS à un Membre</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#enregistrer" className="dropdown-toggle my-3"  data-toggle="dropdown">Enregistrer <span className="caret"></span></a>
                            <ul className="dropdown-menu animated fadeInLeft" role="menu">
                                <li><a href="#videos" id="membre">Un Membre</a></li>
                                <li><a href="#books" id="depense">Une Dépense</a></li>
                                <li><a href="#books" id="cotisation">Une Cotisation</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <button type="button" className="hamburger animated fadeInLeft bg-light p-4 corner-smoother is-closed" data-toggle="offcanvas">
                    <span className="hamb-top"></span>
                    <span className="hamb-middle"></span>
                    <span className="hamb-bottom"></span>
                </button>
            </div>
        );
    }
}

export default NavBar;