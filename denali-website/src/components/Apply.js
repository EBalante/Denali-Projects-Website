import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import "./Apply.css";

function Apply() {
  const { jobTitle } = useParams();

  useEffect(() => {
    document.title = "Apply - Denali Projects";
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const [isFormValid, setIsFormValid] = useState(false);
  const [FLname, setFLname] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [isValidPhoneNumber, setValidPhoneNumber] = useState(false);
  const [APEGA, setAPEGA] = useState("");
  const [alberta, setAlberta] = useState("No");
  const [legalToWork, setLegalToWork] = useState("No");
  const [url, setUrl] = useState("");
  const [resume, setResume] = useState(null);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  useEffect(() => {
    checkFormValidity();
  }, [
    FLname,
    email,
    address1,
    city,
    province,
    postalCode,
    phone,
    resume,
    isValidPhoneNumber,
  ]);

  const handleNameChange = (event) => {
    setFLname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddress1Change = (event) => {
    setAddress1(event.target.value);
  };

  const handleAddress2Change = (event) => {
    setAddress2(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleProvinceChange = (event) => {
    setProvince(event.target.value);
  };

  const handlePostalChange = (event) => {
    setPostalCode(event.target.value);
  };

  const handlePhoneChange = (event) => {
    const phoneNumber = event.target.value;
    validPhoneNumber(phoneNumber);
    setPhone(phoneNumber);
  };

  const handleAPEGAChange = (event) => {
    setAPEGA(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleAlbertaChange = (event) => {
    setAlberta(event.target.value);
  };

  const handleLegalToWorkChange = (event) => {
    setLegalToWork(event.target.value);
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };

  const validPhoneNumber = (phone) => {
    const regex =
      /^(\+\d{1,3}[- ]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    setValidPhoneNumber(regex.test(phone));
  };

  const checkFormValidity = () => {
    if (
      FLname.trim() !== "" &&
      email.trim() !== "" &&
      address1.trim() !== "" &&
      city.trim() !== "" &&
      province.trim() !== "" &&
      postalCode.trim() !== "" &&
      phone.trim() !== "" &&
      isValidPhoneNumber &&
      resume !== null
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSignup = (event) => {
    event.preventDefault();
    if (!isValidPhoneNumber) {
      setShow(true);
    }
    if (!isFormValid) {
      setShow2(true);
    }
    if (isFormValid && isValidPhoneNumber) {
      setShow3(true);
    }
  };

  const closeAlert = () => {
    setShow(false);
  };

  const closeAlert2 = () => {
    setShow2(false);
  };

  const closeAlert3 = () => {
    setShow3(false);
    window.location.href = "/";
  };

  return (
    <div>
      <Header />
      <div className="layoutAP">
        <div className="contentAP">
          <p className="headerAP">Apply to {decodeURIComponent(jobTitle)}</p>
          <p className="textAP">
            Denali Projects offers exciting opportunities for professional
            growth, allowing individuals to work on elaborate and complex
            projects that shape the future of the energy industry. With a strong
            emphasis on collaboration, sustainability, and excellence, employees
            are empowered to contribute their unique skills and ideas, ensuring
            a fulfilling and impactful career. Apply at Denali Projects today!
          </p>
        </div>
        <form className="formAP" onSubmit={handleSignup}>
          <p style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}>
            Personal Details
          </p>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="text"
              value={FLname}
              onChange={handleNameChange}
              placeholder="First and Last Name"
              required
            />
          </label>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              required
            />
          </label>
          <p style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}>
            Contact Details
          </p>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="text"
              value={address1}
              onChange={handleAddress1Change}
              placeholder="Street Address"
              required
            />
          </label>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="text"
              value={address2}
              onChange={handleAddress2Change}
              placeholder="Address Line 2"
            />
          </label>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="City"
              required
            />
          </label>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="text"
              value={province}
              onChange={handleProvinceChange}
              placeholder="Province"
              required
            />
          </label>
          <label className="longlabelAP">
            <input
              className="input-field-largeAP"
              type="text"
              value={postalCode}
              onChange={handlePostalChange}
              placeholder="Postal Code"
              required
            />
          </label>
          <p style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}>
            Phone
          </p>
          <label className="longlabelAP">
            <input
              className="input-field-largeAP"
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Phone"
              required
            />
          </label>

          <p style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}>
            APEGA Membership Number
          </p>
          <label className="longlabelAP">
            <input
              className="input-field-largeAP"
              type="text"
              value={APEGA}
              onChange={handleAPEGAChange}
              placeholder="Optional"
            />
          </label>
          <p style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}>
            Do you currently reside in Alberta?
          </p>
          <label className="longlabelAP">
            <select
              className="input-field-largeAP"
              value={alberta}
              onChange={handleAlbertaChange}
              required
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </label>
          <p style={{ marginBottom: "0", fontSize: "22px", fontWeight: 500 }}>
            Are you legally entitled to work in Canada?
          </p>
          <label className="longlabelAP">
            <select
              className="input-field-largeAP"
              value={legalToWork}
              onChange={handleLegalToWorkChange}
              required
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </label>
          <p style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}>
            LinkedIn Profile URL
          </p>
          <label className="longlabelAP">
            <input
              className="input-field-largeAP"
              type="url"
              value={url}
              onChange={handleUrlChange}
              placeholder="Optional"
            />
          </label>
          <p style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}>
            Resume
          </p>
          <label className="longlabelAP">
            <input
              className="input-field-largeAP"
              type="file"
              onChange={handleResumeChange}
              accept=".pdf"
              required
            />
          </label>
          <button className="buttonAP" type="submit" onClick={handleSignup}>
            Submit
          </button>
        </form>
        {show && (
          <motion.div
            className="custom-alert-overlay"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ opacity: { duration: 0.4 }, y: { duration: 0.5, ease: "easeOut" } }}
          >
            <div className="custom-alert-overlayOP">
              <div className="custom-alertOP">
                <p>Please input a valid phone number.</p>
                <button onClick={closeAlert}>Close</button>
              </div>
            </div>
          </motion.div>
        )}
        {show2 && !show && (
          <motion.div
            className="custom-alert-overlay"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ opacity: { duration: 0.4 }, y: { duration: 0.5, ease: "easeOut" } }}
          >
            <div className="custom-alert-overlayOP">
              <div className="custom-alertOP">
                <p>Please fill in all fields.</p>
                <button onClick={closeAlert2}>Close</button>
              </div>
            </div>
          </motion.div>
        )}
        {show3 && (
          <motion.div
            className="custom-alert-overlay"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ opacity: { duration: 0.4 }, y: { duration: 0.5, ease: "easeOut" } }}
          >
            <div className="custom-alert-overlayOP">
              <div className="custom-alertOP">
                <p>Thank you for applying to work at Denali Projects.</p>
                <button onClick={closeAlert3}>Close</button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Apply;
