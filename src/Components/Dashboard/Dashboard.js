import React, { Component } from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import './Dashboard.css'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            houses: [],
            edit: false,
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
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
        axios.delete(`/api/house/${id}`).then(response => {
            this.setState({
                houses: response.data
            })
        }).catch(err => console.log(err))
    }

    updateHouse = (id) => {
        let updatedHouse = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }
        axios.put(`/api/house/${id}`, updatedHouse).then(res => {
            this.setState({
                houses: res.data,
                edit: false
            })
        })
    }

    editClick = () => {
        this.setState({
            edit: !this.edit
        })
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const mappedHouses = this.state.houses.map((house, i) => {
            return(
                <div key={house.id} className='House'>
                    {!this.state.edit ? 
                    <div>
                        <h1>{house.name}</h1>
                        <h1>{house.address}</h1>
                        <h1>{house.city}</h1>
                        <h1>{house.state}</h1>
                        <h1>{house.zip}</h1>
                        <button onClick={() => this.deleteHouse(house.id)}>Delete</button>
                        <button onClick={() => this.editClick()}>Edit</button>
                    </div>
                    :
                    <div className='House'>
                        <input 
                            type='text'
                            name='name'
                            onChange={(event) => this.handleInput(event)}></input>
                        <input
                            type='text'
                            name='address'
                            onChange={(event) => this.handleInput(event)}></input>
                        <input
                            type='text'
                            name='city'
                            onChange={(event) => this.handleInput(event)}></input>
                        <input
                            type='text'
                            name='state'
                            onChange={(event) => this.handleInput(event)}></input>
                        <input
                            type='number'
                            name='zip'
                            onChange={(event) => this.handleInput(event)}></input>
                        <button onClick={() => this.updateHouse(house.id)}>Update</button>
                        <Link to ='/'>
                            <button>Cancel</button>
                        </Link>
                    </div>
                }
                </div>
            )
        })
        return (
            <div className='Container'>
                <div className='Head'>
                    <h1>Dashboard</h1>
                    <Link to='/wizard'>
                        <button className='Button'>Add New Property</button>
                    </Link>
                </div>

                <div className='HouseContainer'>
                    <House houses={this.state.houses} delete={this.deleteHouse}/>
                    <div>{mappedHouses}</div>
                </div>
                
            </div>
        )
    }
}
