import React, { useEffect, useState } from "react";
import axios from "axios";
import wLogo from '../images/Logos/Denali_Logo_White_Transparent_BG.png';
import LinkedIn from '../images/Logos/LinkedInLogoBW.png';
import './Footer.css';

function Footer() {
    const [jsonData, setJsonData] = useState(null);
    const [jsonData2, setJsonData2] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/data/Accreditations.json");
                setJsonData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/data/Text.json");
                setJsonData2(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);
        const handleMediaChange = (e) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", handleMediaChange);
        return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }, []);

    if (!jsonData || !jsonData2) {
        return null;
    }

    return (
        <div className="background">
            <div className="items">
                <div id="item1">
                    <h4>Let's Talk</h4>
                    <p>{jsonData2[0].contactAddress} {jsonData2[0].contactCity}</p>
                    <p><a href="mailto:info@denaliprojects.com" style={{ color: "white" }}>{jsonData2[0].contactEmail}</a></p>
                    <p>
                        {isMobile ? (
                            <a href="tel:+14039846610" style={{ color: "white" }}>{jsonData2[0].contactPhone}</a>
                        ) : (
                            jsonData2[0].contactPhone
                        )}
                    </p>
                    <a href="https://www.linkedin.com/company/denali-projects-ltd">
                        <img src={LinkedIn} alt="LinkedIn" id='LinkedIn' />
                    </a>
                </div>
                <div id="item2">
                    <h4>Company</h4>
                    <a href="https://denaliprojects.sharepoint.com/" style={{ color: "white" }}>
                        <p>SharePoint Login</p>
                    </a>
                    <br />
                    <img src={wLogo} alt="Logo" />
                </div>
                <div id="item3">
                    <h4>Accreditations</h4>
                    <h5>Denali Projects Ltd. is a registered firm in good standing with the following associations:</h5>
                    <ul>
                        {jsonData.accreditations.map((accreditation, index) => (
                            <li key={index}>{accreditation}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <p style={{ fontSize: "14px", color: "white", textAlign: "center", paddingBottom: "20px" }}>
                Copyright &copy; 2024 Denali Projects Ltd.
            </p>
        </div>
    );
}

export default Footer;
