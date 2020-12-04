import React, {Component} from 'react';

class UserWithAddresComponent extends Component {
    render() {
        let{userItem}=this.props;
        return (
            <div>
                Name: {userItem.name} Age: {userItem.age} Address City:{userItem.address.city} Street: {userItem.address.street} {userItem.address.number}
            </div>
        );
    }
}

export default UserWithAddresComponent;