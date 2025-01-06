import Navbar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Event from "./Event";
import Availability from "./Availability";
import Integration from "./Integration";
import Booking from "./Booking";
import EventForm from "./EventForm";
function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <div className="grid sm:grid-cols-12">
          <div className="sm:col-span-3 border p-2 sm:block hidden">
            <Home />
          </div>
          <div className="sm:col-span-8 border p-6">
          {/* <h1 className="text-lg font-bold">Welcome Sushil Gupta</h1> */}
            <Routes>
              <Route path="/event" element={<Event/>}/>
              <Route path="/booking" element={<Booking/>}/>
              <Route path="/availability" element={<Availability/>}/>
              <Route path="/integration" element={<Integration/>}/>
              <Route path="/eventform" element={<EventForm/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
