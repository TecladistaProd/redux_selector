import React from 'react'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'

const Cart = ({ cart, addProduct, setShipping, total }) => (
    <div>
        <h1>Carrinho</h1>
        <p>
            Items: <strong>{cart.items.length}</strong>
        </p>
        <p>
            Frete: <strong>{cart.shipping_value.toFixed(2)}</strong>
        </p>
        <p>
            Total: <strong>{(total+cart.shipping_value).toFixed(2)}</strong>
        </p>
        <button onClick={addProduct}>Adicionar Produto</button>
        <button onClick={setShipping}>Calcular Frete</button>
    </div>
)

const calculateTotal = createSelector( state => state.items, items => {
        return items.reduce((subtotal, item)=> subtotal + item.price, 0)
    }
)

const mapStateToProps = state => ({
    cart: state,
    total: calculateTotal(state)
})

const mapDispatchToProps = dispatch => ({
    addProduct: () => dispatch({ type: 'ADD' }),
    setShipping: () => dispatch({ type: 'SET_SHIPPING'})
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)