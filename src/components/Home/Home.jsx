import React, { useEffect, useState } from 'react';
import s from './Home.module.css';
import Rotator from './Rotator/Rotator';
import Title from './Title/Title';
import Info from './Info/Info';
import Selector from './Selector/Selector';
import fullMenu from '../../data/data';
import Freezer from './Freezer/Freezer';
import Table from './Table/Table';


export default function Home() {
    const [state, setState] = useState({
        fullMenu,
        active: 0
    })

    useEffect(() => {
        let id = setTimeout(() => {
            setState(state => (
                {
                    ...state,
                    active: state.active < state.fullMenu.length - 1 ? state.active + 1 : 0
                }
            ))
        }, 5000);
        return () => clearTimeout(id);
    }, [state.active]);

    const handleLeft = () => {
        setState({
            ...state,
            active: state.active > 0 ? state.active - 1 : state.fullMenu.length - 1
        })
    }
    const handleRight = () => {
        setState({
            ...state,
            active: state.active < state.fullMenu.length - 1 ? state.active + 1 : 0
        })
    }
    const handleSelect = (index) => {
        setState({
            ...state,
            active: index
        })
    }

    return (
        <div className={s.container}>
            <Freezer/>
            <div className={s.title_selector}>
                <Rotator fullMenu={state.fullMenu} active={state.active}/>
                <Title title={state.fullMenu[state.active].title}/>
                <Selector fullMenu={state.fullMenu} active={state.active} onLeft={handleLeft} onRight={handleRight} onSelect={handleSelect}/>
            </div>
            <Info food={state.fullMenu[state.active]}/>
            <Table/>
        </div>
    );
};