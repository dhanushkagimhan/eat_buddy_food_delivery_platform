// import { Counter } from './features/counter/Counter';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/shared/Header";
import MainPage from "./components/pages/public/MainPage";
import Login from "./components/pages/public/Login";
import Register from "./components/pages/public/Register";
import ProtectedRoute from "./routing/ProtectedRoute";
import Home from "./components/pages/protected/Home";

function App() {
  return (
    // <div className="App">
    //   <Counter />
    // </div>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
