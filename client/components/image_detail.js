import React from 'react';

const ImageDetail = (props)=> {
    // props.picture => this is the image object
    // props.picture.title
    // props.picture.link
    return (
        <li className="media list-group-item">
            <div className="media-left">
                <img src={props.picture.link}/>
            </div>
            <div className="media-body">
                <h4 className="media-heading">
                    {props.picture.title}
                </h4>
            </div>
        </li>

        
    );
}

export default ImageDetail;