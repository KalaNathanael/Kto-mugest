import React from 'react';
import './DetailUtilisateur.css';
import PageWrapper from '../../PageWrapper';
import InfoUser from '../../InfoUser';
import ContentCard from '../../ContentCard';
import TableauFinance from '../../TableauFinance';

class DetailUtilisateur extends React.Component {

    render(){
        return (
            <PageWrapper>
                <InfoUser />
                <ContentCard cardColor="green" specialClass="small-card">
                    <h1 className="text-white text-center titre-card mt-4 mb-2rem">Etat des Finances</h1>
                    <div className="table-scroll-container">
                        <TableauFinance type="user" />
                    </div>
                </ContentCard>
            </PageWrapper>
        );
    }
}

export default DetailUtilisateur;