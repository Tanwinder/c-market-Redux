import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchData from '../actions/crypto-api-data';
import '../scss/header.css';

export class Header extends Component {
  constructor(props){
      super(props);
      this.allCrypto= this.allCrypto.bind(this);
      this.nextCoins= this.nextCoins.bind(this);
      this.previousCoins= this.previousCoins.bind(this);
      this.previous = this.previous.bind(this);
      this.next = this.next.bind(this);
      this.topCoins = this.topCoins.bind(this);
  }
  topCoins(){
    this.props.fetchData('https://api.coinmarketcap.com/v1/ticker/?start=0&limit=100');
  }
  previous(){
    if(this.props.cryptoData[0] != undefined && this.props.cryptoData[0].rank > 100){
      return(
        <button className="next" onClick={this.previousCoins}>← Previous 100</button>
      )
    }
  }
  next(){
    if( this.props.cryptoData[0] != undefined && this.props.cryptoData[0].rank < 1500){
      return(
        <button className="next" onClick={this.nextCoins}>Next 100 →</button>
      )
    }
  }
  allCrypto(){
    this.props.fetchData('https://api.coinmarketcap.com/v1/ticker/?start=0&limit=2000');
  }
  nextCoins(){
    if(this.props.cryptoData[0].rank < 1500){
    let rank = Number(this.props.cryptoData[0].rank);
    let start = rank+ 99;
    this.props.fetchData(`https://api.coinmarketcap.com/v1/ticker/?start=${start}&limit=100`);
    }
  }
  previousCoins(){
    let rank = Number(this.props.cryptoData[0].rank);
    let start = rank - 101;
    this.props.fetchData(`https://api.coinmarketcap.com/v1/ticker/?start=${start}&limit=100`);
  }
  render() {
    const { cryptoData } = this.props;
    return (
        <div className="header">
        <button className="top100" onClick={this.topCoins}>Top 100 List</button>
        <div>
          {this.previous()}
          {this.next()}
          <button className="allcoins" onClick={this.allCrypto}>View All</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cryptoData : state.crypto
})

const mapDispatchToProps = {
  fetchData: fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
