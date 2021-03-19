// import React from 'react'
// import { Link } from "react-router-dom";
// import './TabNavigator.css'

// export default function TabNavigator() {
//     return (
//         <div className="tabNavigator-root">
//           <ul className="tab-ul">
//             <Link className="link" to="/boughtItemsPage">מוצרים בדרך</Link>
//             <Link className="link" to="/receivedListPage">מוצרים כבר כאן</Link>
//           </ul>
//         </div>
//     )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import translator from '../../../Helpers/translator'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center'
  },
}));

function TabNavigator({lang}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className="link" to="/boughtItemsPage">{translator(lang, 'tabNavBoughtItemsPage')}</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link className="link" to="/receivedListPage">{translator(lang, 'tabNavReceivedListPage')}</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => ({
  lang: state.userItemCart.language
});

export default connect(mapStateToProps, null)(TabNavigator);
