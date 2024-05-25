import './css/App.css' // Styling specific for App component
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScatterPlot from './components/Graph.jsx'

function App() {
  return (
    <div className = "home">
        <Header/>
        <ScatterPlot/>
        <Footer/>
    </div>
  )
}
export default App
