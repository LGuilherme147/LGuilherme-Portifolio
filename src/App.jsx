import Banner from "./assets/componets/Banner/banner"
import Skills from "./assets/componets/Competencias/skills"
import Footer from "./assets/componets/Footer/footer"
import Header from "./assets/componets/Header/header"
import Lorem from "./assets/componets/Lorem/lorem"
import Projects from "./assets/componets/Projetos/projetos"

import"./styles/index.css";



function App() {
  return (
    <>
    <Header />
    <main>
      <Banner />
      <Lorem />
      <Projects />
      <Skills />
    </main>
    <Footer />  
    </>
  )
}

export default App
