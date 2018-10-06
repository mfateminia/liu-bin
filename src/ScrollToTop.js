import React, {Component} from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        console.log('if entered');
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);

      }
    }
  
    render() {
      return this.props.children
    }
  }

  export default withRouter(ScrollToTop);