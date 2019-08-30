import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Wizard extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createHouse = () => {
        const body = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }

        axios.post('/api/house', body).then(res => {
            this.setState({
                name: res.data,
                address: res.data,
                city: res.data,
                state: res.data,
                zip: res.data
            })
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className ='Container'>
                <div className='Head'>
                    <h1>Add New Listing</h1>
                    <Link to='/'>
                        <button className='ButtonTwo'>Cancel</button>
                    </Link>
                </div>

                <div className='Form'>

                    <label>Property Name</label> 
                        <input type='text' name='name' onChange={(event) => this.handleInput(event)} />

                    <label>Address</label> 
                        <input type='text' name='address' onChange={(event) => this.handleInput(event)} />
                    
                    <label>City</label> 
                        <input type='text' name='city' onChange={(event) => this.handleInput(event)} />
                    
                    <label>State</label> 
                        <input type='text' name='state' onChange={(event) => this.handleInput(event)} />
                    
                    <label>Zip</label> 
                        <input type='number' name='zip' onChange={(event) => this.handleInput(event)} />

                    <button onClick={this.createHouse} className='Button'>Complete</button>
                    
                </div>
            </div>
        )
    }
}
