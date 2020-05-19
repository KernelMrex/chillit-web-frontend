import React from 'react';

export default function CitySelect() {
    return (
        <div className="control">
            <select className="button search-menu-item search-menu-select">
                <option>Все города</option>
                <option>Казань</option>
                <option>Йошкар-Ола</option>
            </select>
        </div>
    );
}