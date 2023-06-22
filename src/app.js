import React from 'react'
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom'

//* PAGES  *//
import Main from './Pages/Main/Main.js'
import TheHotel from './Pages/TheHotel/TheHotel.js'
import Rooms from './Pages/Rooms/Rooms.js'
import Dining from './Pages/Dining/Dining.js'
import Spa from './Pages/Spa/Spa.js'
import AreaAttractions from './Pages/AreaAttractions/AreaAttractions.js'
import Reservations from './Pages/Reservations/Reservations.js'

//* COMPONENETS *//
import Navbar from './Components/Navbar/Navbar.js'
import Footer from './Components/Footer/Footer.js'

const App = () => {
    return (
        <div>
        <Navbar />
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Main />} />
            <Route path="hotel" element={<TheHotel />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="dining" element={<Dining />} />
            <Route path="spa" element={<Spa />} />
            <Route path="areaAttractions" element={<AreaAttractions />} />
            <Route path="reservations" element={<Reservations />} />
            </Routes>
        </BrowserRouter>
        <Footer />
        </div>
    )
}

export default App; 