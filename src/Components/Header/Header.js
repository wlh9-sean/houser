import React, { Component } from 'react'
import './Header.css'
import * as Icon from 'react-feather'


export default class Header extends Component {
    render() {
        return (
            <div className='Header'>
                    <div className='Icon'>
                        <Icon.Home />
                    </div>
                    <h1>Houser</h1>
            </div>
        )
    }
}
