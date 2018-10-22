import { observable, action, decorate } from 'mobx';

class Store {
    navTogglerVisible = false;
    isContactVisible = false;
    toggleNav = () => this.navTogglerVisible = !this.navTogglerVisible;
    closeToggler = () => this.navTogglerVisible = false;
    showContact = (newStatus) => this.isContactVisible = newStatus;
}    

decorate(Store, {
    navTogglerVisible: observable,
    isContactVisible: observable,
    closeToggler: action,
    toggleNav: action,
    showContact: action 
});

export default new Store();