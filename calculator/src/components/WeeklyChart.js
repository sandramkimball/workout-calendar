import React, { Component } from 'react'
import DailyChart from './DailyChart';
import './index.scss';
// PDF
import WorkoutAgenda from './PDF';
import ReactPDF from './@react-pdf/renderer';


export default class WeeklyChart extends Component {
    constructor(props) {
        super(props);
        state = {
            date: new Date(),
            data: []
        }
        this.handlePDF = this.handlePDF.bind(this);
      }

    handlePDF = (data) => {
        ReactPDF.render(<WorkoutAgenda data={data}/>, `${__dirname}/example.pdf`)
    }

    componentDidMount(){
        let getRoutine = props.data.routines.filter(routine=> routine.date === this.state.date)
        this.setState({data: getRoutine})
        console.log(getRoutine)
    }

    render() {
        return (
            <section className='weekly-chart'>

                <div className='weekday'>
                    {weekdays.map(day=> (
                        <DailyChart day={day}/>
                    ))}                    
                </div> 
   