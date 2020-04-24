import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from '../actions'
import './index.css'

class Home extends Component {
  componentWillMount(){
    this.props.getUsers();
  }
  render(){
    
  }
}

function mapStateToProps(state){
  return {
    users: state.getUsers
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getUsers
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
