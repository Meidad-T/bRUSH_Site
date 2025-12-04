import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Team from './components/Team'
import Footer from './components/Footer'
import MouseSpotlight from './components/MouseSpotlight'
import MouseTrail from './components/MouseTrail'

function App() {
  return (
    <div className="app">
      <MouseSpotlight />
      <MouseTrail />
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

export default App
