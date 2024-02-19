import React from 'react';
import { Navbar } from "reactstrap";
const NavigationBar = () => {
    return (
        <Navbar style={{ backgroundColor: 'rgb(26, 118, 209)', borderBottom: '2px solid #fff' }}>
            <div className="container">
                <div className="text-center">
                    <h3 className="text-light mb-0">Skin-O-Care</h3>                
                </div>
            </div>
        </Navbar>
    );
}

export default NavigationBar;
 
