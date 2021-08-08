import React from 'react';


const Card = ({url,fname,lname, email, id}) => {
    return (
      <div className='card'>
        <div>
            <img src={url}></img>
		  <h1>{fname} {lname}</h1>
          <h3>{email}</h3>
      </div>
      </div>
    );
  }

export default Card;