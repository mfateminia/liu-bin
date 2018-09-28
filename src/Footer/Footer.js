import React from 'react';
import './Footer.css';


const Footer = () => {
	return (
		<div className = '-outer-wrapper container-fluid bg-primary text-light'>
            
            <div className = '-inner-wrapper container'>
                
                <div className = 'row'>
                    <div className = 'col-11 row'>
                        <div className = '-address col-md-7 order-2 order-md-1'>                        
                            Address: National University of Singapore
                            Department of Chemical and Biomolecular Engineering, 
                            4 Engineering Drive 4, Blk E5 #02-17,
                            Singapore 117585 
                            <p className = 'view-on-map'> <i className="fas fa-map-marker-alt -icon"></i>view on map</p>						
                        </div>	
                        <div className = '-contact col-md-5 order-1 order-md-2'>

                            <div className = '-email'>
                            <i className="fas fa-envelope -icon"></i>
                                cheliub@nus.edu.sg
                            </div>
                            <div className = '-telephone'>
                            <i className="fas fa-phone -icon"></i>
                                +65 6516 8049
                            </div>	
                            <div className = '-fax'>
                            <i className="fas fa-fax -icon"></i>
                                +65 6779 1936
                            </div>						
                        </div>						
                    </div>
                    <div className = '-footer-nav col-1 d-none d-md-block'>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Research</a></li>
                            <li><a>Publications</a></li>
                            <li><a>People</a></li>
                        </ul>
                    </div>					
                </div>
            </div>
            
		</div>
	);
}

export default Footer;