import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Forecast = ({ data }) => {
  const forecastDays = WEEK_DAYS.slice(new Date().getDay()).concat(
    WEEK_DAYS.slice(0, new Date().getDay() + 2)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.daily.map((dayData, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`static/icons/${dayData.weather[0].icon}.png`}
                    className="icon-small"
                    alt="weather"
                  />
                  <label className="day">{forecastDays[index]}</label>
                  <label className="description">
                    {dayData.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(dayData.temp.max)}°F /
                    {Math.round(dayData.temp.min)}°F
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{dayData.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{dayData.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{dayData.clouds}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{dayData.wind_speed} MPH</label>
                </div>
                {/* <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{data.main.sea_level}f</label>
                </div> */}
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{dayData.feels_like.day}°F</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
