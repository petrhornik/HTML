import './App.css'
import Clicker from './Clicker'

function App() {

  return ( //template pro úkol cviceni
    <>
      <h1>Clicker cviceni</h1>
      <hr />

      <div>
        <Clicker message="HI!!!" buttonText="Click Me"/>
        <Clicker message="Please stop clicking me" buttonText="do not click"/>
      </div>
    </>
  )
}

export default App
