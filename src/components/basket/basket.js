import React from 'react'
import './basket.scss'
import { connect } from 'react-redux'


const Basket = props => {
    return (
        <div>
            BASKET
        </div>
    )
}

function mapStateToProps(state) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Basket)