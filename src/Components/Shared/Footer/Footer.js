import React from 'react'
import { connect } from 'react-redux';
import { changeAppLang } from '../../../redux/itemStoreSlice';
import './Footer.css'

function Footer({ apiError, changeAppLang, lan }) {

    function updateLan(choice) {
        changeAppLang(choice)
    }

    return (
        <div className="footer-container">
            <select className="lan-select" onChange={(e) => updateLan(e.target.value)}>
                <option value="HEB" selected>HEB</option>
                <option value="EN">EN</option>
            </select>
            {apiError && <span className="error-span">Oops! Sorry service currently unavailble! will try again soon :)</span>}
        </div>
    )
}

const mapStateToProps = state => ({
  lan: state.userItemCart.language
});

const mapDispatchToProps = {
    changeAppLang,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
