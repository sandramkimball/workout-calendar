import React from 'react'
// import { PDFViewer } from '@react-pdf/renderer';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// Styles
import GlobalStyle from './GlobalStyle';
import './App/css'

// Components
import DailyChart from './components/DailyChart'
import MiniCalendar from './components/MiniCalendar'
import WeeklyChart from './components/WeeklyChart'

function App(){
    return(
        <div className="App">
            <DailyChart/>
            <MiniCalendar/>
            <WeeklyChart/>
            
            {/* <PDFViewer>
                <WorkoutAgenda />
            </PDFViewer> */}
        </div>
    )
}

export default App;
// ReactDOM.render(<App />, document.getElementById('root'));