import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Favorite from '@material-ui/icons/Favorite';
import Forward from '@material-ui/icons/Forward'


const ActionsButtons = (props) => {
    return (
        <div>
            <IconButton onClick={props.movePerson}>
                <Favorite />
            </IconButton>
            <IconButton onClick={props.movePerson}>
                <Forward />
            </IconButton>
        </div>
    );
}

export default ActionsButtons;