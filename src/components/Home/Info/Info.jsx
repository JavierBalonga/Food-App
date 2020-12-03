import React, { useState, useEffect, useRef } from 'react';
import s from './Info.module.css';

export default function Info({food}) {
    const ratingRef = useRef(null);
    const infoRef = useRef(null);
    const [actualFood, setActualFood] = useState({})
    useEffect(() => {
        ratingRef.current.style.animation = s.ratingClose + ' 500ms'
        infoRef.current.style.animation = s.infoClose + ' 500ms'
        setTimeout(() => setActualFood(food), 500);
    }, [food]);
    useEffect(() => {
        ratingRef.current.style.animation = s.ratingOpen + ' 500ms'
        infoRef.current.style.animation = s.infoOpen + ' 500ms'
    }, [actualFood]);
    return (
        <div className={s.container}>
            <div className={s.rating}>
                <span ref={ratingRef}>{actualFood.rating}</span>
                <span>★</span>
            </div>
            <div className={s.info} ref={infoRef}>
                <h1>Chef {actualFood.chef}</h1>
                <p>{actualFood.description}</p>
            </div>
        </div>
    );
};