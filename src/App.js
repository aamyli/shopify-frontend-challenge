import React from 'react';

import PhotoCard from './components/PhotoCard';

import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

import './App.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const API_KEY = "P8VLfFu4GWnTCbJSxagVfhtaUHSC6XPIhFJ8p242";

// fetches photos of the day between startDate and endDate from NASA's APOD API
async function fetchAPI(startDate, endDate) {
  const startFormat = startDate.toISOString().slice(0, 10);
  const endFormat = endDate.toISOString().slice(0, 10);
  const url = "https://api.nasa.gov/planetary/apod?api_key=" + API_KEY + "&start_date=" + startFormat + "&end_date=" + endFormat;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  return data;
} 

function App() {
  // sets state for dates
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: 'selection'
    }
  ]);

  // sets state for results from APOD API
  const [result, setResult] = useState([
    {
      title: null,
      date: null,
      desc: null,
      type: null,
      url: null,
      liked: false
    }
  ]);

  // when button is triggered, the API is called and results are updated
  function updateResult() {
    fetchAPI(date[0].startDate, date[0].endDate).then(data => {
      const parsed_results = [];
      data.forEach((d) => {
        const res = {
          title: d.title,
          date: d.date,
          desc: d.explanation,
          type: d.media_type,
          url: d.url,
          liked: false
        }
        parsed_results.push(res);
      });
      
      setResult(parsed_results);
      console.log(result);
    })
  }

  return (
    <div className="App">
      
      <div className="title">
        <h1 className="nasa">NASA/<b>SPACESTAGRAM</b></h1>
        <p className="credit">📸 photos taken from <b><a href="https://api.nasa.gov/#apod">NASA's APOD API</a></b></p>
        <p className="quote">
          “<b className="focus">Remember to look up at the stars and not down at your feet.</b> 
          <br />
          Try to make sense of what you see and wonder about what makes the universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at.
          <br />
          <i>It matters that you don't just give up.</i>”
          <br />
          <b className="author">STEPHEN HAWKING</b>
        </p>
        <br />
        <p>🛰 ✨ 🪐</p>
        <br />
        <a href="#start"><Button className="scroll" variant="outline-warning">enter the gallery</Button></a>
      </div>
      
      <a id="start">
        <div className="date-picker">
          <p className="instructions">first, select a date range you want to view from</p>
          <DateRangePicker
            className="calendar"
            onChange={item => setDate([item.selection])}
            maxDate={addDays(new Date(), 0)}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={date}
            direction="horizontal"
            preventSnapRefocus={true}
            calendarFocus="backwards"
          />
          <br />
          <a href="#gallery"><Button className="date-button" variant="outline-light" onClick={updateResult}>go 🚀🌙</Button></a>
        </div>
      </a>

      <a id="gallery">
        <div className="photos">
          { result[0].title == null ? (
            <div></div>
          ) : (
            result.map((res, index) => (
              <PhotoCard
                key={index}
                title={res.title}
                date={res.date}
                desc={res.desc}
                type={res.type}
                url={res.url}
                liked={res.liked}
              ></PhotoCard>
            ))
          )
          }
        </div>
      </a>

      <div className="footer"></div>
    </div>
  );
}

export default App;

      {/* <p> start date : {JSON.stringify(date[0].startDate)} </p>
      <p> end date : {JSON.stringify(date[0].endDate)} </p> */}

      {/* <FetchImage></FetchImage> */}
      {/* <button onClick={buttonState}> Get Pictures </button> */}
      {/* <p> result : {JSON.stringify(result)} </p> */}