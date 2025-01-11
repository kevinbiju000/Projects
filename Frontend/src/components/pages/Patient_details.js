import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";

const PatientDetailsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bloodType: "",
    medicalCondition: "",
    dateOfAdmission: "",
    doctor: "",
    hospital: "",
    insuranceProvider: "",
    billingAmount: "",
    roomNumber: "",
    admissionType: "",
    dischargeDate: "",
    medication: "",
    testResults: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Submit form data to backend for patient details
      const response = await axios.post(
        "http://localhost:5001/api/patient-details",
        formData
      );
      console.log(response.data); // Log response data for debugging

      // Call fraud detection API with the same form data
      const fraudResponse = await axios.post(
        "http://localhost:5001/api/fraud-detection",
        formData
      );
      console.log(fraudResponse.data); // Log fraud detection response

      // Check if fraud was detected and alert the user
      if (fraudResponse.data && fraudResponse.data.fraudDetected) {
        alert("Fraud Detected!");
      } else {
        alert("No Fraud Detected.");
      }
    } catch (error) {
      console.error("Error submitting patient details:", error);
      alert("There was an error submitting the patient details. Please try again.");
    } finally {
      // Optionally reset the form or show a success message
      setFormData({
        name: "",
        age: "",
        gender: "",
        bloodType: "",
        medicalCondition: "",
        dateOfAdmission: "",
        doctor: "",
        hospital: "",
        insuranceProvider: "",
        billingAmount: "",
        roomNumber: "",
        admissionType: "",
        dischargeDate: "",
        medication: "",
        testResults: "",
      });

      alert("Patient details submitted successfully!");
    }
  };

  return (
    <Container maxWidth="sm" style={{ padding: "20px" }}>
      <h2>Patient Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Blood Type"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Medical Condition"
            name="medicalCondition"
            value={formData.medicalCondition}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Date of Admission"
            name="dateOfAdmission"
            value={formData.dateOfAdmission}
            onChange={handleChange}
            fullWidth
            margin="normal"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div>
          <TextField
            label="Doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Hospital"
            name="hospital"
            value={formData.hospital}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Insurance Provider"
            name="insuranceProvider"
            value={formData.insuranceProvider}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Billing Amount"
            name="billingAmount"
            value={formData.billingAmount}
            onChange={handleChange}
            fullWidth
            margin="normal"
            type="number"
          />
        </div>
        <div>
          <TextField
            label="Room Number"
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Admission Type"
            name="admissionType"
            value={formData.admissionType}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Discharge Date"
            name="dischargeDate"
            value={formData.dischargeDate}
            onChange={handleChange}
            fullWidth
            margin="normal"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div>
          <TextField
            label="Medication"
            name="medication"
            value={formData.medication}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Test Results"
            name="testResults"
            value={formData.testResults}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>

        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: "20px" }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default PatientDetailsPage;
