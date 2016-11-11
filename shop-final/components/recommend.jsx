import React from 'react';
const PropTypes = React.PropTypes;

const Recommend = React.createClass({

    propTypes: {
        params: PropTypes.object.isRequired
    },

    getInitialState () {
        return {
            productName: '',
            email: '',
            text: ''
        };
    },

    componentDidMount () {
        this.setState({productName: this.props.params.name});
    },

    _onEmailChange (event) {
        this.setState({email: event.target.value});
    },

    _onTextChange (event) {
        this.setState({text: event.target.value});
    },

    _recommend () {
        confirm('thank you for recommendation');
        this.props.history.pushState(null, '/');
    },

    render () {
        return (
            <div className="Recommend">
                <form>
                    <div className="form-group">
                        <label>Product Name:</label>
                        <input className="form-control" disabled type="text" value={this.props.params.name} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input className="form-control" onChange={this._onEmailChange} type="email" />
                    </div>
                    <div className="form-group">
                        <label>Text</label>
                        <textarea className="form-control" cols="30" onChange={this._onTextChange} rows="10" />
                    </div>
                    <button className="btn btn-success" type="submit" onClick={this._recommend}>Recommend</button>
                </form>
            </div>
        );
    }
});

export default Recommend;
