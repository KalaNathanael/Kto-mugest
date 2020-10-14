import React from 'react';

class TableauFinance extends React.Component {

    renderTableHead(type){
        if(type==="user"){
            return (
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Cotisation</th>
                        <th scope="col">Dette</th>
                        <th scope="col">Créance</th>
                        <th scope="col">Solde</th>
                        <th scope="col">Cérémonie</th>
                        <th scope="col">Receveur de fonds</th>
                    </tr>
                </thead>
            );
        }else {
            return(
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Membres</th>
                        <th scope="col">Statut</th>
                        <th scope="col">Personnel</th>
                        <th scope="col">Date</th>
                        <th scope="col">Cotisation</th>
                        <th scope="col">Dette</th>
                        <th scope="col">Créance</th>
                        <th scope="col">Solde</th>
                        <th scope="col">Cérémonie</th>
                        <th scope="col">Receveur de fonds</th>
                    </tr>
                </thead>    
            );
        }
    }

    renderTableData(type){
        if(type==="user"){
            return (
                <tbody>
                    <tr>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                </tbody>
            );
        }else{
            return (
                <tbody>
                    <tr>
                        <td className="table-light">Membres</td>
                        <td className="table-light">Statut</td>
                        <td className="table-light">Personnel</td>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Membres</td>
                        <td className="table-light">Statut</td>
                        <td className="table-light">Personnel</td>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Membres</td>
                        <td className="table-light">Statut</td>
                        <td className="table-light">Personnel</td>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Membres</td>
                        <td className="table-light">Statut</td>
                        <td className="table-light">Personnel</td>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Membres</td>
                        <td className="table-light">Statut</td>
                        <td className="table-light">Personnel</td>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Membres</td>
                        <td className="table-light">Statut</td>
                        <td className="table-light">Personnel</td>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Membres</td>
                        <td className="table-light">Statut</td>
                        <td className="table-light">Personnel</td>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Membres</td>
                        <td className="table-light">Statut</td>
                        <td className="table-light">Personnel</td>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Membres</td>
                        <td className="table-light">Statut</td>
                        <td className="table-light">Personnel</td>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Membres</td>
                        <td className="table-light">Statut</td>
                        <td className="table-light">Personnel</td>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Membres</td>
                        <td className="table-light">Statut</td>
                        <td className="table-light">Personnel</td>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Membres</td>
                        <td className="table-light">Statut</td>
                        <td className="table-light">Personnel</td>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Membres</td>
                        <td className="table-light">Statut</td>
                        <td className="table-light">Personnel</td>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Membres</td>
                        <td className="table-light">Statut</td>
                        <td className="table-light">Personnel</td>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                    <tr>
                        <td className="table-light">Membres</td>
                        <td className="table-light">Statut</td>
                        <td className="table-light">Personnel</td>
                        <td className="table-light">Date</td>
                        <td className="table-light">Cotisation</td>
                        <td className="table-light">Dette</td>
                        <td className="table-light">Créance</td>
                        <td className="table-light">Solde</td>
                        <td className="table-light">Cérémonie</td>
                        <td className="table-light">Receveur de fonds</td>
                    </tr> 
                </tbody>
            );
        }
    }

    render(){
        return (
            <table className={`table table-hover table-striped table-bordered  ${this.props.type!=="user" ? "table-responsive mb-0" : "" } overlay-fit`}>
                { this.renderTableHead(this.props.type) }
                { this.renderTableData(this.props.type) }
            </table>
        );
    }
}

export default TableauFinance;