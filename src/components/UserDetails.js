import React from 'react';

const UserDetails = (props) => {
    return (
        <div>
            <h5 id='userD'>Name:</h5>
            <p>{props.details.Name}</p>
            <h5 id='userD'>Gender:</h5>
            <p>{props.details.Gender}</p>
            <h5 id='userD'>Age:</h5>
            <p>{props.details.Age}</p>
            <h5 id='userD'>Height:</h5>
            <p>{props.details.Height}</p>
            <h5 id='userD'>Phone:</h5>
            <p>{props.details.Phone}</p>
            <h5 id='userD'>Hobbies:</h5>
            <p>{props.details.Hobiesarr && props.details.Hobiesarr.length > 0 ? props.details.Hobiesarr.map((item)=>`, ${item} `) : 'No Hobbies' }</p>


        </div>
    );
}

export default UserDetails;