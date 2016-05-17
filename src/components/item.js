import React from 'react';

export class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = { complete: this.props.complete };
    }
    render() {
        return (
            <div className={ this.state.complete ? 'item complete' : 'item incomplete' }
                 onClick={ () => this.setState({complete: !this.state.complete })} >
                { this.props.content }
            </div>
        );
    }
}
