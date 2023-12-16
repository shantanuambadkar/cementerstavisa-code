import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import { TextField, Grid, Button } from '@mui/material';
import mainBuilding from './MainBuilding.png';
import grFloorPlan from './GrFloorPlan.png';
import floorPlan from './FloorPlan.png';

var PageErrors = {};

function App() {
  const [formData, setFormData] = useState({
    leadName: '',
    email: '',
    mobile: '',
    // Other form fields
  });
  const url = process.env.REACT_APP_GOOGLE_FORMS_URL;

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
            'entry.2088321284': formData.leadName,
            'entry.567898076': formData.mobile,
            'entry.918644621': formData.email,
          }),
        {
          mode: 'no-cors',
        }
      );
    } catch (e) {
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
        <div className="mainBuildingDiv">
          <img
            className="mainBuilding-img"
            src={mainBuilding}
            alt="MainBuilding"
          />
        </div>
        <div className="mainBuildingDiv missionTextDiv">
          <div className="background-content">
            <form onSubmit={handleSubmit}>
              <Grid container direction="row" alignItems="center" spacing={2}>
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
                    label="Mobile Number"
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
        <div className="missionTextDiv">
          <h2>Mission</h2>
          To be the preferred Real Estate Development Company that provides an
          Excellent & Consistent Customer experience 100% of the time We base
          every decision on what’s best for:
          <br /> 1st: – Our Clients <br /> 2nd: – Our Team Members and Stake
          Holders
          <br /> 3rd: – Our Company as a whole <b>VISION</b> To provide Valued
          Construction solutions using our expertise and access to Technology,
          Design, manufacturing so as to deliver end to end solutions for all
          types of Real Estate Development needs. Thereby providing a structured
          approach which Delivers on Time, Within Budget and with Quality
          Assurances.
          <br /> <b>Values</b> Conduct Business with Integrity and Fairness
          Continuously Train our Employees and improve our Processes Provide
          Quality products & services High on Integrity, Commitment, Honesty,
          Openness & Respect for others We take Pride in our work and we have
          Fun Together
        </div>
        <div className="floorPlan-div">
          <img
            className="floorplan-img"
            src={grFloorPlan}
            alt="GroundFloorPlan"
          />
          <img className="floorplan-img" src={floorPlan} alt="FloorPlan" />
        </div>
      </div>
    </div>
  );
}

export default App;
