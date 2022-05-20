import React from 'react';
import './sidebar.css';

export default function SideBar(){
    return(
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME</span>
                <img 
                    src='https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?cs=srgb&dl=pexels-alena-koval-886521.jpg&fm=jpg'
                    alt='about me'
                    height='150px'
                />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'><span>Life</span></li>
                    <li className='sidebarListItem'><span>Music</span></li>
                    <li className='sidebarListItem'><span>Style</span></li>
                    <li className='sidebarListItem'><span>Sport</span></li>
                    <li className='sidebarListItem'><span>Cinema</span></li>
                    <li className='sidebarListItem'><span>Tech</span></li>
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className='sidebarSocial'>
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
}