import React, { Component } from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <Link to='/wizard'>
                    <button>Add New Property</button>
                </Link>
                <House />
            </div>
        )
    }
}
