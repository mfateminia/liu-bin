import React from 'react';
import './Footer.css';


const Footer = () => {
	return (
		<div className = '-footer-outer-wrapper container-fluid bg-primary text-light'>
            
            <div className = '-footer-inner-wrapper container'>
                
                <div className = 'row'>
                    <div className = 'col-11 row'>
                        <div className = '-footer-address col-md-7 order-2 order-md-1'>                        
                            Address: National University of Singapore
                            Department of Chemical and Biomolecular Engineering, 
                            4 Engineering Drive 4, Blk E5 #02-17,
                            Singapore 117585 
                            <p className = 'view-on-map'> 
                            <i className="-footer-icon fas fa-map-marker-alt">
                            </i>view on map</p>						
                        </div>	
                        <div className = '-footer-contact col-md-5 order-1 order-md-2'>

                            <div className = '-footer-email'>
                            <i className="-footer-icon fas fa-envelope"></i>
                                cheliub@nus.edu.sg
                            </div>
                            <div className = '-footer-telephone'>
                            <i className="-footer-icon fas fa-phone"></i>
                                +65 6516 8049
                            </div>	
                            <div className = '-footer-fax'>
                            <i className="-footer-icon fas fa-fax -icon"></i>
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