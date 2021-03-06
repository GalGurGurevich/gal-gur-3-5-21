import React from 'react'
import { connect } from 'react-redux'
import './Footer'

function Footer({ apiError }) {

    return (
        <div className="footer-container">
            {apiError && <span className="error-span">Oops! Sorry service currently unavailble! will try again soon :)</span>}
        </div>
    )
}

const mapStateToProps = state => ({
    apiError: state.userItemCart.apiError,
});

export default connect(mapStateToProps, null)(Footer);


