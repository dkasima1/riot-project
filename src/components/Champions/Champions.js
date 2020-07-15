import React from "react";
import ReactDOM from 'react-dom';
import { Card, Button } from 'react-bootstrap';

var championIcons = []

class Champions extends React.Component {
    importAll(r) {
        return r.keys().map(r);
    }

    componentWillMount() {
        championIcons = this.importAll(require.context('./../../assets/10.14.1/img/champion', false, /\.(png|jpe?g|svg)$/))
    }

    render() {
        return (
            <div>
                {
                    championIcons.map(
                        (image, index) => (
                            <img style={{padding: '5px'}} className="col-md-1" key={index} src={image} alt="info"></img>
                        )
                    )
                }       
            </div>
        )
    }
}

export default Champions;