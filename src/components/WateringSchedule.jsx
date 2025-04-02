import React from 'react';
import '../App.css';

const WateringSchedule = () => {
  return (
    <div id="watering-schedule">
      <div className="watering-header">
        <div className="watering-title">Watering Schedule</div>
        <div className="close-button" />
      </div>

      <div className="humidity-indicator">
        <div>Current Soil Moisture</div>
        <div className="humidity-meter">
          <div className="humidity-level" style={{ width: '65%' }} />
        </div>
        <div id="humidity-status">Optimal (65%)</div>
      </div>

      <div className="next-watering">
        <div>Based on current moisture level:</div>
        <div className="watering-recommendation">Water in 3 days</div>
      </div>

      <div className="calendar-container">
        <div className="month-header">April 2025</div>
        <table className="calendar">
          <thead>
            <tr>
              <th>Su</th>
              <th>Mo</th>
              <th>Tu</th>
              <th>We</th>
              <th>Th</th>
              <th>Fr</th>
              <th>Sa</th>
            </tr>
          </thead>
          <tbody>
            {/* Use JS logic or props to render real calendar */}
            <tr>
              <td><span className="calendar-day">1</span></td>
              <td><span className="calendar-day watering-day">2</span></td>
              <td><span className="calendar-day">3</span></td>
              <td><span className="calendar-day today">4</span></td>
              <td><span className="calendar-day">5</span></td>
              <td><span className="calendar-day">6</span></td>
              <td><span className="calendar-day">7</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="swipe-indicator">Swipe up to close</div>
    </div>
  );
};

export default WateringSchedule;
