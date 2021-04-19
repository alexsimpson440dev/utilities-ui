import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import FormUsers from './components/form1/formUser'
import FormBills from './components/form1/formBill'
import FormBillTypes from './components/form1/formBillType'
import FormTenants from './components/form1/formTenant'
import FormLandlords from './components/form1/formLandlord'
import FormProperties from './components/form1/formProperty'
import FormPayments from './components/form1/formPayment'
import Form2 from './components/form2/form2'
import Form3 from './components/form3/form3'


class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      navDisplay: 'none'
    }
  }

  onClick = () => {
    this.state.navDisplay === 'none' ? this.setState({ navDisplay: 'block' }) : this.setState({ navDisplay: 'none' })
  }

  render() {
    return (
      <div className="App">
          <Router>
            <nav className='header'>
              <Link className='link-style' onClick={this.onClick}>Table Data</Link>&emsp;|&emsp;
              <Link className='link-style' to='/2'>YTD Tenant Payments</Link>&emsp;|&emsp;
              <Link className='link-style' to='/3'>User by ID</Link>
            </nav>
            <div className="nav-dropdown" style={{display: this.state.navDisplay}}>
            <Link className='link-style' to='/users' onClick={this.onClick}>Users</Link><br />
            <Link className='link-style' to='/tenants' onClick={this.onClick}>Tenants</Link><br />
            <Link className='link-style' to='/landlords' onClick={this.onClick}>Landlords</Link><br />
            <Link className='link-style' to='/properties' onClick={this.onClick}>Properties</Link><br />
            <Link className='link-style' to='/bills' onClick={this.onClick}>Bills</Link><br />
            <Link className='link-style' to='/bill_types' onClick={this.onClick}>Bill Types</Link><br />
            <Link className='link-style' to='/payments' onClick={this.onClick}>Payments</Link><br />
            </div>
            <div class="forms">
              <Route exact path="/users"><FormUsers /></Route>
              <Route exact path="/bills"><FormBills /></Route>
              <Route exact path="/bill_types"><FormBillTypes /></Route>
              <Route exact path="/tenants"><FormTenants /></Route>
              <Route exact path="/landlords"><FormLandlords /></Route>
              <Route exact path="/properties"><FormProperties /></Route>
              <Route exact path="/payments"><FormPayments /></Route>
              <Route exact path="/2"><Form2 /></Route>
              <Route exact path="/3"><Form3 /></Route>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
