import React from 'react';

const Display = props => {
    return (
        <div className = 'display'>
            <h2>ScoreBoard</h2>
            <div className="ball-display">
                <h3>Balls: {props.balls}</h3>
            </div>
            <div className='strike-display'>
                <h3>Strikes: {props.strikes}</h3>
            </div>
        </div>
    )
};

export default Display;