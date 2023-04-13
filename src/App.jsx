import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from "react-redux";
import { increment } from "./redux/actions";
import Signup from "./pages/Signup/signup"

function App() {
  const dispatch = useDispatch();

const handleClick = () => {
  dispatch(increment());
};

return (
  <div className='App'>
    <Signup/>
  </div>
);

}

export default App
