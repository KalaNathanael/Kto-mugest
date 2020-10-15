import React from 'react';
import Connexion from './pages/connexion/Connexion';
import NavBar from './NavBar';
import EnregistrerUser from './pages/enregistrer-utilisateur/EnregistrerUser';
import DetailUtilisateur from './pages/detail-utilisateur/DetailUtilisateur';
import DetailComptes from './pages/detail-comptes/DetailComptes';
import { Route, Redirect,  Switch } from 'react-router-dom';

const App = () => {
    return (
        <div id="wrapper" className="vh-100 vw-100 background-1">
            <NavBar />
            <Switch>
                <Route path="/consulter/sa-situation">
                    <DetailUtilisateur />
                </Route>
                <Route path="/consulter/etat-autres-comptes" >
                    <DetailComptes />
                </Route>
                <Route path="/enregistrer/membre" >
                    <EnregistrerUser />
                </Route>
                <Route path="/">
                    <Redirect to="/consulter/etat-autres-comptes" />
                </Route>
                <Route component={DetailUtilisateur} />
            </Switch>
        </div>
        
    );
}

export default App;