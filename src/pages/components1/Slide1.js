import React from "react";
import { FloatButton } from 'antd';

function Slide1() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      fontSize: "2rem"
    }}>
      小学
      <FloatButton style={{
      position: "fixed",
    right: "100px",
    bottom: "100px",
  }} onClick={() => window.location.href = 'https://www.example.com'} />
    </div>
  );
}

function Slide2() {
  return <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      fontSize: "2rem"
    }}>
    中学
     <FloatButton style={{
      position: "fixed",
    right: "100px",
    bottom: "100px",
  }} onClick={() => window.location.href = 'https://www.example.com'} />
  </div>;
}

function Slide3() {
  return <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      fontSize: "2rem"
    }}>
    高中
     <FloatButton  style={{
      position: "fixed",
    right: "100px",
    bottom: "100px",
  }}onClick={() => window.location.href = 'https://www.example.com'} />
  </div>;
}

function Slide4() {
  return <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      fontSize: "2rem"
    }}>
    大学
     <FloatButton  style={{
      position: "fixed",
    right: "100px",
    bottom: "100px",
  }} onClick={() => window.location.href = 'https://www.example.com'} />
  </div>;
}
export default Slide1;
export { Slide2, Slide3, Slide4};