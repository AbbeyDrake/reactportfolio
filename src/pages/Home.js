import Main from '../components/Main'
import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import ContactPage from '../components/Contact';


import '../App.css';


function Home() {
  return (

    <div>
        <Header/>
        <About/>
        <Portfolio/>
        <ContactPage/>
    </div>
  );
}

export default Home;