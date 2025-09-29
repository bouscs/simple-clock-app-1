import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const hours = time.getHours().toString().padStart(2, '0')
  const minutes = time.getMinutes().toString().padStart(2, '0')
  const seconds = time.getSeconds().toString().padStart(2, '0')

  const date = time.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="clock-container">
      <div className="clock-display">
        <div className="time">
          <span className="time-segment">{hours}</span>
          <span className="time-separator">:</span>
          <span className="time-segment">{minutes}</span>
          <span className="time-separator">:</span>
          <span className="time-segment">{seconds}</span>
        </div>
        <div className="date">{date}</div>
      </div>
    </div>
  )
}

export default App
