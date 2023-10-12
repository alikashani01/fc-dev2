import React from 'react';
import styles from './styles.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/general/landing/Landing';
import Artist from './pages/artist/Artist';
import Dashboard from './pages/artist/dashboard/Dashboard';
import ArtistBooks from './pages/artist/book/list/Books';
import ArtistBook from './pages/artist/book/details/Details';
import Schedule from './pages/artist/schedule/Schedule';
import Setting from './pages/artist/setting/main/Setting';
import Salon from './pages/artist/setting/salon/Salon';
import Skills from './pages/artist/setting/skills/Skills';
import Services from './pages/artist/setting/service/list/Services';
import NewService from './pages/artist/setting/service/new/NewService';
import EditService from './pages/artist/setting/service/edit/EditService';
import Profile from './pages/artist/setting/profile/Profile';
import CustomerRoutes from './pages/customer/Routes';
import BookingRoutes from './pages/booking/Routes';
import Day from './pages/artist/schedule/day/Day';
import NextWorkDays from './pages/artist/schedule/next-work-days/NextWorkDays';


const App = () => {
    return (
        <BrowserRouter>

            <div className={styles.sm_screen}>
                
                <Routes>

                    
                    <Route path = '/' element = {<Landing />} />
                    
                    {/* Artist: */}
                    <Route path = '/artist' element = {<Artist />}>
                        <Route path = '' element = {<Dashboard />} />
                        <Route path = 'books' element = {<ArtistBooks />} />
                        <Route path = 'books/book/:id' element = {<ArtistBook />} />
                        <Route path = 'schedule' element = {<Schedule />} />
                        <Route path = 'schedule/next-working-days' element = {<NextWorkDays />} />
                        <Route path = 'schedule/day/:dayName' element = {<Day />} />
                        <Route path = 'setting' element = {<Setting />} />
                        <Route path = 'setting/profile' element = {<Profile />} />
                        <Route path = 'setting/salon' element = {<Salon />} />
                        <Route path = 'setting/skills' element = {<Skills />} />
                        <Route path = 'setting/services' element = {<Services />} />
                        <Route path = 'setting/services/new' element = {<NewService />} />
                        <Route path = 'setting/services/service/:id' element = {<EditService />} />
                    </Route>

                </Routes>

                <CustomerRoutes />

                <BookingRoutes />

            </div>

        </BrowserRouter>
    );
};

export default App;