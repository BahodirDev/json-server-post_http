import React from "react";


class Engine extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>Son: {this.props.sanoq}</h3>
                <button className='btn btn-primary' onClick={this.props.random}>Click</button>
            </div>

        )
    }

}

export default Engine;

