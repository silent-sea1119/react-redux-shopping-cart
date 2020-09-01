import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div>
                {cartItems.length === 0? <div className="cart cart-header">Cart is empty</div>
                :
                <div className="cart cart-header">You have {cartItems.length} in the cart{" "}
                </div>
                }
            </div>
        )
    }
}
