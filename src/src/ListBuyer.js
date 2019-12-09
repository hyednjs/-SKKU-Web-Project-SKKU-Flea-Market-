import React, { Component } from 'react';
import './Login.css';
//import Table1 from './components/Table1'
//import jQuery from "jquery";

 
class ListBuyer extends Component {
  state = {
    ListBuyer:[
      {
        ProductName: 1,
        CurrentPrice: '2000',
        TradingPlace: '2',
        PhoneNum : '010-9976-3298',
        Status: 'sold out',
        SellerName : 'James'
      },
      {
        ProductName: 2,
        CurrentPrice: '4000',
        TradingPlace: '2',
        PhoneNum : '010-9976-3298',
        Status: 'sold out',
        SellerName : 'James'
      }
    ]
  }
  render() {
    const {ListBuyer} = this.state;
    
    return (
      <div>
       <table border="1">
         <tbody>
           <tr align="center">
            <td width="100">ProductName</td>
            <td width="100">CurrentPrice</td>
            <td width="100">TradingPlace</td>
            <td width="100">PhoneNum</td>
            <td width="100">Status</td>
            <td width="100">SellerName</td>
           </tr>
           {
             ListBuyer.map(row=>
              (<ListBuyerItem key={row.ProductName} row={row}/>)
              )
           }
         </tbody>
       </table>
      </div>
    );
  }
}
class ListBuyerItem extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.row.ProductName}</td>
        <td>{this.props.row.CurrentPrice}</td>
        <td>{this.props.row.TradingPlace}</td>
        <td>{this.props.row.PhoneNum}</td>
        <td>{this.props.row.Status}</td>
        <td>{this.props.row.SellerName}</td>

      </tr>
    )
  }
}
export default ListBuyer;