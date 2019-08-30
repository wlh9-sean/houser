import React, { Component } from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import './Dashboard.css'

export default class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            houses: []
        }
    }
    render() {
        return (
            <div className='Container'>
                <div className='Head'>
                    <h1>Dashboard</h1>
                    <Link to='/wizard'>
                        <button className='Button'>Add New Property</button>
                    </Link>
                </div>

                <div className='HouseContainer'>
                    <House />
                </div>
                
            </div>
        )
    }
}
