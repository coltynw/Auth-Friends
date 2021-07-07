import React from 'react';
import { axiosWithAuth } from '../components/axiosWithAuth';


class List extends React.Component{
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res.data)
            this.setState({
                friends: res.data
            });
        })
    };

    render() {
        return (
            <>
                <h1>Friends</h1>
                {this.state.friends.map((friend) => {
                    return (
                        <div key={friend.id}>
                            <h3>{friend.name}</h3>
                            <br/>
                            <p>Age: {friend.age}</p>
                            <br/>
                            <p>Email: {friend.email}</p>
                            <br/>
                            <p>ID:{friend.id}</p>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default List 