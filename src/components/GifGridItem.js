import React from 'react';

const GifGridItem = (props) => {
   
    return (
        <div className='animate__animated animate__fadeIn'>
            <li key={props.img.id} ><img src={props.img.url} alt={props.img.title}/></li>
            <p>{props.img.title}</p>
        </div>
    );
}

export default GifGridItem;