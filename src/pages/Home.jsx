import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import WeeklyDeals from "../components/WeeklyDeals/WeeklyDeals";
import GrabGo from "../components/GrabGo/GrabGo";
import Services from "../components/Services/Services";
import About from "./About";
import Checkout from "../components/Checkout/Checkout";
import Footer from "../components/Footer/Footer";

function Home({ user, onLogout }) {
  return (
    <>
      <Navbar user={user} onLogout={onLogout} />

      <main>
        <Hero />
        <WeeklyDeals />
        <GrabGo />
        <Services />
        <About />
        <Checkout />
      </main>

      <Footer />
    </>
  );
}

export default Home;