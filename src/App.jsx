
import React, { useEffect, useState } from "react";
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faPlane } from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {

  return (
    <Countdown/>
  )
}

const Countdown = () => {
  
  const targetTime = moment("2023-07-28");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [remaining, setRemaining] = useState({jours:0,heures:0,minutes:0,secondes:0})
  const [betweenTime, setBetweenTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = moment()
      let till, days, hours, minutes, seconds
      const newTime = moment.duration(targetTime.diff(currentTime))
      setBetweenTime(newTime);
      days = Math.floor(newTime.asDays())
      till = newTime.subtract(days,'days')
      hours = Math.floor(till.asHours())
      till = till.subtract(hours,'hours')
      minutes = Math.floor(till.asMinutes())
      till = till.subtract(minutes, 'minutes')
      seconds = Math.floor(till.asSeconds())
      // console.log(hours)
      const newRemaining = {
        jours:days,
        heures:hours,
        minutes:minutes,
        secondes:seconds
      }
      
      setRemaining(newRemaining)
      // setDays(days)
      // setHours(hours)
      // setMinutes(minutes)
      // setSeconds(seconds)
      for(const [key, value] of Object.entries(newRemaining)){
        // console.log(key, value)
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  return(
    <>
      <span class="fa-stack fa-2x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fas fa-rocket fa-stack-1x fa-inverse"></i>
      </span>
      <h1>Vacances</h1>
      <h2>Voyage au pays des pâtes</h2>
      <div className="counter">
            {Object.entries(remaining).map((el, i) => (
              <div key={i} className="entry">
                <div key={el[1]} className="entry-value">
                  <span className="count top curr flipTop">{el[1] + 1}</span>
                  <span className="count top next">{el[1]}</span>
                  <span className="count bottom next flipBottom">{el[1]}</span>
                  <span className="count bottom curr">{el[1] + 1}</span>
                </div>
                <div className="entry-title">{el[0].toUpperCase()}</div>
              </div>
            ))}
          </div>
    </>
  )
}

export default App
