import { useState } from 'react';
import './App.css';
import LeftArrow from "./images/LeftArrow.svg";
import RightArrow from "./images/RightArrow.svg";
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function App() {
  const [selectDate, setSelectDate] = useState(new Date());

  const daysInMonth = () => {
    const daysArray = [];
    const firstDay = new Date(selectDate.getFullYear(), selectDate.getMonth(), 1);
    const lastDay = new Date(selectDate.getFullYear(), selectDate.getMonth() + 1, 0);

    for (let i = 0; i < firstDay.getDay(); i++) {
      daysArray.push(null);
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysArray.push(new Date(selectDate.getFullYear(), selectDate.getMonth(), i))
    }
    return daysArray;
  }
  const handleChangeMonth = (e) => {
    const newMonth = parseInt(e.target.value, 10);
    setSelectDate(new Date(selectDate.getFullYear(), newMonth, 1))
  }
  const handleChangeYear = (e) => {
    const newYear = parseInt(e.target.value, 10);
    setSelectDate(new Date(newYear, selectDate.getMonth(), 1))
  }
  const handleLeftArrow = (e) => {
    setSelectDate(new Date(selectDate.getFullYear(), selectDate.getMonth() - 1, 1))
  }
  const handleRightArrow = () => {
    setSelectDate(new Date(selectDate.getFullYear(), selectDate.getMonth() + 1, 1))
  }
  return (
    <div className="calendar">
      <div className="header">
        <button>
          <img src={LeftArrow} onClick={handleLeftArrow} />
        </button>
        <select value={selectDate.getMonth()} onChange={handleChangeMonth}>
          {months.map((el, index) => (
            <option key={index} value={index}>{el}</option>
          ))}
        </select>
        <select value={selectDate.getFullYear()} onChange={handleChangeYear}>
          {
            Array.from({ length: 10 }, (_, i) => selectDate.getFullYear() - 5 + i).map((year) => (
              <option key={year} value={year}>
                {"  "}
                {year}
              </option>
            ))
          }
        </select>
        <button>
          <img src={RightArrow} onClick={handleRightArrow} />
        </button>
      </div>
      <div className="daysOfWeek">
        {daysOfWeek.map((el, index) => (
          <div key={index}>{el}</div>
        ))}
      </div>
      <div className="days">
        {daysInMonth().map((day, index) => (
          <div className={day ? "day" : "empty"} key={index}>{day ? day.getDate() : ""}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
