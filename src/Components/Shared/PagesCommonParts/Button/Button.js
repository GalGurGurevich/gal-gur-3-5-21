// import React from 'react'
// import './Button.css'

// export default function Button({func, txt}) {
//     return (
//         <button className="btn" onClick={func}>{txt}</button>
//     )
// }


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginBottom: '5px',
      justifyContent: 'space-between',
      width: '100%',
      alignSelf: 'center',
      background: 'darkturquoise',
      cursor: 'pointer',
      height: '50px'
    },
  },
}));

export default function MainButton({func, txt}) {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={func}>
      <Button variant="contained" color="primary">
        {txt}
      </Button>
    </div>
  );
}
