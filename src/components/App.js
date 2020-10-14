import React from 'react';
import Connexion from './pages/connexion/Connexion';
import NavBar from './NavBar';
import EnregistrerUser from './pages/enregistrer-utilisateur/EnregistrerUser';
import DetailUtilisateur from './pages/detail-utilisateur/DetailUtilisateur';
import DetailComptes from './pages/detail-comptes/DetailComptes';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <div id="wrapper" className="vh-100 vw-100 background-1">
            {/* <Connexion /> */}
            <NavBar />
            {/* <DetailUtilisateur /> */}
            <EnregistrerUser />
            {/* <DetailComptes /> */}
        </div>
        
    );
}

export default App;