import './App.css'
import FirstMUIcomponent from './firstMUIcomponent'
import RatingFunc from './ratingComponent'
import InputElements from './inputElements'
import SX_styling from './sx_styling'
import NavBar from './nav_menu'

function App() {

  return (
    <>
     <FirstMUIcomponent />
     <hr />
     <RatingFunc />
     <hr />
     <InputElements />
     <hr />
     <h2>Stylizace MUI pomocí sx propu</h2>
     <SX_styling />
     <hr />
     <h2>Ukázka nav baru z MUI</h2>
     <NavBar />
    </>
  )
}

export default App
