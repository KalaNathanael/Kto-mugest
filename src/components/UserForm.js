import React from 'react';

class UserForm extends React.Component {

    render(){
        return (
            <form id="form" className="text-white mt-4 pt-0">
                <div className="d-flex">
                    <div className="ml-2 col-9">
                        <div className="form-group row">
                            <label htmlFor="pseudo" className="col text-left" >Pseudo</label>
                            <input id="pseudo" type="text" className="text-white form-control bg-transparent border-red col-7" />
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="nom" className="col">Nom</label>
                            <input id="nom" type="text" className="text-white form-control bg-transparent border-red col-7" />
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="prenom" className="col">Prénom</label>
                            <input id="prenom" type="text" className="text-white form-control bg-transparent border-red col-7" />
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="email" className="col">E-Mail</label>
                            <input id="email" type="e-mail" className="text-white form-control bg-transparent border-red col-7" />
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="statut" className="col">Statut</label>
                            <input id="statut" type="text" className="text-white form-control bg-transparent border-red col-7" />
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="age" className="col">Age</label>
                            <input id="age" type="number" className="text-white form-control bg-transparent border-red col-7" />
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="personnel" className="col">Personnel</label>
                            <input id="personnel" type="text" className="text-white form-control bg-transparent border-red col-7" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <input type="submit" className="mt-2 align-self-center btn border-white text-white" value="Enregistrer" />
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