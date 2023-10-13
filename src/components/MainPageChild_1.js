import './styles/MainPage.css';
import React from 'react';
import { Link } from "react-router-dom";


const MainPageChild_1 = () => {
    return (
        <div className='MPC1'>
            <div className='MPCdiv1'>
                <h1 className='MPCh1'>Леня гей, леня лох, я тоже лох ахаххахахаха</h1>
                <h3 className='MPCh3'>ахахаххахахахахахахахахахахахахахахахахахах</h3>
                <button className='MPCbt1'>
                    <Link className='MPClink' exact to="/login">
                        Login
                    </Link></button>
                <button className='MPCbt2'>Start Traiding</button>
            </div>
            <img className='MPCimg' src={require('./styles/img/logo_2.png')} alt='Logo'/>

        </div>
        
    )
    
}
export default MainPageChild_1;