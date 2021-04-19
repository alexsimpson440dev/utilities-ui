import '../form.css';
import React, { Component } from 'react';

export class FormTenants extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        const tenants = await fetch('http://localhost:8080/tenants')
        const tenantsJson = await tenants.json()
        this.setState({
            tenants: tenantsJson,
            selectedTenant: 0,
            tenantId: tenantsJson[0].tenantId,
            userId: tenantsJson[0].userId,
            propertyId: tenantsJson[0].propertyId
        })

    }

    onNext = () => {
        if (this.state.selectedTenant < this.state.tenants.length - 1) {
            this.updateTenantState(this.state.selectedTenant + 1)
        }
    }

    onPrevious = () => {
        if (this.state.selectedTenant !== 0) {
            this.updateTenantState(this.state.selectedTenant - 1)
        }
    }

    onFirst = () => {
        this.updateTenantState(0)
    }

    onLast = () => {
        var last = this.state.tenants.length - 1
        this.updateTenantState(last)
    }

    updateTenantState = (value) => {
        this.setState({
            selectedTenant: value,
            tenantId: this.state.tenants[value].tenantId,
            userId: this.state.tenants[value].userId,
            propertyId: this.state.tenants[value].propertyId
        })
    }

    render() {
        return (
            <div>
                <h2>Tenant Table</h2>
                <div className="formBox">
                    <label>Tenant ID</label>
                    <input disabled type="text" value={this.state.tenantId} /><br />

                    <label>User ID</label>
                    <input disabled type="text" value={this.state.userId} /><br />

                    <label>Property ID</label>
                    <input disabled type="text" value={this.state.propertyId} /><br />

                    <button onClick={this.onFirst}>First</button>
                    <button onClick={this.onPrevious}>Previous</button>
                    <button onClick={this.onNext}>Next</button>
                    <button onClick={this.onLast}>Last</button>
                </div>
            </div>
        )
    }
}

export default FormTenants
