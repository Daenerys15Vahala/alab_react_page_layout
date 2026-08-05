import "./App.css";
import Header from "./Header";
import Contact from "./Contact";
import Profile from "./Profile";

function App() {
  return (
    <>
      <div className="outer_container">
        <div className="inner_container1">
          {/* <h1>Employee Directory</h1> */}
          <Header title={"Employee Directory"} />
          <input type="search" />
          <Profile
            classname={"inner_container1_img"}
            employee={"Paul Chapman"}
            role={"CEO"}
          />

          <Profile
            classname={"inner_container1_img"}
            employee={"Julianna Vaccaro"}
            role={"Engineer"}
          />

          <Profile
            classname={"inner_container1_img"}
            employee={"Yazmin Ramirez"}
            role={"Logistic Director"}
          />

          <Profile
            classname={"inner_container1_img"}
            employee={"Jazmin Hernandez"}
            role={"Manager"}
          />

          <Profile
            classname={"inner_container1_img"}
            employee={"Valentina Bernal"}
            role={"CFO"}
          />

          <Profile
            classname={"inner_container1_img"}
            employee={"Brittany Buchanan"}
            role={"COO"}
          />
        </div>

        <div className="inner_container2">
          {/* replacing <h1>Employee</h1>  with <Header/> below*/}
          <Header title={"Employee "} />
          <div className="profile_info">
            <Profile
              classname={"inner_container2_img"}
              employee={"Paul Chapman"}
              role={"CEO"}
            />
            <Contact conTitle={"Call Office"} conNumber={"111-111-1111"} />
            <Contact conTitle={"Call Mobile"} conNumber={"211-211-2111"} />
            <Contact conTitle={"SMS"} conNumber={"311-311-3111"} />
            <Contact conTitle={"Email"} conNumber={"paulchapman@email.com"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App