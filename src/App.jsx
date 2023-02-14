
import React, { useEffect, useState } from "react";
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faPlane } from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {

  return (
    <CountdownMonths/>
  )
}

const targetTime = moment("2023-07-28");

export const CountdownMonths = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <span class="fa-stack fa-2x">
          {/* <i class="fas fa-circle fa-stack-2x"></i> */}
          <FontAwesomeIcon className="fa-stack-2x" icon={faCircle}/>
          {/* <i class="fas fa-rocket fa-stack-1x fa-inverse"></i> */}
          <FontAwesomeIcon className="fa-stack-1x" icon={faPlane}/>
        </span>
        <h1>Vacances</h1>
        <h2>Départ pour le royaume des pates !</h2>
        	<div className='countdown-wrapper'>
					{timeBetween.days() && (
						<div className='countdown-item'>
							<SVGCircle radius={mapNumber(timeBetween.days(),30,0,0,360)} />
							{timeBetween.days()} 
							<span>days</span>
						</div>
					)}
					{timeBetween.hours() && (
						<div className='countdown-item'>							
							<SVGCircle radius={mapNumber(timeBetween.days(),30,0,0,360)} />
							{timeBetween.hours()} 
							<span>hours</span>
						</div>
					)}
					{timeBetween.minutes() && (
						<div className='countdown-item'>
							<SVGCircle radius={mapNumber(timeBetween.days(),30,0,0,360)} />
							{timeBetween.minutes()} 
							<span>minutes</span>
						</div>
					)}
					{timeBetween.seconds() && (
						<div className='countdown-item'>
							<SVGCircle radius={mapNumber(timeBetween.days(),30,0,0,360)} />
							{timeBetween.seconds()} 
							<span>seconds</span>
						</div>
					)}
				</div>
        <h3>15 Aout 2023</h3>
        
      </div>
  );
};

const SVGCircle = ({ radius }) => (
	<svg className='countdown-svg'>
		<path fill="none" stroke="#c44394" stroke-width="4" d={describeArc(50, 50, 48, 0, radius)}/>
	</svg>
);

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;       
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

export default App