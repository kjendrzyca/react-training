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
        console.log('thank you for recommendation', this.state);
    },

    render () {
        return (
            <div className="Recommend">
                <form>
                    <input disabled type="text" value={this.props.params.name} />
                    <input onChange={this._onEmailChange} type="email" />
                    <textarea cols="30" onChange={this._onTextChange} rows="10" />
                    <button className="btn btn-success" type="submit" onClick={this._recommend}>Recommend</button>
                </form>
            </div>
        );
    }
});

export default Recommend;
