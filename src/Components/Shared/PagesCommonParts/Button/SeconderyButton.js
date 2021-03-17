import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: '20px',
      marginBottom: '10px',
      border: 'blue solid 1px',
      padding: '10px',
      borderRadius: '10px',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    },
  },
}));

export default function SecondryButton({func, txt}) {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={func} style={{width: '90%'}}>
      <Button variant="outlined" color="primary">
        {txt}
      </Button>
    </div>
  );
}
