import React from 'react';

class SideTitle extends React.Component {


    render(){
        return (
            <div className="card bg-transparent border-0 col-3 vh-100 p-0">
                <img src={require("../assets/img/bord-gauche.png")} alt="revetement du bord gauche" className="card-img p-0 background-fit" />
                <div className="card-img-overlay d-flex p-0 align-items-center">
                   <h1 id="title" className=" mb-4 ml-4 w-75">{this.props.titre}</h1>
                </div>
            </div>
        );
    }
}

export default SideTitle;