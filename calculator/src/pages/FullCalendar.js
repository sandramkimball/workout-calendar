import React, { Component } from 'react'
import MiniCalendar from '../components/MiniCalendar'
import WeeklyChart from '../components/WeeklyChart'
import data from '../data.json'

export default class FullCalendar extends Component {
    render() {
        return (
            <div>
                <MiniCalendar data={data}/>
                <WeeklyChart data={data}/>                
            </div>
        )