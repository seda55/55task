import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaChartPie, FaTimes, FaUserClock, FaCheckSquare, FaBriefcase, FaCloud } from 'react-icons/fa';
import "./Services.scss";

const Services = () => {
  const services = [
    { icon: <FaChartPie />, title: "Business Consulting", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { icon: <FaTimes />, title: "Market Analysis", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { icon: <FaUserClock />, title: "User Monitoring", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { icon: <FaCheckSquare />, title: "Seller Consulting", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { icon: <FaBriefcase />, title: "Financial Investment", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { icon: <FaCloud />, title: "Financial Management", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    
  ];

  return (
    <div className="services-contain" style={{background:"lightgray"}}>
        <div className="container" >
      <div className="service-title" style={{padding:"70px",textAlign:"center"}}>
      <p className="text-uppercase text-muted " style={{color:"gray"}}>Our Services</p>
      <h1 className="mb-5">We Offer Services</h1>
      </div>
      <Row style={{display:"flex",flexWrap:"wrap",gap:"20px",paddingBottom:"90px"}}>
        {services.map((service, index) => (
          <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
            <div className="service-card p-4 shadow-sm rounded" style={{fontSize:"16px",textAlign:"center"}}>
              <div className="icon text-danger mb-3 " style={{ color: 'orange' }}>{service.icon}</div>
              <h4 className="service-title">{service.title}</h4>
              <p className="text-muted service-description">{service.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
    </div>
  );
};

export default Services;
