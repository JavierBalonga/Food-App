import React, { useEffect, useRef } from 'react';
import s from './Selector.module.css';
import { LeftArrow, RightArrow } from '../../../static/arrows';

export default function Selector({fullMenu, active, onLeft, onRight, onSelect}) {
    const content = useRef(null)
    const selector = useRef(null)
    useEffect(() => {
        window.onresize = () => {
            selector.current.style.left = content.current.children[active].getBoundingClientRect().left + "px";
        }
    }, [])
    useEffect(() => {
        selector.current.style.left = content.current.children[active].getBoundingClientRect().left + "px";
    }, [active])
    return (
        <div className={s.container}>
            <button onClick={onLeft}><LeftArrow height={"60px"} /></button>
            <div className={s.content} ref={content}>
                {
                    fullMenu.map((food, index) => (
                        <div className={s.food} key={food.id} onClick={() => onSelect(index)}>
                            <img src={food.img} alt=""/>
                            <p>{food.title.join(' ')}</p>
                        </div>
                    ))
                }
                <div className={s.selector} ref={selector}/>
            </div>
            <button onClick={onRight}><RightArrow height={"60px"} /></button>
        </div>
    );
};