import React from "react";

export default function InputSearchTags() {
    return (
        <div className="control is-expanded">
            <div className="search-menu-item search-menu-tags-input-wrapper">
                <input className="input search-menu-tags-input" placeholder="Search..."
                       value="#тэги"/>
                <span className="input-highlight"></span>
            </div>
        </div>
    );
}