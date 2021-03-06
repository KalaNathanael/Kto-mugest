import React from 'react';

class ContentCard extends React.Component {

    render(){
        return (
            <div className={`${this.props.specialClass} col-7 card card-${this.props.cardColor} card-corner p-0 block align-items-center justify-content-center`} >
                <div className="container overflow-scroll container-padding">
                    <div className="overlay-fit pt-0 overflow-hidden direct-content-box">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );  
    }
}

export default ContentCard;