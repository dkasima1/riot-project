import React from "react";
import ReactDOM from 'react-dom';

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
                        (image, index) => <img key={index} src={image} alt="info"></img>
                    )
                }       
            </div>
        )
    }
}

export default Champions;