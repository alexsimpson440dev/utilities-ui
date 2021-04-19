import '../form.css';
import React, { Component } from 'react';

export class FormBill extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        const bills = await fetch('http://localhost:8080/bills')
        const billsJson = await bills.json()
        this.setState({
            bills: billsJson,
            selectedBill: 0,
            billId: billsJson[0].billId,
            propertyId: billsJson[0].propertyId,
            totalAmount: billsJson[0].totalAmount,
            amountPerTenant: billsJson[0].amountPerTenant,
            createdDate: billsJson[0].createdDate,
            dueDate: billsJson[0].dueDate
        })

    }

    onNext = () => {
        if (this.state.selectedBill < this.state.bills.length - 1) {
            this.updateBillState(this.state.selectedBill + 1)
        }
    }

    onPrevious = () => {
        if (this.state.selectedBill !== 0) {
            this.updateBillState(this.state.selectedBill - 1)
        }
    }

    onFirst = () => {
        this.updateBillState(0)
    }

    onLast = () => {
        var last = this.state.bills.length - 1
        this.updateBillState(last)
    }

    updateBillState = (value) => {
        this.setState({
            selectedBill: value,
            billId: this.state.bills[value].billId,
            propertyId: this.state.bills[value].propertyId,
            totalAmount: this.state.bills[value].totalAmount,
            amountPerTenant: this.state.bills[value].amountPerTenant,
            createdDate: this.state.bills[value].createdDate,
            dueDate: this.state.bills[value].dueDate
        })
    }

    render() {
        return (
            <div>
                <h2>Bills Table</h2>
                <div className="formBox">
                    <label>Bill ID</label>
                    <input disabled type="text" value={this.state.billId} /><br />

                    <label>Property ID</label>
                    <input disabled type="text" value={this.state.propertyId} /><br />

                    <label>Total Amount</label>
                    <input disabled type="text" value={this.state.totalAmount} /><br />

                    <label>Amount Per Tenant</label>
                    <input disabled type="text" value={this.state.amountPerTenant} /><br />

                    <label>Created Date</label>
                    <input disabled type="text" value={this.state.createdDate} /><br />

                    <label>Due Date</label>
                    <input disabled type="text" value={this.state.dueDate} /><br />
                    <button onClick={this.onFirst}>First</button>
                    <button onClick={this.onPrevious}>Previous</button>
                    <button onClick={this.onNext}>Next</button>
                    <button onClick={this.onLast}>Last</button>
                </div>
            </div>
        )
    }
}

export default FormBill
