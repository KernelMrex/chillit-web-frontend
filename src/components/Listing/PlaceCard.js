import React from 'react';

export function PlaceCard(props) {
    return (
        <div>
            <p>{ props.place.title }</p>
            <p>{ props.place.address }</p>
            <p>{ props.place.description }</p>
        </div>
    );
}