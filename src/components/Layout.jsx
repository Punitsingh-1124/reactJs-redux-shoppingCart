import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import CardTab from './CardTab';
import { useSelector } from 'react-redux';

const Layout = () => {
    const statusTabCart = useSelector(store => store.cart.stateTab);

    return (
        <div className="bg-zinc-200">
            <main className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500 ${statusTabCart === false ? '' : '-translate-x-56'}`}>
                <Header />
                <Outlet />
            </main>
            <CardTab />
        </div>
    );
};

export default Layout;
