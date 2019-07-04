import React from 'react';
import Button from '@material-ui/core/Button';

function shuffle() {
    var links = ['./rock', './scissor', './paper'];
    var idx = Math.floor(Math.random() * links.length);
    window.location.href = links[idx];
}

export default function Hand({src, alt}) {
    return (<div align='center'>
        <div><img src={src} alt={alt}/></div>
        <div>
            <Button variant='contained' size='large' color='primary' onClick={shuffle}>
                ぺーじせんい
            </Button>
        </div>
    </div>);
}
