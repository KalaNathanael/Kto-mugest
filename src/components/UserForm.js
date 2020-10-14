import React from 'react';
import './UserForm.css';

class UserForm extends React.Component {

    render(){
        return (
            <form id="form" className="text-white mt-4 pt-0">
                <div className="d-flex">
                    <div className="ml-2 col-9">
                        <div className="form-group row">
                            <label htmlFor="pseudo" className="col text-right form-label" >Nom d'utilisateur</label>
                            <input id="pseudo" type="text" className="form-control-user text-white form-control bg-transparent border-red col-7" />
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="nom" className="col text-right form-label">Nom</label>
                            <input id="nom" type="text" className="form-control-user text-white form-control bg-transparent border-red col-7" />
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="prenom" className="col text-right form-label">Prénom</label>
                            <input id="prenom" type="text" className="form-control-user text-white form-control bg-transparent border-red col-7" />
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="email" className="col text-right form-label">E-Mail</label>
                            <input id="email" type="e-mail" className="form-control-user text-white form-control bg-transparent border-red col-7" />
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="statut" className="col text-right form-label">Statut</label>
                            <input id="statut" type="text" className="form-control-user text-white form-control bg-transparent border-red col-7" />
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="age" className="col text-right form-label">Age</label>
                            <input id="age" type="number" className="form-control-user text-white form-control bg-transparent border-red col-7" />
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="personnel" className="col text-right form-label">Personnel</label>
                            <input id="personnel" type="text" className="form-control-user text-white form-control bg-transparent border-red col-7" />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="pseudo" className="col text-right form-label" >Nombre d'enfants</label>
                            <input id="pseudo" type="number" className="form-control-user text-white form-control bg-transparent border-red col-7" />
                        </div>
                        <div className="form-group row justify-content-end">
                            <input type="submit" className="mt-2 align-self-center btn text-white btn-style" value="Enregistrer" />
                        </div>
                    </div>
                    <div className="ml-2">
                        <div className="d-flex flex-wrap">
                            <div className="small-icon">
                                <img src={require("../assets/img/no-photo.png")} alt="" className="medium-icon" />
                            </div>
                            <input type="file" name="profilePhoto" accept="image/*" className=" form-control-file" />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default UserForm;