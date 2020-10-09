import React from 'react';

class ContentCard extends React.Component {

    render(){
        return (
            <div id="block" className={`${this.props.specialClass} col-7 card card-${this.props.cardColor} card-corner p-0 mt-5 block overflow-scroll align-items-center`} >
                <div className="container pt-0">
                    <div className="overlay-fit w-100 pt-0">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );  
    }
}

export default ContentCard;