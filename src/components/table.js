import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../scss/table.css';

export class Table extends Component {
    constructor(props){
        super(props);
        this.getRow = this.getRow.bind(this);
    }
    getRow(items){
        return items.map( data => {
            return(
                <tr key={data.name}>
                <td className="rank">{data.rank}</td>
                <td>{data.name}</td>
                <td className="price">${data.price_usd}</td>
                <td className="marketcap">${data.market_cap_usd}</td>
                <td className="supply">{data.total_supply}</td>
                <td className={data.percent_change_24h < 0 ? 'red' : 'green'}>{data.percent_change_24h}%</td>
                </tr>
            )
        })
    }
  render() {
    const {data} = this.props;
    return (
      <div>
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>Circulating Supply</th>
                    <th>Change(24h)</th>
                </tr>
            </thead>
            <tbody>
                {this.getRow(data)}     
            </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.crypto
})

export default connect(mapStateToProps)(Table);
