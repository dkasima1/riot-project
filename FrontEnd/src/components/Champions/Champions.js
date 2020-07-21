import React from "react";
import ReactDOM from 'react-dom';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

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
                <div style={{textAlign: 'center'}} className="page-header">
                    <h1>Champion List</h1>
                </div>
                {
                    championIcons.map(
                        (image, index) => (
                            <Link to={'/Champions/' + image.slice(27, -13)}>
                                <img style={{padding: '5px'}} className="col-md-1" key={index} src={image} alt="info"></img>
                            </Link>
                        )
                    )
                }       
            </div>
        )
    }
}

export default Champions;