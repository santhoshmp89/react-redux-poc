import React, { Component } from 'react';
import BookList from '../component/BookList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectBook from '../actions'

class BookLists extends Component {

    renderList() {
        return this.props.bookLists.map((book) => {           
            return <BookList onClick={() => this.props.selectBook(book)} key={book.id} title={book.title} />
        })
    }

    render(){
       
        return(
            <ul>
                {this.renderList()}
            </ul>
        )   
    }
}

const mapStateToProps = (state) => {
    return {
        bookLists: state.bookLists
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookLists);