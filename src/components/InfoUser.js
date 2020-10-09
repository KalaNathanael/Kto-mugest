import React from 'react';

class InfoUser extends React.Component {
    render(){
        return(
            <div id="info" className="col-5 card bg-transparent border-0 vh-100 p-0">
                <img src={require("../assets/img/bord-info.png")} alt="" className="card-img background-fit" />
                <div className="card-img-overlay">
                    <img src={require("../assets/img/no_profile.png")} alt="" className=" medium-icon rounded ml-8 " />
                    <div className="list-group d-flex flex-row">
                        <div>
                            <li className="list-group-item border-0 bg-transparent pl-0"><small className="text-muted">Nom d'utilisateur:</small><p>Username</p></li>
                            <li className="list-group-item border-0 bg-transparent pl-0"><small className="text-muted">Age:</small><p>Age</p></li>
                            <li className="list-group-item border-0 bg-transparent pl-0"><small className="text-muted">Personnel:</small><p>Personnel</p></li>
                        </div>

                        <div>
                            <li className="list-group-item border-0 bg-transparent"><small className="text-muted">Statut:</small><p>Status</p></li>
                            <li className="list-group-item border-0 bg-transparent"><small className="text-muted">E-mail:</small><p>Email</p></li>
                            <li className="list-group-item border-0 bg-transparent"><small className="text-muted">Nombre d'enfants:</small><p>Number of children</p></li>
                        </div>
                        
                    </div>
                    <a href="#" className="link">Telecharger RI <br/> version PDF</a>
                </div>
            </div>
        );
    }
}

export default InfoUser; 