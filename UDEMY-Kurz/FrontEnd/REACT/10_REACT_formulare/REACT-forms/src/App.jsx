import './App.css'
import FirstForm from './firstForm'
import PrihlasForm from './PrihlasForm'
import PrihlasForm_Better from './PrihlasForm_Better'
import NakupListForm from './NakupniListForm'
import NakupListRenderer from './NakupListRenderer'
import ValNakupListRenderer from './ValNakupListRenderer'
import FormDemo from './FormDemo'

function App() {
  

  return (
    <>
      <FirstForm />
      <hr />
      <PrihlasForm />
      <hr />
      <PrihlasForm_Better />
      <hr />
      <NakupListForm />
      <hr />
      <NakupListRenderer />
      <hr />
      <ValNakupListRenderer />
      <hr />
      <h2>Validace pomocí hooku - react hook form</h2>
      <FormDemo />
    </>
  )
}

export default App
