import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white text-xl font-semibold">Ecommerce</a>

            
                <div className="space-x-4">
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">About Us</a>
                    <a href="#" className="text-white">Contact</a>
                </div>
              <CartWidget/>
            </div>
        </nav>
    );
};

export default Navbar;