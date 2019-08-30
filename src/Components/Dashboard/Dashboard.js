import React, { Component } from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import './Dashboard.css'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            houses: []
        }
    }

     getHouses = () => {
        axios.get('/api/houses').then(response => {
            this.setState({
                houses: response.data
            })
        }).catch(err => console.log(err))
    }

    render() {
        console.log(this.state)
        const mappedHouses = this.state.houses.map((house, i) => {
            return(
                <div key={i}>
                    <h1>{house.name}</h1>
                </div>
            )
        })
        console.log(this.state)
        return (
            <div className='Container'>
                <div className='Head'>
                    <h1>Dashboard</h1>
                    <Link to='/wizard'>
                        <button className='Button'>Add New Property</button>
                    </Link>
                </div>

                <div className='HouseContainer'>
                    <House houses={this.state.houses}/>
                    <div>{mappedHouses}</div>
                </div>
                
            </div>
        )
    }
}
