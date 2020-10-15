import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    render(){
        return (
            <div>
                <nav className="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
                    <ul className="nav sidebar-nav">
                        <div className="sidebar-header">
                            <div className="sidebar-brand pt-2">
                                <h4 className="text-white h5 text-left"><img src={require("../assets/img/Logo-UCAC-1.png")} alt="" className="logo" />  KTO-Mugest </h4>
                            </div>
                        </div>
                        <li className="dropdown">
                            <Link to="" className="dropdown-toggle my-3"  data-toggle="dropdown">Consulter <span className="caret"></span></Link>
                            <ul className="dropdown-menu animated fadeInLeft" role="menu">
                                <li><Link to="/consulter/sa-situation" id="situation">Sa situation</Link></li>
                                <li><Link to="#videos" id="assistances">Les assistances sociales</Link></li>
                                <li><Link to="/consulter/etat-autres-comptes">Consulter état des autres comptes</Link></li>                
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="" className="dropdown-toggle my-3"  data-toggle="dropdown">Envoyer <span className="caret"></span></Link>
                            <ul className="dropdown-menu animated fadeInLeft" role="menu">
                                <li><Link to="#pictures" id="sms-bureau"><i className="fa fa-envelope-o"></i>  SMS au bureau</Link></li>
                                <li><Link to="#videos" id="sms-membre"><i className="fa fa-envelope-o"></i>  SMS à un Membre</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="" className="dropdown-toggle my-3"  data-toggle="dropdown">Enregistrer <span className="caret"></span></Link>
                            <ul className="dropdown-menu animated fadeInLeft" role="menu">
                                <li><Link to="/enregistrer/membre" id="membre">Un Membre</Link></li>
                                <li><Link to="#books" id="depense">Une Dépense</Link></li>
                                <li><Link to="#books" id="cotisation">Une Cotisation</Link></li>
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