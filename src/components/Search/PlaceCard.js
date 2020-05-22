import React from 'react';

export function PlaceCard(props) {
    return (
        <div className="card">
            <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={ props.place.image_url } alt="Placeholder"></img>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                        <p className="title is-4">{ props.place.title }</p>
                        <p className="subtitle is-6">{ props.place.link }</p>
                      </div>
                    </div>
                    <div className="content">
                        <p>
                            { props.place.description }
                        </p>                        
                        <a href="#test">#ресторан #кафе</a>
                  </div>
                </div>
            </div>    
    );
}