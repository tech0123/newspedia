import './App.css';
import LoadingBar from 'react-top-loading-bar';
import React, {useState} from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import FetchArticles from './components/FetchArticles';


const App = () => {
  const pagesize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)


    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pagesize} country={"in"} category="general" key="general" />} ></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pagesize} country={"in"} category="business" key="business" />} ></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pagesize} country={"in"} category="entertainment" key="entertainment" />} ></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pagesize} country={"in"} category="health" key="health" />} ></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pagesize} country={"in"} category="science" key="science" />} ></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pagesize} country={"in"} category="sports" key="sports" />} ></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pagesize} country={"in"} category="technology" key="technology" />} ></Route>
            <Route exact path="/fetch" element={<FetchArticles  />} ></Route>
            
          
          </Routes>
        </Router>
      </div>
    )

}

export default App;