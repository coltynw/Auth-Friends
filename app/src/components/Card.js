import React from 'react';
import { axiosWithAuth } from '../components/axiosWithAuth';


class Card extends React.Component {
    state = {
        friend: {
            id: Math.random(),
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        });
    };

    makeFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/friends', this.state.friend)
        .then(res => {
            this.props.history.push('/friends');
        })
    }

    render() {
        return (
            <div>
                <h2>Make a Friend</h2>
                <form onSubmit={this.makeFriend}>
                    Name:<input 
                    type='text' 
                    name='name' 
                    value={this.state.friend.name} 
                    onChange={this.handleChange}/>
                    <br/>
                    Age:<input 
                    type='text' 
                    name='age' 
                    value={this.state.friend.age} 
                    onChange={this.handleChange} />
                    <br/>
                    Email:<input 
                    type='text' 
                    name='email' 
                    value={this.state.friend.email} 
                    onChange={this.handleChange} />
                    <br/>
                    <button>Make Friend</button>
                </form>
            </div>
        )
    }
}

export default Card 