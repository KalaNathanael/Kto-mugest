import React from 'react';

class PageWrapper extends React.Component {
    
    render(){
        return (
            <div id="elements" className="card p-0 border-0 bg-transparent d-flex flex-md-row card-img-overlay justify-content-between align-items-center">
                {this.props.children}
            </div>
        );
    }
}

export default PageWrapper;