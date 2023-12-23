import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import { TextField, Grid, Button } from '@mui/material';
import mainBuilding from './compressedPNG/building.webp';
import grFloorPlan from './compressedPNG/GrFloorPlan.webp';
import floorPlan from './compressedPNG/FloorPlan.webp';
import Swal from 'sweetalert2';
import Footer from './Footer.js';
import amenities from './amenities-tower.png';
import headerBuilding from './compressedPNG/MainBuilding.webp';
import lift from './Lift.png';
import healthClub from './healthClub.png';
import vastu from './vastu.png';
import sanitary from './bathtub.png';
import rain from './rain.png';
import carpark from './stackedCar.png';
import floor from './floor.png';
import cctv from './CCTV.png';
import swing from './swing.png';
import grass from './grass.png';
import yoga from './yoga.png';
import terrace from './terraceGarden.png';
import cabana from './cabana.png';
import Amenities from './Amenities.js';
import TowerFloorPlan from './TowerFloorPlan.js';

var PageErrors = {};

function App() {
  //Carousel code start

  const images = [
    { url: amenities, text: '9 Storey Building', classList: 'amenities-img' },
    { url: lift, text: '2 Branded Lifts', classList: 'amenities-img' },
    {
      url: sanitary,
      text: 'Premium Sanitary Fittting',
      classList: 'amenities-img',
    },
    {
      url: vastu,
      text: 'Vastu Compliant Flats',
      classList: 'amenities-img',
    },
    {
      url: healthClub,
      text: 'Health Club',
      classList: 'amenities-img',
    },
    {
      url: rain,
      text: 'Rain Water Harvesting',
      classList: 'amenities-img',
    },
    {
      url: floor,
      text: 'Premium Verified Floors',
      classList: 'amenities-img',
    },
    {
      url: carpark,
      text: 'Stacked Car Parking',
      classList: 'amenities-img',
    },
    {
      url: cctv,
      text: 'CCTV Surveliance in Areas',
      classList: 'amenities-img',
    },
    // Add more images with their respective text
  ];

  const terraceImages = [
    {
      url: swing,
      text: 'Swing For Toddlers',
      classList: 'amenities-img',
    },
    { url: grass, text: 'Green Area', classList: 'amenities-img-grass' },
    { url: yoga, text: 'Meditation / Yoga Zone', classList: 'amenities-img' },
    { url: terrace, text: 'Terrace Garden', classList: 'amenities-img' },
    { url: cabana, text: 'Cabana Seating', classList: 'amenities-img' },
  ];

  const floorPlanImages = [
    { url: grFloorPlan, text: 'Ground Floor Plan' },
    { url: floorPlan, text: 'Floor Plan' },
  ];

  //Carousel code end

  /* const showPopup = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Enter your details',
      html:
        '<input id="leadNamePopup" class="swal2-input" placeholder="Name">' +
        '<input id="emailPopup" class="swal2-input" placeholder="Email">' +
        '<input id="mobilePopup" class="swal2-input" placeholder="Mobile No.">',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Submit',
      preConfirm: () => {
        return [
          document.getElementById('leadNamePopup').value,
          document.getElementById('emailPopup').value,
          document.getElementById('mobilePopup').value,
        ];
      },
    });

    if (formValues) {
      // Handle form submission (formValues contains input values)
      console.log('Submitted values:', formValues, formValues[0]);
      // You can perform further actions with the formValues here
      try {
        await fetch(
          url +
            new URLSearchParams({
              'entry.254579040': formValues[0],
              'entry.2078466645': formValues[1],
              'entry.957184084': formValues[2],
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
    }
  }; */

  // Trigger the popup
  //showPopup();

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

  function gtag_report_conversion(url) {
    var gtag = window.gtag || function () {};
    var callback = function () {
      if (typeof url != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      send_to: 'AW-11442235311/dC7SCJGel4AZEK_PitAq',
      event_callback: callback,
    });
    return false;
  }

  const postToGoogleSheet = async () => {
    gtag_report_conversion('https://cementers.co.in');

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
            <div className="amenitiesDiv">
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
              alt="Building"
              src={mainBuilding}
            />
          </div>
        </div>
        <div>
          <h2>Tower Configuration</h2>
        </div>
        <div>
          <h3>1BHK - 434 Rera Carpet</h3>
          <br />
          <h3>2BHK - 557 Rera Carpet</h3>
        </div>
        <div className="amenitiesDiv">
          <div>
            <TowerFloorPlan images={floorPlanImages} />
          </div>
        </div>
        <div>
          <h2>Project Amenities</h2>
        </div>
        <div className="amenitiesDiv">
          <Amenities images={images} />
        </div>
        <div>
          <h2>Terrace Amenities</h2>
        </div>
        <div className="amenitiesDiv">
          <Amenities images={terraceImages} />
        </div>
      </div>
      <div id="siteLocation" className="App">
        <div>
          <h2>Site Location</h2>
        </div>
        <div>
          Tavisa, New Link Road, Near Evershine Nagar, Next to Landmark
          Restaurant Malad (West) Pincode - 400064
        </div>
      </div>
      <div className="App">
        <div>
          <h2>MahaRera Registered</h2>
        </div>
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
