import './App.css'
import Counter from './Counter'
import QuoteFetcher from './quoteFetcher'
import QuoteLoader from './quoteLoader'
import ProfileViewerWithSearch from './ProfileViewerWithSearch'


function App() {
  

  return (
    <>
      <h2>ukázka useEffect</h2>
      <Counter />
      <hr />
      <h2>ukázka useEffect v praxi :D</h2>
      <QuoteFetcher />
      <hr />
      <h2>načítací obrazovka</h2>
      <QuoteLoader />
      <hr />
      <h2>Ukázka kombinace</h2>
      <ProfileViewerWithSearch />
    </>
  )
}

export default App
