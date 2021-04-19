import '../form.css';
import React, { Component } from 'react';

export class From3 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        const user = await fetch('http://localhost:8080/users/1')
        const userJson = await user.json()
        this.setState({
            userId: userJson.userId,
            firstName: userJson.firstName,
            lastName: userJson.lastName,
            phoneNumber: userJson.phoneNumber,
            email: userJson.email
        })
    }

    onSubmit = async (e) => {
        const user = await fetch(`http://localhost:8080/users/${e.target.value}`)
        if (user.status == 404) {
            alert('User not found!')
            this.setState({
                userId: 1
            })
        }
        const userJson = await user.json()
        this.setState({
            firstName: userJson.firstName,
            lastName: userJson.lastName,
            phoneNumber: userJson.phoneNumber,
            email: userJson.email
        })
    }

    onChange = (e) => {
        this.setState({
            userId: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>Search Users</h2>
                <div className="formBox">
                    <label>User ID</label>
                    <input className="userInput" type="text" value={this.state.userId} onChange={this.onChange} />
                    <button className="submitButton" onClick={this.onSubmit} value={this.state.userId}>Submit</button><br />

                    <label>First Name</label>
                    <input disabled type="text" value={this.state.firstName} /><br />

                    <label>Last Name</label>
                    <input disabled type="text" value={this.state.lastName} /><br />

                    <label>Phone Number</label>
                    <input disabled type="text" value={this.state.phoneNumber} /><br />

                    <label>Email</label>
                    <input disabled type="text" value={this.state.email} /><br />
                </div>
            </div>
        )
    }
}

export default From3
