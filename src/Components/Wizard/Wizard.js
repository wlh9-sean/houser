import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Wizard extends Component {
    render() {
        return (
            <div>
                <h1>Wizard</h1>
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
            </div>
        )
    }
}
