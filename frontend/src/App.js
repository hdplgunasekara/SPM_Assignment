import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';

//pasindu 
import ArticleList from "./pages/article/ArticleList";


function App() {
  return (
  <div className="App">
  <Router>
    <Routes>
      {/* Pasindu  */}      
      <Route exact path="/article/list" element={<ArticleList />} />

    </Routes>
  </Router>
     
    </div>
  );
}

export default App;
