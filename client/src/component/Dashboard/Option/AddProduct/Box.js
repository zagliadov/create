import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    changeBox: {
        padding: '10px',
    },
    change: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '400px',
        padding: '10px',
    },
    pencil: {
        cursor: 'pointer',
    },
    saveBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '400px',
    },
    input: {
        outline: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '1px solid silver',
    },
    saveButton: {
        fontSize: '24px',
        cursor: 'pointer',
    },
}))


export const Box = ({
    variant,
    keys,
    name,
    elem,
    setter,
    open,
    setNew,
    id,
    newElem,
    dispatch,
    updateElement,
}) => {
    const classes = useStyles();
    let text = newElem ? newElem : elem;

    return (
        <div className={classes.changeBox}>
            <div className={classes.change}>
                <Typography variant={variant}>{name} {elem}</Typography>
                <i className={`${classes.pencil} fa fa-pencil`} aria-hidden="true"
                    onClick={() => {
                        setter(!open);
                    }
                    }>
                </i>
            </div>
            {open ?
                <div className={classes.saveBox}>
                    <input type='text' defaultValue={elem}
                        onChange={(e) => setNew(e.target.value)}
                        className={classes.input} />
                    <i className={`${classes.saveButton} fa fa-floppy-o`} aria-hidden="true"
                        onClick={() => {
                            dispatch(updateElement({id, text, keys}));
                            setter(!open);
                        }}></i>
                </div>
                : null}
        </div>
    );
}

