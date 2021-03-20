import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '90%',
      textAlign: 'initial'
    },
  },
}));

export default function InputFields({setName, setStore, setPrice, setDate, name, store, price, date, nameLbl, storeLbl, priceLbl, dateLbl}) {
  const classes = useStyles();

  const formatText = (text) => {
    return text.replace(/[^+\d]/g, '')
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField onChange={e => setName(e.target.value)} type="text" id="outlined-basic" value={name} label={nameLbl} variant="outlined" />
      <TextField onChange={e => setStore(e.target.value)} type="text" id="outlined-basic" value={store} label={storeLbl} variant="outlined" />
      <TextField onChange={e => setPrice(e.target.value)} type="number" formatText={formatText} keyboardType="phone-pad" id="outlined-basic" value={price} label={priceLbl} variant="outlined" />
      <TextField onChange={e => setDate(e.target.value)} type="date" id="outlined-basic" value={date} InputLabelProps={{shrink: true}} label={dateLbl} variant="outlined" />
    </form>
  );
}
