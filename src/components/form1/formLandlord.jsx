import '../form.css';
import React, { Component } from 'react';

export class FormLandlords extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        const landlords = await fetch('http://localhost:8080/landlords')
        const landlordsJson = await landlords.json()
        this.setState({
            landlords: landlordsJson,
            selectedLandlord: 0,
            landlordId: landlordsJson[0].landlordId,
            userId: landlordsJson[0].userId,
        })

    }

    onNext = () => {
        if (this.state.selectedLandlord < this.state.landlords.length - 1) {
            this.updateLandlordState(this.state.selectedLandlord + 1)
        }
    }

    onPrevious = () => {
        if (this.state.selectedLandlord !== 0) {
            this.updateLandlordState(this.state.selectedLandlord - 1)
        }
    }

    onFirst = () => {
        this.updateLandlordState(0)
    }

    onLast = () => {
        var last = this.state.landlords.length - 1
        this.updateLandlordState(last)
    }

    updateLandlordState = (value) => {
        this.setState({
            selectedLandlord: value,
            landlordId: this.state.landlords[value].landlordId,
            userId: this.state.landlords[value].userId,
        })
    }

    render() {
        return (
            <div>
                <h2>Landlord Table</h2>
                <div className="formBox">
                    <label>Landlord ID</label>
                    <input disabled type="text" value={this.state.landlordId} /><br />

                    <label>User ID</label>
                    <input disabled type="text" value={this.state.userId} /><br />

                    <button onClick={this.onFirst}>First</button>
                    <button onClick={this.onPrevious}>Previous</button>
                    <button onClick={this.onNext}>Next</button>
                    <button onClick={this.onLast}>Last</button>
                </div>
            </div>
        )
    }
}

export default FormLandlords
