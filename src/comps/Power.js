import React from "react";


class Power extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>Text: {this.props.string}</h3>
                <button className='btn btn-primary' onClick={this.props.randomText}>Click</button>
            </div>
        )
    }
}
export default Power;
