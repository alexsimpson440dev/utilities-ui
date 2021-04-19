import '../form.css';
import React, { Component } from 'react';

export class FormBillType extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        const billTypes = await fetch('http://localhost:8080/bill_types')
        const billTypesJson = await billTypes.json()
        this.setState({
            billTypes: billTypesJson,
            selectedBillType: 0,
            billTypeId: billTypesJson[0].billTypeId,
            propertyId: billTypesJson[0].propertyId,
            name: billTypesJson[0].name,
            description: billTypesJson[0].description
        })

    }

    onNext = () => {
        if (this.state.selectedBillType < this.state.billTypes.length - 1) {
            this.updateBillTypeState(this.state.selectedBillType + 1)
        }
    }

    onPrevious = () => {
        if (this.state.selectedBillType !== 0) {
            this.updateBillTypeState(this.state.selectedBillType - 1)
        }
    }

    onFirst = () => {
        this.updateBillTypeState(0)
    }

    onLast = () => {
        var last = this.state.billTypes.length - 1
        this.updateBillTypeState(last)
    }

    updateBillTypeState = (value) => {
        this.setState({
            selectedBillType: value,
            billTypeId: this.state.billTypes[value].billTypeId,
            propertyId: this.state.billTypes[value].propertyId,
            name: this.state.billTypes[value].name,
            description: this.state.billTypes[value].description
        })
    }

    render() {
        return (
            <div>
                <h2>Bill Type Table</h2>
                <div className="formBox">
                    <label>Bill Type ID</label>
                    <input disabled type="text" value={this.state.billTypeId} /><br />

                    <label>Property ID</label>
                    <input disabled type="text" value={this.state.propertyId} /><br />

                    <label>Name</label>
                    <input disabled type="text" value={this.state.name} /><br />

                    <label>Description</label>
                    <input disabled type="text" value={this.state.description} /><br />
                    <button onClick={this.onFirst}>First</button>
                    <button onClick={this.onPrevious}>Previous</button>
                    <button onClick={this.onNext}>Next</button>
                    <button onClick={this.onLast}>Last</button>
                </div>
            </div>
        )
    }
}

export default FormBillType
