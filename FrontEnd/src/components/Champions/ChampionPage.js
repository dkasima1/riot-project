import React from "react";
import ReactDOM from 'react-dom';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import {Table} from "react-bootstrap";
import axios from "axios";

class ChampionPage extends React.Component {

    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this)
        this.state = { data: []}
    }

    componentDidMount() {
        console.log(this.props.match.params.champion);
        this.fetchData();
    }

    render() {
        return <div>{this.state.data}</div>
    }

    fetchData() {
        axios.get('/ChampionPage/' + this.props.match.params.champion)
            .then((champion) => {
                console.log(champion);
            this.setState({ data: champion.data, loading: false }, () => console.log(this.state.data));
        });
    }
}

export default ChampionPage;