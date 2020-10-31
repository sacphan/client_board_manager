
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './Card';
import React, { useState, useEffect } from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();
    const [board, setBoards] = useState(Array())
    let listBoard = [];
    useEffect(() => {
        async function fetchBoardList() {

            const requestURL = "https://boardmanager-1712716.herokuapp.com";
            const response = await fetch(requestURL);
            const responseJson = await response.json();
            setBoards(responseJson);

        }
        fetchBoardList();
    }, []);
    const renderBoard = (item) => {
        return <Grid key={item.id} item xs={4}>
            <Paper className={classes.paper}><Card  board={item} /></Paper>
        </Grid>;
    }

    board.map((item) => {
        listBoard.push(renderBoard(item));
    })
    console.log(listBoard)
   

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {listBoard}
            </Grid>
        </div>
    );
}
