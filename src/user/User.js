import React, { Component } from 'react';
class User extends Component {
    render() {
        return (
            <div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data === undefined ?
                                <div />
                                : 
                                this.props.data.map(user => {
                                return (<tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>)
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default User;

