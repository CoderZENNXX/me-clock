import "./App.css"
import DigitalClock from "./DigitalClock"
import { useState } from "react"

function App() {
  const [imgIndex, setImgIndex] = useState(1)
  const totalImages = 5

  function changeBgPic(e) {
    const nextIndex = imgIndex < totalImages ? imgIndex + 1 : 1
    setImgIndex(nextIndex)
    const app = document.querySelector(".app")
    app.style.backgroundImage = `url(./image-${nextIndex}.jpg)`
  }

  return (
    <div className="app">
      <h1 className="header">
        Me-Clock
      </h1>
      <div className="clock-container" 
        onClick={() => {
          changeBgPic()
        }}
      >
        <DigitalClock />
      </div>
    </div>
  )
}

export default App