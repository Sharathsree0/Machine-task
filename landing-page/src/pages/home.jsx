import About from "../Components/about/About.jsx"
import Footer from "../Components/footer/Footer.jsx"
import Hero from "../Components/hero/Hero.jsx"
import Nav from "../Components/nav/Nav.jsx"
import Products from "../Components/products/Products.jsx"

function Home() {
  return (
    <>
        <Nav/>
        <Hero/>
        <Products/>
        <About/>
        <Footer/>
    </>
  )
}

export default Home
