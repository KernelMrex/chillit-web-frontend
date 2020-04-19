import React from 'react';

import FastSearchTags from "./FastSearchTags";
import ChooseCityControlAddon from "./ChooseCityControlAddon";
import InputSearchTags from "./InputSearchTags";
import GoButton from "./GoButton";

export default function Menu() {
    return (
        <div className="search-menu-wrapper">
            <div className="field has-addons search-menu">
                <ChooseCityControlAddon/>
                <InputSearchTags/>
                <GoButton/>
            </div>
            <FastSearchTags/>
        </div>
    );
}