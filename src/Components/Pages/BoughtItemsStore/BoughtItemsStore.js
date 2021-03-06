import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

function BoughtItemsStore() {

    function aggregateAndDisplaySumByStore() {
        
    }

    return (
        <div>BoughtItemsStore</div>
    )
}

const mapStateToProps = (state) => ({
    itemsInStore: state.userItemCart.recivedItems,
})

const mapDispatchToProps = {
    
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(BoughtItemsStore);
