import React, { Component } from 'react';
import './index.scss';
// Calendar
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export default class MiniCalendar extends Component {
    constructor(props) {
        super(props);
        state = {
            date: new Date(),
            data: props.data
        }
        this.handleChange = this.handleChange.bind(this);
      }
   
    handleChange = date => this.setState({ date })

    render() {
        return (
            <section className='mini-chart'>
                <Calendar
                    onChange={this.handleChange}
                    value={this.state.date}
                />               
            </sec