import React from 'react';
import './Connexion.css'

class Connexion extends React.Component {

    render(){
        return (
            <div className="connexion">
                <div className="main">
                    <img className="logo-co" alt="Logo KTO-Mugest" src={require("../../../assets/img/logo-co.png")} />
                    
                    <div className="form-card">
                        <h1 className="co-titre">CONNEXION</h1>
                        <form>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Nom d'utilisateur*" />
                                <div className="side-img">
                                    <img className="small-img" src={require("../../../assets/img/connexion/id-card-min.png")} alt="" />
                                </div>
                            </div>
                            <div className="input-group">
                                <input type="password" className="form-control" placeholder="Mot de passe*" />
                                <div className="side-img">
                                    <img className="small-img" src={require("../../../assets/img/connexion/user-min.png")} alt="" />
                                </div>
                            </div>
                            <div className="input-group mb-2">
                                <a className="forgot-password" href="/">Mot de passe oublié</a>
                            </div>
                            <div className="input-group center mb-2">
                                <button className="submit-button" type="submit">Se connecter</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Connexion;