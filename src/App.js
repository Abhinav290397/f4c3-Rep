import { Route, Routes, } from "react-router-dom";
import Item from "./components/item";
import Profile from "./components/profile";
import Home from "./components/Home";

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path= "/item/id" element={<Item/>} />
        <Route path="/home/id" element={<Profile />} />
      </Routes>
    </div>
  );
};
export default App;
