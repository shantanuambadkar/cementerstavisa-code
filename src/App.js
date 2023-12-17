import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import { TextField, Grid, Button } from '@mui/material';
import mainBuilding from './building.png';
import grFloorPlan from './GrFloorPlan.png';
import floorPlan from './FloorPlan.png';
import Swal from 'sweetalert2';
import Footer from './Footer.js';
import amenities from './amenities-tower.png';
import headerBuilding from './MainBuilding.png';

var PageErrors = {};

function App() {
  const [formData, setFormData] = useState({
    leadName: '',
    email: '',
    mobile: '',
    // Other form fields
  });
  const url = process.env.REACT_APP_GOOGLE_FORMS_URL;

  function alertSubmitPopup() {
    Swal.fire({
      title: 'Thank You.',
      text: 'We will get back to you.',
    });
  }

  function alertErrorPopup() {
    Swal.fire({
      title: 'Sorry!',
      text: 'There was an error while submitting your response.',
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobile') {
      if (value && value.length !== 10) {
        PageErrors.mobile = 'Mobile is invalid';
      } else {
        const updatedObject = { ...PageErrors };
        delete updatedObject['mobile'];
        PageErrors = { ...updatedObject };
      }
    }
    if (name === 'email') {
      if (
        value &&
        value !== null &&
        value !== null &&
        !emailValidation(value)
      ) {
        PageErrors.email = 'Email is invalid';
      } else {
        const updatedObject = { ...PageErrors };
        delete updatedObject['email'];
        PageErrors = { ...updatedObject };
      }
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const postToGoogleSheet = async () => {
    try {
      await fetch(
        url +
          new URLSearchParams({
            'entry.254579040': formData.leadName,
            'entry.2078466645': formData.mobile,
            'entry.957184084': formData.email,
          }),
        {
          mode: 'no-cors',
        }
      );
      alertSubmitPopup();
    } catch (e) {
      alertErrorPopup();
      console.log(e.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(PageErrors).length > 0) {
      console.log('Form Errored');
    } else {
      try {
        await postToGoogleSheet();
        setFormData({
          leadName: '',
          email: '',
          mobile: '',
          // Reset other form fields as needed
        });
      } catch (error) {
        console.log('Error', error);
      }
    }
  };

  const emailValidation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const setIsValidEmail = emailRegex.test(email);
    return setIsValidEmail;
  };

  return (
    <div>
      <Header></Header>
      <div>
        {/* <div className="mainBuildingDiv">
          <img
            className="mainBuilding-img"
            src={mainBuilding}
            alt="MainBuilding"
          />
        </div> */}
        <div className="flexDiv carouselDiv">
          <div className="carouselDiv">
            <div>
              <img
                src={headerBuilding}
                alt="Main Building"
                className="fullWidth"
              ></img>
            </div>
          </div>
          <div className="mainBuildingDiv missionTextDiv formDiv">
            <div className="background-content">
              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item>
                    Please submit your details to get in touch with you
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Name"
                      variant="outlined"
                      required
                      fullWidth
                      value={formData.leadName}
                      onChange={handleChange}
                      inputProps={{
                        name: 'leadName',
                        id: 'leadName',
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Email"
                      variant="outlined"
                      type="email"
                      required
                      fullWidth
                      onChange={handleChange}
                      value={formData.email}
                      inputProps={{
                        name: 'email',
                        id: 'email',
                      }}
                      // Add onChange and value props for handling input
                    />
                    {PageErrors.email && (
                      <div className="danger-text">{PageErrors.email}</div>
                    )}
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Mobile No"
                      variant="outlined"
                      type="number"
                      required
                      fullWidth
                      onChange={handleChange}
                      value={formData.mobile}
                      inputProps={{
                        name: 'mobile',
                        id: 'mobile',
                        maxLength: 10,
                      }}
                      onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value))
                          .toString()
                          .slice(0, 10);
                      }}
                      // Add onChange and value props for handling input
                    />
                    {PageErrors.mobile && (
                      <div className="danger-text">{PageErrors.mobile}</div>
                    )}
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item></Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      className="submit-btn"
                    >
                      Submit
                    </Button>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="missionTextDiv">
        <h2>About Cementers</h2>
        <div className="flexDiv carouselDiv">
          <div className="carouselDiv">
            <div className="mission-text-div">
              <h2>Mission</h2>
              <div>
                To be the preferred Real Estate Development Company that
                provides an Excellent & Consistent Customer experience 100% of
                the time We base every decision on what’s best for:
              </div>
              <div>
                <ul>
                  <li>1st: – Our Clients</li>
                  <li>2nd: – Our Team Members and Stake Holders</li>
                  <li>
                    3rd: – Our Company as a whole Vision to provide Valued
                    Construction solutions using our expertise and access to
                    Technology, Design, manufacturing so as to deliver end to
                    end solutions for all types of Real Estate Development
                    needs. Thereby providing a structured approach which
                    Delivers on Time, Within Budget and with Quality Assurances.
                  </li>
                </ul>
              </div>
              <h2>Values</h2>
              <div>
                Conduct Business with Integrity and Fairness Continuously Train
                our Employees and improve our Processes Provide Quality products
                & services High on Integrity, Commitment, Honesty, Openness &
                Respect for others We take Pride in our work and we have Fun
                Together
              </div>
            </div>
          </div>
          <div className="formDiv">
            <img
              className="about-building-img"
              src={mainBuilding}
              alt="Building Image"
            />
          </div>
        </div>
        <div className="amenitiesDiv">
          <div className="flexDiv towerconfigDiv">
            <div>
              <div>Tower Configuration</div>
              <div>1BHK - 434 Rera Carpet</div>
              <div>2BHK - 557 Rera Carpet</div>
            </div>
            <div>
              <div className="floorPlan-div">
                <img
                  className="floorplan-img"
                  src={grFloorPlan}
                  alt="GroundFloorPlan"
                />
                <img
                  className="floorplan-img"
                  src={floorPlan}
                  alt="FloorPlan"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Project Amenities</h2>
        </div>
        <div className="flexDiv amenitiesDiv">
          <div>
            <div>
              <img src={amenities} alt="AM" className="amenities-img" />
            </div>
            <div>9 Storey Building</div>
          </div>
          <div>
            <div>
              <img src={amenities} alt="AM" className="amenities-img" />
            </div>
            <div>2 Branded Lifts</div>
          </div>
          <div>
            <div>
              <img src={amenities} alt="AM" className="amenities-img" />
            </div>
            <div>Premium Sanitary Fittting</div>
          </div>
          <div>
            <div>
              <img src={amenities} alt="AM" className="amenities-img" />
            </div>
            <div>Vastu Compliant Flats</div>
          </div>
          <div>
            <div>
              <img src={amenities} alt="AM" className="amenities-img" />
            </div>
            <div>Health Club</div>
          </div>
          <div>
            <div>
              <img src={amenities} alt="AM" className="amenities-img" />
            </div>
            <div>Rain Water Harvesting</div>
          </div>
          <div>
            <div>
              <img src={amenities} alt="AM" className="amenities-img" />
            </div>
            <div>Premium Verified Floors</div>
          </div>
          <div>
            <div>
              <img src={amenities} alt="AM" className="amenities-img" />
            </div>
            <div>Stacked Car Parking</div>
          </div>
          <div>
            <div>
              <img src={amenities} alt="AM" className="amenities-img" />
            </div>
            <div>CCTV Surveliance in Areas</div>
          </div>
        </div>
        <div>
          <h2>Terrace Amenities</h2>
        </div>
        <div className="flexDiv amenitiesDiv">
          <div>
            <div>
              <img src={amenities} alt="AM" className="amenities-img" />
            </div>
            <div>Swing For Toddlers</div>
          </div>
          <div>
            <div>
              <img src={amenities} alt="AM" className="amenities-img" />
            </div>
            <div>Green Area</div>
          </div>
          <div>
            <div>
              <img src={amenities} alt="AM" className="amenities-img" />
            </div>
            <div>Meditaion / Yoga Zone</div>
          </div>
          <div>
            <div>
              <img src={amenities} alt="AM" className="amenities-img" />
            </div>
            <div>Terrace Garden</div>
          </div>
          <div>
            <div>
              <img src={amenities} alt="AM" className="amenities-img" />
            </div>
            <div>Cabana Seating</div>
          </div>
        </div>
      </div>
      <div className="App">
        <div>
          The project is registered under{' '}
          <a href="https://maharera.mahaonline.gov.in">
            https://maharera.mahaonline.gov.in
          </a>
        </div>
        <div>
          <span>MahaRera Number - P51800047974</span>
        </div>
      </div>
      <div className="footer-margin">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
