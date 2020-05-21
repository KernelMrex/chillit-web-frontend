import React from 'react';

export function PlaceCard(props) {
    return (
        <div class="card">
            <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder"></img>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                        <p class="title is-4">{ props.place.title }</p>
                        <p class="subtitle is-6">{ props.place.link }</p>
                      </div>
                    </div>
                    <div class="content">
                        <p>
                            { props.place.description }
                        </p>                        
                        <a href="#test">#ресторан</a>
                  </div>
                </div>
            </div>    
    );
}