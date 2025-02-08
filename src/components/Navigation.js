import React from 'react';
import "./Navigation.css";
import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const Navigation = () => {
    
    return (
        <div className='nav-container'>
            <div className='nav-wrapper'>
                <a className='logo'>
                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.14464 11.4012C0.53458 12.9839 -2.54718 22.8025 3.55345 21.5106C7.04401 20.6708 10.9434 15.5677 14.4025 14.7925C19.7484 13.5329 19.9685 21.123 19.2453 24.6435C19.1195 25.7739 19.1509 26.1938 19.4654 25.8062C20.7862 24.0298 22.4843 19.0882 22.4843 16.3106C22.6729 12.887 21.8553 7.97764 17.956 7.49317C13.6792 6.62112 7.29559 15.7292 4.18238 14.1143C3.55345 13.4683 3.77357 11.918 3.23898 11.4012H3.14464Z" fill="white"/>
                        <path d="M21.761 6.65342C23.5498 6.65342 25 5.164 25 3.32671C25 1.48942 23.5498 0 21.761 0C19.9721 0 18.522 1.48942 18.522 3.32671C18.522 5.164 19.9721 6.65342 21.761 6.65342Z" fill="white"/>
                    </svg>
                </a>
                <a className='stagger-link'>
                    <span className='stagger-link-text'>Menu</span>
                </a>
            </div>
        </div>
    )
};

export default Navigation;