import React, {Component} from 'react';
import { connect } from 'react-redux';

class AuthorDetails extends Component{   
    
   render() {
    if(!this.props.activeBook) {
        return (
            <div>
            Please Select book
        </div>
         ) 
       } 
        
       return(
        <div>
                {this.props.activeBook.name}
            </div>
       )
            
   }
}

const mapStateToProps = (state) => {
    return {
        activeBook: state.activeBook
    }
}

export default connect(mapStateToProps)(AuthorDetails)