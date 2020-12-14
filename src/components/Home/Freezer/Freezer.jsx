import React from 'react';
import s from './Freezer.module.css';
import freezer from '../../../static/freezer.png';

export default function Freezer(){
    return(
        <img className={s.freezer} src={freezer} alt=""/>
    );
};