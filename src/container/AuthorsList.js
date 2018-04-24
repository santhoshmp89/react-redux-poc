import React, {Component} from 'react';
import {connect} from 'react-redux';
import Author from '../component/Author';
import AuthorAction from "../actions";
import { bindActionCreators } from 'redux';


class AuthorList extends Component{
    constructor(props) {
        super(props);

    }

    renderList() {
        return this.props.authorList.map((list) => {            
            return <Author key={list.id} name={list.name} listClick={() => this.props.AuthorAction(list)}/>
        })
    }

    render() {
        return(
            <ul>
            {this.renderList()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authorList: state.authorsList
    }    
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ AuthorAction: AuthorAction}, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorList)