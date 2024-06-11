import './App.css'
import axios from 'axios'

console.log("app is working")

const config = {
  headers: {
    header1: "token",
    header2: "token",
  }
}

const apiCall = () => {
  axios.get('http://localhost:3000', config).then((data) => {
    console.log(data)
  })
}

function App() {


  return (
    <div>
      <header>

        <button onClick={apiCall}>Make API Call!</button>

      </header>
    </div>
  )
}

export default App
