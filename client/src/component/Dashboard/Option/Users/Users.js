import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getUsers } from '../../../../store/usersSlice';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    link: {
        textDecoration: 'none',
        textTransform: 'uppercase',

    },

}));



export const Users = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    let location = useLocation();

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    const desLocation = location.pathname.split('/users')[0]
    
    return (
        <>
            <h1>All users</h1>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>firstname</TableCell>
                        <TableCell>lastname</TableCell>
                        <TableCell>email</TableCell>
                        <TableCell>options:</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user._id} className={classes.table}>
                            <TableCell>{user.firstname}</TableCell>
                            <TableCell>{user.lastname}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                 <Link to={`${desLocation}/user/${user._id}`} className={classes.link}>
                                    Подробно
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

           
            





        </>
    )
}