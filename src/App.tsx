import React, { useState } from 'react';
import Modal from './Components/Modal/Modal';
import Navbar from "./Components/NavBar/Navbar";
import AboutProject from "./Pages/AboutProject";
import CompanyList from "./Pages/CompanyList";
import CompanyProfile from "./Pages/CompanyProfile";
import UserAuthorization from "./Pages/UserAuthorization";
import UserList from "./Pages/UserList";
import UserProfile from "./Pages/UserProfile";
import UserRegistration from "./Pages/UserRegistration";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./Redux/counterSlice";
import { RootState } from "./Redux/store";


function App() {
    const [isOpen, setIsOpen] = useState(false);
    const { count } = useSelector((state: RootState) => state.counter1);
    const dispatch = useDispatch();
  return (
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/AboutProject" element={<AboutProject />} />
            <Route path="/CompanyList" element={<CompanyList />} />
            <Route path="/CompanyProfile" element={<CompanyProfile />} />
            <Route path="/UserAuthorization" element={<UserAuthorization />} />
            <Route path="/UserList" element={<UserList />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/UserRegistration" element={<UserRegistration />} />
          </Routes>
        </div>
          <div className="BUTTON_WRAPPER_STYLES">
              <button onClick={() => setIsOpen(true)}>Open Modal</button>
              <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                  This is modal window
              </Modal>
          </div>
          <div className="App">
              <h1>{count}</h1>
              <button
                  onClick={() => {
                      dispatch(increment());
                  }}
              >
                  +
              </button>
              <button
                  onClick={() => {
                      dispatch(decrement());
                  }}
              >
                  -
              </button>
          </div>
      </>
  )
}

export default App;
