import React from 'react';

const Dashboard = props => {

    return (
        <div className='dashboard'>
            <h2>Batter</h2>
            <button className ='strike-button' onClick={props.strike}> Strike</button>
            <button className ='ball-button' onClick={props.ball}> Ball</button>
            <button className ='hit-button' onClick={props.hit}> Hit</button>
            <button className ='foul-button' onClick={props.foul}> Foul</button>
        </div>
    )
}

export default Dashboard;