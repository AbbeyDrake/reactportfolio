import Main from '../components/Main'
import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';


import '../App.css';


function Home() {
  return (

    <div>
        <Header/>
        <About/>
        <Portfolio/>
    </div>
  );
}

export default Home;