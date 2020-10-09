import React from 'react';
import SideTitle from '../../SideTitle';
import ContentCard from '../../ContentCard';
import UserForm from '../../UserForm';
import PageWrapper from '../../PageWrapper';

class EnregistrerUser extends React.Component {

    render(){
        return (
            <PageWrapper>
                <SideTitle titre="Enregistrer un membre" />
                <ContentCard cardColor="red" specialClass="mr-5">
                    <UserForm />
                </ContentCard>
            </PageWrapper>
        );
    }
}

export default EnregistrerUser;