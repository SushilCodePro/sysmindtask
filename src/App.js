import Navbar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Event from "./Event";
import Availability from "./Availability";
import Integration from "./Integration";
import Booking from "./Booking";
function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <div className="grid sm:grid-cols-12">
          <div className="sm:col-span-2 border p-2 sm:block hidden">
            <Home />
          </div>
          <div className="sm:col-span-8 border p-6">
            <Routes>
              <Route path="/event" element={<Event/>}/>
              <Route path="/booking" element={<Booking/>}/>
              <Route path="/availability" element={<Availability/>}/>
              <Route path="/integration" element={<Integration/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
