import '../form.css';
import React, { Component } from 'react';

export class Form2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        const views = await fetch('http://localhost:8080/users/view')
        const viewsJson = await views.json()
        this.setState({
            views: viewsJson,
            selectedView: 0,
            tenantId: viewsJson[0].tenantId,
            tenantName: viewsJson[0].tenantName,
            totalPaidYtd: viewsJson[0].totalPaidYtd
        })

    }

    onNext = () => {
        if (this.state.selectedView < this.state.views.length - 1) {
            this.updateViewState(this.state.selectedView + 1)
        }
    }

    onPrevious = () => {
        if (this.state.selectedView !== 0) {
            this.updateViewState(this.state.selectedView - 1)
        }
    }

    onFirst = () => {
        this.updateViewState(0)
    }

    onLast = () => {
        var last = this.state.views.length - 1
        this.updateViewState(last)
    }

    updateViewState = (value) => {
        this.setState({
            selectedView: value,
            tenantId: this.state.views[value].tenantId,
            tenantName: this.state.views[value].tenantName,
            totalPaidYtd: this.state.views[value].totalPaidYtd
        })
    }

    render() {
        return (
            <div>
                <h2>Payments made by Tenants YTD</h2>
                <div className="formBox">
                    <label>Tenant ID</label>
                    <input disabled type="text" value={this.state.tenantId} /><br />

                    <label>Tenant Name</label>
                    <input disabled type="text" value={this.state.tenantName} /><br />

                    <label>Total Paid YTD</label>
                    <input disabled type="text" value={this.state.totalPaidYtd} /><br />

                    <button onClick={this.onFirst}>First</button>
                    <button onClick={this.onPrevious}>Previous</button>
                    <button onClick={this.onNext}>Next</button>
                    <button onClick={this.onLast}>Last</button>
                </div>
            </div>
        )
    }
}

export default Form2
