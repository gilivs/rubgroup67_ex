import React from 'react';
const imageStyle = {
    'border-radius': '50%',
    heigth: '350px',
    width: '350px'
}
const UserPicture = (props) => {
    return (
        <div>
            <img alt="Logo" src={props.image} style={imageStyle} />
        </div>
    );
}

export default UserPicture;