import React from 'react'
import { useState, useEffect } from 'react'
import Image from "./companyImage.png";
import "./CompanyDetails.css"
import {
    useParams,
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import useFetch from "react-fetch-hook";


function createData(day, opening, closing) {
    return { day, opening, closing };
}

const rows = [
    createData('Monday', "10:00", "14.00"),
    createData('Tuesday', "10:00", "14.00"),
    createData('Wensday', "10:00", "14.00"),
    createData('Thursday', "10:00", "14.00"),
    createData('Friday', "10:00", "14.00"),
    createData('Saturday', "10:00", "15.00"),
    createData('Sunday', "10:00", "15.00"),
];

// const companyInfo = [{description: "We are an established helping organization with focus on helping people in poor countries with medical problems"},{name:"Röda Korset"},{map:"Google Map"},{feed:"FEEEEEEED"},{info:"General information"}]
const description = "We are an established helping organization with focus on helping people in poor countries with medical problems"
const name = "Röda Korset"
const googlemap = "GOOGLE MAP"
const feed = "FEEEEEEEEEEED"
const info = "Adress: Kungstorget 12"
const info2 = " Telefonnummer: 08 - 22 33 11"
// const current = [{caption:"water for uganda"}, {bread:"Right now we need your help getting more fresh water for the people of Uganda."}]
const currentBread = "Right now we need your help getting more fresh water for the people of Uganda."
const currentCaption = "water for uganda"




function CompanyDetails() {
    
    let { companyname } = useParams();
    const { isLoading, data, error } = useFetch("http://localhost:8080/company/" + companyname); 
    if (error) {
        return <h2>Error</h2>
    }
    
    return (

        <div>
            {isLoading ? <h2>Loading...</h2> : data.map((c) =>
            <div>
            <div>
            <h1 className='companyName' >{c.name}</h1>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Container maxWidth="sm">
                                <img src={Image}></img>
                            </Container>
                        </Grid>
                        <Grid item xs={4}>
                           {c.description}
                        </Grid>
                        <Grid item xs={4}>
                            <Container maxWidth="sm">
                                {googlemap}
                            </Container>
                        </Grid>
                        <Grid item xs={4}>
                            <Container maxWidth="sm">
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        Adress: {c.adress} <br></br>Kontaktperson: {c.person}
                                    </CardContent>
                                </Card>
                            </Container>
                        </Grid>
                        <Grid item xs={4}>
                            <Container maxWidth="sm">
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 50 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Day of the week</TableCell>
                                                <TableCell align="right">Opening</TableCell>
                                                <TableCell align="right">closing</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.day}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell component="th" scope="row">
                                                        {row.day}
                                                    </TableCell>
                                                    <TableCell align="right">{row.opening}</TableCell>
                                                    <TableCell align="right">{row.closing}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Container>
                        </Grid>
                        <Grid item xs={4}>
                            <Container maxWidth="sm">
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Current
                                        </Typography>
                                        <Typography sx={{ mb: 2.5 }} variant="h5" component="div">
                                            {currentCaption}
                                        </Typography>
                                        <Typography variant="body2">
                                            {currentBread}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Container>
                        </Grid>
                    </Grid>
                </Box>
            </div>
           </div>
           )}

            <div className='blogheader'>
            <Grid item xs={12}>
                <Container className='blogpost'>
                <Card>
                    bla bla bla
                </Card>
                </Container>
            </Grid>
            <Grid item xs={12}>
                <Container className='blogpost'>
                <Card>
                    bla bla bla
                </Card>
                </Container>
            </Grid>
            </div>
        </div>

    )
}

export default CompanyDetails


