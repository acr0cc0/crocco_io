import Header from './components/Header'
import About from './components/About'
import './App.css'
import Projects from './components/Projects'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
      </main>
    </div>
  )
}

export default App
