import React from 'react';
import './Contact.css';

class Contact extends React.Component{

    state = {        
        classNames : '-contact-wrapper ' + this.props.displayState
    }

    closeIt = () => {
        this.setState({classNames: '-contact-wrapper d-none'});
    }    

    render(){
        return (
            <div className = {this.state.classNames}>
            <a className = "-contact-close" onClick = {this.closeIt}></a>
            <p className = '-contact-header'>Feel free to contact us on:</p>
                <p className = '-contact-item'>
                    <i className="-contact-icon fas fa-envelope"></i>
                    cheliub@nus.edu.sg
                </p>
                <p className = '-contact-item'>
                    <i className="-contact-icon fas fa-phone"></i>
                    +65 6516 8049
                </p>	
                <p className = '-contact-item'>
                    <i className="-contact-icon fas fa-fax -icon"></i>
                    +65 6779 1936
                </p>
                <p className = '-contact-address'>
                    <p className = '-contact-header'>Where are we?</p>
                    <p className = '-contact-address-body'> National University of Singapore,
                        Department of Chemical and Biomolecular Engineering, 
                        4 Engineering Drive 4, Blk E5 #02-17,
                        Singapore 117585 
                    </p>
                </p>
            </div>
        );
    }
}

export default Contact;