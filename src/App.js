import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Index from './contents';
import Add from './contents/addnote';
import Login from './contents/login';
import Register from './contents/register';
//contents
//import login from './contents/login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/note/add" element={<Add></Add>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/note" element={<Index></Index>}></Route>
      </Routes>  
    </Router>
  
  );
}

export default App;
