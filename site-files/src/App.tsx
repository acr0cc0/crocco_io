import Header from './components/Header'
import About from './components/About'
import './App.css'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>Created by Anthony Crocco</p>
        <p>2025</p>
      </footer>
    </div>
  )
}

export default App
