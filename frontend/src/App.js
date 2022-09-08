import { BrowserRouter, Router, Routes, Route } from "react-router-dom"
import './App.css';

//pasindu 
import ArticleList from "./pages/article/ArticleList";
import AddArticle from "./pages/article/AddArticle";
import BookDashboard from "./pages/book/BookDashboard";
import ViewBooks from "./pages/book/admin/ViewBooks";


function App() {
  return (
  <div className="App">
  <BrowserRouter>
    <Routes>
      {/* Pasindu  */}      
      {/* <Route exact path="/article/list" element={<ArticleList />} />
      <Route exact path="/article/add" element={<AddArticle />} /> */}
      <Route path="/" element={<BookDashboard/>}/>
      <Route path="/viewbook" element={<ViewBooks/>}/>

    </Routes>
  </BrowserRouter>
     
    </div>
  );
}

export default App;
