import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white text-xl font-semibold">Ecommerce</a>


                <div className="space-x-4">
    
                    <Link to={'/'}> Home </Link>
                    <Link to={'/category/celular'}> Celulares </Link>
                    <Link to={'/category/tablet'}> Tablet </Link>


            </div>
            <CartWidget />
        </div>
        </nav >
    );
};

export default Navbar;