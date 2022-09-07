import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';

//pasindu 
import ArticleList from "./pages/article/ArticleList";
import AddArticle from "./pages/article/AddArticle";


function App() {
  return (
  <div className="App">
  <Router>
    <Routes>
      {/* Pasindu  */}      
      <Route exact path="/article/list" element={<ArticleList />} />
      <Route exact path="/article/add" element={<AddArticle />} />

    </Routes>
  </Router>
     
    </div>
  );
}

export default App;
