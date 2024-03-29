import React from 'react'
import {Card,CardHeader, CardContent, Typography}  from 'material-ui/core';
import {Doughnut} from 'react-chartjs-2';
import useStyles  from './style';


const Details = () => {

    const classes=useStyles();
  return (
    <Card className={classes.income}>
        <CardHeader title="Income"/>
        <CardContent>
            <Typography varient="h5">$50</Typography>
            {/* <Doughnut data="Data" /> */}
        </CardContent>
        
    </Card>
  )
}

export default Details