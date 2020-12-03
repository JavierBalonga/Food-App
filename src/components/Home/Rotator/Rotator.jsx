import React from 'react';
import s from './Rotator.module.css';

export default function Rotator({fullMenu, active}) {
    return (
        <div className={s.container}>
            {
                fullMenu.map((food, index) => (
                <img 
                    key={food.id}
                    src={food.img} 
                    className={(index < active) ? (s.left) : (index > active ? s.right : s.active)} 
                    alt=""
                />
                ))
            }
        </div>
    );
};

