import React from "react";
import { Button } from 'react-bootstrap'
import { ButtonToolbar } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'
import { DropdownButton } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
class Leaderboards extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/Challenger')
            .then((res) => res.json())
            .then((data) => {
                data.entries.sort((a, b) => b.leaguePoints - a.leaguePoints);
                this.setState({ data: data.entries });
            });
    }

    render() {
        let i = 1
        return (
            <div>
                <br /><br />

                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Button>TOP</Button> <Button>JNG</Button> <Button>MID</Button> <Button>BOT</Button> <Button>SUP</Button>
                    </ButtonGroup>
                    <DropdownButton id="dropdown-basic-button" title="Rank">
                        <Dropdown.Item href="#/action-1">Masters+</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Diamond+</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Platinum+</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">All Ranks</Dropdown.Item>
                    </DropdownButton>{'   '}
                    <DropdownButton id="dropdown-basic-button" title="Patch">
                        <Dropdown.Item href="#/action-1">10.14</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">10.13</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">10.12</Dropdown.Item>
                    </DropdownButton>{'   '}
                    <DropdownButton id="dropdown-basic-button" title="Region">
                        <Dropdown.Item href="#/action-1">North America</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Europe West</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Korea</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">China</Dropdown.Item>
                    </DropdownButton>
                </ButtonToolbar>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Icon</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Win Rate</th>
                            <th>Pick Rate</th>
                            <th>Ban Rate</th>
                        </tr>
                    </thead>
                    <tbody>{this.state.data.map(function (item, key) {
                        return (
                            <tr key={key}>
                                <td>{i++}</td>
                                <td>{item.summonerName}</td>
                                <td>{item.leaguePoints}</td>
                                <td>{item.wins}</td>
                                <td>{item.losses}</td>
                            </tr>
                        )
                    })}</tbody>
                </table>

            </div>
        )
    }
}

export default Leaderboards