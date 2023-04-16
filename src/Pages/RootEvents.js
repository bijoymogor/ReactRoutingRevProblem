import { Outlet } from "react-router-dom";
import React from 'react'

import EventsNavigation from "../components/EventsNavigation";

function RootEvents() {
    return (
        <>
            <EventsNavigation/>
            <Outlet/>
        </>
    )
}

export default RootEvents