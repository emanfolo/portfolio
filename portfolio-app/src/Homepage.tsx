import React from "react";
// import './App.css';
import { ViewBox } from "./components/Viewbox";
import styled from "styled-components";
import { ExperienceList } from "./components/ExperienceList";

// grid-template-columns: [row1-start] 55% [row2-start] auto [end];

const StyledWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  background-color: #0a042e;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const Header = styled.div`
  top: 0;
  height: 80vh;
  min-width: 40vw;
  padding-top: 6rem;
  padding-bottom: 6rem;
  display: flex;
  flex-direction: column;
  position: sticky;
  justify-content: space-between;
`;

// think about extending body from header

const Body = styled.div`
  min-width: 40vw;
  padding-top: 6rem;
  padding-bottom: 6rem;
  display: flex;
  flex-direction: column;
  position: sticky;
  justify-content: space-between;
`;

const Bio = styled.text`
  color: white;
  margin-bottom: 9rem;
`;

const Headline = ({}) => {
  return (
    <div style={{ color: "white", display: "flex", flexDirection: "column" }}>
      <h1>Emmanuel Folorunsho</h1>
      <h2>Software Engineer</h2>
      <text>
        I am a highly motivated self-starter with a keen interest in web
        development. I enjoy solving problems and am capable of providing
        solutions both collaboratively as well as independently.
      </text>
    </div>
  );
};

export const Homepage = () => {
  return (
    <StyledWrapper>
      <Header>
        <Headline />
        <text style={{ color: "white" }}>BottomNav</text>
      </Header>
      <Body>
        <Bio>
          Built key features in web applications both solo as well as part of an
          agile team Very familiar with using Figma as a reference to create
          apps Built key features in React Native apps both solo as well as part
          of an agile team Developed a keen eye for detail in regards to my
          development Worked in very collaborative environments alongside
          product managers and designers. Confident enough to tackle any
          frontend task, and aware enough to reach out for extra information if
          required Exceptional communication and problem solving skills Strong
          knowledge of several web technologies Excellent ability to perform in
          pressurised environments Able to work both independently and
          collaboratively Excellent initiative that allows me to learn new
          things whilst providing value immediately
        </Bio>
        <ExperienceList />
      </Body>
    </StyledWrapper>
  );
};

// export default Homepage;
