import React from 'react';
import s from './Table.module.css';
import table from '../../../static/table.png';

export default function Table(){
    return(
        <img className={s.table} src={table} alt=""/>
    );
};