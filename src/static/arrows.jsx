import React from 'react';

export function RightArrow({height}){
    return(
        <svg height={height} viewBox="0 0 4 6">
            <path d="M4,3 L1,0 L0,1 L2,3 L0,5 L1,6z" />
        </svg>
    );
};

export function LeftArrow({height}){
    return(
        <svg height={height} viewBox="0 0 4 6">
            <path d="M0,3 L3,0 L4,1 L2,3 L4,5 L3,6z" />
        </svg>
    );
};