import { useState, useEffect } from "react"
import "./App.css"

function DigitalClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(interval)
  })

  return (
    <div className="clock">
      <h1>{time}</h1>
    </div>
  )
}

export default DigitalClock
