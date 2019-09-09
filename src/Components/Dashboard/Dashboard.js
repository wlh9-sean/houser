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

     componentDidMount = () => {
        axios.get('/api/houses').then(response => {
            this.setState({
                houses: response.data
            })
        }).catch(err => console.log(err))
    }

    deleteHouse = (id) => {
        axios.delete(`/api/houses/${id}`).then(res => {
            this.setState({
                houses: res.data
            })
        }).catch(err => console.log(err))
    }

    render() {
        console.log(this.state)
        const mappedHouses = this.state.houses.map((house, i) => {
            return(
                <div key={i}>
                    <h1>{house.name}</h1>
                    <h1>{house.address}</h1>
                    <h1>{house.city}</h1>
                    <h1>{house.state}</h1>
                    <h1>{house.zip}</h1>
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
                    <House houses={this.state.house}/>
                    <div>{mappedHouses}</div>
                </div>
                
            </div>
        )
    }
}
