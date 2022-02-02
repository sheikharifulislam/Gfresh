import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import {FirebaseContext} from '../../../context/FirebaseProvider';
import './dashboardHome.css';

const DashboardHome = () => {
   
    
    return (
        <section id="deashboard-home-section">
            <div className="all-data-container">
            <div className="single-data-area">
                <div className="single-data-area-title">
                    <h2>abc</h2>
                </div>
                <div className="single-data-area-data">
                    <small>def</small>
                </div>
            </div>
            </div>
        </section>
    );
};

export default DashboardHome;