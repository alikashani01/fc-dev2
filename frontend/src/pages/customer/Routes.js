import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Customer from './Customer';
import Dashboard from './dashboard/Dashboard';
import Books from './book/list/Books';
import BookDetails from './book/details/Details';
import Profile from './profile/Profile';


const CustomerRoutes = () => {

    return (
        <Routes>

            <Route path = '/customer' element = {<Customer />}>
                
                <Route path = '' element = {<Dashboard />} />
                
                <Route path = 'profile' element = {<Profile />} />
                
                <Route path = 'books' element = {<Books />} />
                
                <Route path = 'books/book/:id' element = {<BookDetails />} />

            </Route>

        </Routes>
    );
};

export default CustomerRoutes;