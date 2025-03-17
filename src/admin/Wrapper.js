import React from 'react'
import Nav from './components/Nav'
import SideBar from './components/SideBar'

function Wrapper(props) {
    return (
        <div>
            <Nav />
            <div>
                <SideBar />
                {props.children}
            </div>
        </div>
    )
}

export default Wrapper
