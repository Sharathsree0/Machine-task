import About from "../Components/about/About"
import Footer from "../Components/footer/Footer"
import Hero from "../Components/Hero/Hero"
import Nav from "../Components/Nav/nav"
import Products from "../Components/products/Products"

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