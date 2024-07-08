import React from 'react';

const Image = ({ file_id, url, alt, ...rest }) => {
    const src = file_id ? `${process.env.REACT_APP_BACKEND_URL}/file/${file_id}` : url;
    return (<img src={src} alt={alt} {...rest} />);
}

export default Image;
