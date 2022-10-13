import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './_Navbar'

const Template = () => {
    return (
        <div>
            <Navbar />

            <Outlet />
            dfsd
        </div>
    )
}

export default Template