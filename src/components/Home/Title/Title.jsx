import React, { useEffect, useRef, useState } from 'react';
import s from './Title.module.css';

export default function Title({title}) {
    const titleRef = useRef(null);
    const [actualTitle, setActualTitle] = useState(['', '']);
    useEffect(() => {
        titleRef.current.style.animation = s.close + ' 500ms'
        setTimeout(() => setActualTitle(title), 500);
    }, [title]);
    useEffect(() => {
        titleRef.current.style.animation = s.open + ' 500ms'
    }, [actualTitle]);
    return(
        <div className={s.container}>
            <div className={s.title} ref={titleRef}>
                <div className={s.title0}><span>{actualTitle[0]}</span></div>
                <div className={s.title1}><span>{actualTitle[1]}</span></div>
            </div>
        </div>
    );
};