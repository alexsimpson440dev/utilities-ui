import '../form.css';
import React, { Component } from 'react';

export class FormProperty extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        const properties = await fetch('http://localhost:8080/properties')
        const propertiesJson = await properties.json()
        this.setState({
            properties: propertiesJson,
            selectedProperty: 0,
            propertyId: propertiesJson[0].propertyId,
            landlordId: propertiesJson[0].landlordId,
            address: propertiesJson[0].address,
            city: propertiesJson[0].city,
            zip: propertiesJson[0].zip,
            state: propertiesJson[0].state,
        })

    }

    onNext = () => {
        if (this.state.selectedProperty < this.state.properties.length - 1) {
            this.updatePropertyState(this.state.selectedProperty + 1)
        }
    }

    onPrevious = () => {
        if (this.state.selectedProperty !== 0) {
            this.updatePropertyState(this.state.selectedProperty - 1)
        }
    }

    onFirst = () => {
        this.updatePropertyState(0)
    }

    onLast = () => {
        var last = this.state.properties.length - 1
        this.updatePropertyState(last)
    }

    updatePropertyState = (value) => {
        this.setState({
            selectedProperty: value,
            propertyId: this.state.properties[value].propertyId,
            landlordId: this.state.properties[value].landlordId,
            address: this.state.properties[value].address,
            city: this.state.properties[value].city,
            zip: this.state.properties[value].zip,
            state: this.state.properties[value].state
        })
    }

    render() {
        return (
            <div>
                <h2>Property Table</h2>
                <div className="formBox">
                    <label>Property ID</label>
                    <input disabled type="text" value={this.state.propertyId} /><br />

                    <label>Landlord ID</label>
                    <input disabled type="text" value={this.state.landlordId} /><br />

                    <label>Address</label>
                    <input disabled type="text" value={this.state.address} /><br />

                    <label>City</label>
                    <input disabled type="text" value={this.state.city} /><br />

                    <label>Zip</label>
                    <input disabled type="text" value={this.state.zip} /><br />

                    <label>State</label>
                    <input disabled type="text" value={this.state.state} /><br />
                    <button onClick={this.onFirst}>First</button>
                    <button onClick={this.onPrevious}>Previous</button>
                    <button onClick={this.onNext}>Next</button>
                    <button onClick={this.onLast}>Last</button>
                </div>
            </div>
        )
    }
}

export default FormProperty
