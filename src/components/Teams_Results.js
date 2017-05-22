import React from 'react';

class Teams_Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                
        }
    }   

    render() {
        return (
            <div>
                <span className='title'>W:</span> {this.props.fixtures.length}
                <span className='title'> L:</span> {this.props.fixtures.length}
                <span className='title'> D:</span> {this.props.fixtures.length}
                <span className='title'> Total:</span> {this.props.fixtures.length}
                <span className='title'> Win Ratio:</span> {this.props.fixtures.length}
            </div>
        );
    }
}

export default Teams_Results;