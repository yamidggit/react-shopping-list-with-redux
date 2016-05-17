import React from 'react';

export class Item extends React.Component {
    render() {
        return (
            <div className={ this.props.complete ? 'item complete' : 'item incomplete' }>
                { this.props.content }
            </div>
        );
    }
}
