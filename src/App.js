import './App.css'
// import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import characters from './data.js'

function App() {
  return (
    <div className='App' style={{ padding: '25px' }}>
      {/* <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr /> */}
      <Nav />

      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
    </div>
  )
}

export default App
