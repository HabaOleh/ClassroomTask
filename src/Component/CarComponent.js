import React, {Component} from 'react';

class CarComponent extends Component {
    render() {
        let {caritem}=this.props;
        return (
            <div>
                <p>Model: {caritem.producer} Power:{caritem.power} Owner Name:{caritem.owner.name} Age: {caritem.owner.age} Exp: {caritem.owner.exp} Price: {caritem.price} Year: {caritem.year}</p>
            </div>
        );
    }
}

export default CarComponent;