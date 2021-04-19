import '../form.css';
import React, { Component } from 'react';

export class FormPayments extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        const payments = await fetch('http://localhost:8080/payments')
        const paymentsJson = await payments.json()
        this.setState({
            payments: paymentsJson,
            selectedPayment: 0,
            billId: paymentsJson[0].billId,
            tenantId: paymentsJson[0].tenantId,
            datePaid: paymentsJson[0].datePaid
        })

    }

    onNext = () => {
        if (this.state.selectedPayment < this.state.payments.length - 1) {
            this.updatePaymentState(this.state.selectedPayment + 1)
        }
    }

    onPrevious = () => {
        if (this.state.selectedPayment !== 0) {
            this.updatePaymentState(this.state.selectedPayment - 1)
        }
    }

    onFirst = () => {
        this.updatePaymentState(0)
    }

    onLast = () => {
        var last = this.state.payments.length - 1
        this.updatePaymentState(last)
    }

    updatePaymentState = (value) => {
        this.setState({
            selectedPayment: value,
            billId: this.state.payments[value].billId,
            tenantId: this.state.payments[value].tenantId,
            datePaid: this.state.payments[value].datePaid
        })
    }

    render() {
        return (
            <div>
                <h2>Payment Table</h2>
                <div className="formBox">
                    <label>Bill ID</label>
                    <input disabled type="text" value={this.state.billId} /><br />

                    <label>Tenant ID</label>
                    <input disabled type="text" value={this.state.tenantId} /><br />

                    <label>Date Paid</label>
                    <input disabled type="text" value={this.state.datePaid} /><br />

                    <button onClick={this.onFirst}>First</button>
                    <button onClick={this.onPrevious}>Previous</button>
                    <button onClick={this.onNext}>Next</button>
                    <button onClick={this.onLast}>Last</button>
                </div>
            </div>
        )
    }
}

export default FormPayments
