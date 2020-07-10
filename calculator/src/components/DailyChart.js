import React from 'react';
import './index.scss';

const DailyChart = (props) => {
    return (
        <div className='daily-agenda'>
            <h2>{props.day}</h2>
            <table>
                <tr>
                    <th>12x</th>
                    <th>Jumping Jacks</th>
                </tr>
                <tr>
                    <th>12x</th>
                    <th>Pushups</th>
                </tr>
                <tr>
                    <th>12x</th>
                    <th>Box Jumps</th>
                </tr>
            </table>
        </div>
    )
}

export default DailyChart;