import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchData from '../actions/crypto-api-data';
import '../scss/crypto.css';
import Table from './table';
import Header from './header'

export class Crypto extends Component {
  
  componentDidMount(){
      this.props.fetchData('https://api.coinmarketcap.com/v1/ticker/?start=0&limit=100');
  }

  render() {
    const { cryptoData } = this.props;
    return (
      <div className="crypto">
        <h1>Market</h1>
        <Header />
        <Table />
        <Header />
      </div>
    )
  }
}

const mapStateToProps = ({crypto}) => ({
  cryptoData : crypto,
})

const mapDispatchToProps = {
  fetchData: fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(Crypto);
