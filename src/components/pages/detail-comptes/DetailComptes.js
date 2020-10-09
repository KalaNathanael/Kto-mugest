import React from 'react';
import './DetailComptes.css';
import PageWrapper from '../../PageWrapper';
import SideTitle from '../../SideTitle';
import ContentCard from '../../ContentCard';
import TableauFinance from '../../TableauFinance';

class DetailComptes extends React.Component {

    render(){
        return (
            <PageWrapper>
                <SideTitle titre="Etat des autres Comptes" />
                <ContentCard cardColor="green" specialClass="mr-5" >
                    <TableauFinance type="all" />
                </ContentCard>
            </PageWrapper>
        );
    }
}

export default DetailComptes;