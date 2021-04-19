import '../form.css';
import React, { Component } from 'react';

export class FormUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        const users = await fetch('http://localhost:8080/users')
        const usersJson = await users.json()
        this.setState({
            users: usersJson,
            selectedUser: 0,
            userId: usersJson[0].userId,
            firstName: usersJson[0].firstName,
            lastName: usersJson[0].lastName,
            phoneNumber: usersJson[0].phoneNumber,
            email: usersJson[0].email
        })

    }

    onNext = () => {
        if (this.state.selectedUser < this.state.users.length - 1) {
            this.updateUserState(this.state.selectedUser + 1)
        }
    }

    onPrevious = () => {
        if (this.state.selectedUser !== 0) {
            this.updateUserState(this.state.selectedUser - 1)
        }
    }

    onFirst = () => {
        this.updateUserState(0)
    }

    onLast = () => {
        var last = this.state.users.length-1
        this.updateUserState(last)
    }

    updateUserState = (value) => {
        this.setState({
            selectedUser: value,
            userId: this.state.users[value].userId,
            firstName: this.state.users[value].firstName,
            lastName: this.state.users[value].lastName,
            phoneNumber: this.state.users[value].phoneNumber,
            email: this.state.users[value].email
        })
    }

    render() {
        return (
            <div>
                <h2>User Table</h2>
                <div className="formBox">
                    <label>User ID</label>
                    <input disabled type="text" value={this.state.userId} /><br />

                    <label>First Name</label>
                    <input disabled type="text" value={this.state.firstName} /><br />

                    <label>Last Name</label>
                    <input disabled type="text" value={this.state.lastName} /><br />

                    <label>Phone Number</label>
                    <input disabled type="text" value={this.state.phoneNumber} /><br />

                    <label>Email</label>
                    <input disabled type="text" value={this.state.email} /><br />
                    <button onClick={this.onFirst}>First</button>
                    <button onClick={this.onPrevious}>Previous</button>
                    <button onClick={this.onNext}>Next</button>
                    <button onClick={this.onLast}>Last</button>
                </div>
            </div>
        )
    }
}

export default FormUsers
