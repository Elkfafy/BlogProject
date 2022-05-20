// importing react
import React from 'react';

// importing other components
import Header from '../../Components/Header/Header.jsx';
import Posts from '../../Components/Posts/Posts.jsx';
import SideBar from '../../Components/SideBar/SideBar.jsx';

//importing styling
import './home.css';

export default function Home() {
    return(
        <React.Fragment>

            <Header />
            <div className='home'>
                <Posts />
                <SideBar />
            </div>
        </React.Fragment>

    );
}