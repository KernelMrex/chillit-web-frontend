import React from "react";

export default function InputSearchTags(props) {
    return (
        <div className="control is-expanded">
            <div className="search-menu-item search-menu-tags-input-wrapper">
                <input className="input search-menu-tags-input" placeholder="#теги или просто поиск" onChange={props.onUpdate}/>
            </div>
        </div>
    );
}