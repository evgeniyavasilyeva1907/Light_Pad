import React from 'react';
import './Lights.css';
import off from './img/off.png';
import on from './img/on.png'
import { connect } from 'react-redux';

function Lights(props) {
    console.log(props)
    const onClick = (index) => {
        props.onClicked(index)
    }
    return (
        <div className="lights">
            {props.items.map((light, index) => {
                console.log(light.power)
                return (<div className="off" key={index} onClick={onClick.bind(this, index)}>{light.power ? <img src={on} /> : <img src={off} />} </div>)
            })}
        </div>
    )
}

const mapStateToProps = state => {

    return {
        items: state
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onClicked: (index) => dispatch({
            type: 'ON_LIGHT',
            payload: {
                index,
            }
        }),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lights);