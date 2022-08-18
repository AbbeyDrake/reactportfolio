import { useNavigate } from "react-router";
import { Routes, Route} from "react-router-dom";
import Home from '../pages/Home';


const withRouter = (Component) => {
	const Wrapper = (props) => {
		const history = useNavigate();
		return <Component history={history} {...props} />;
	};
	return Wrapper;
};

function Main() {
 
    return (
      <div>
        
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    );
  
}

export default withRouter(Main);