import React from "react";
import styled from "styled-components";
import { SubHeading, Text } from "../ccl/text/Text";
import { experienceArray } from "../information/experience";

const ExperienceWrapper = styled.div`
  display: flex;
`;
const ExperienceBody = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
`;

const ExperienceTimeline = styled.div`
  grid-column: span 2 / span 2;
  color: rgb(100 116 139/1);
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  margin-top: 0.25rem;
`;

const ExperienceDescription = styled.div`
  grid-column: span 6 / span 6;
  color: "white";
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

interface ExperienceProps {
  companyName: string;
  title: string;
  timePeriod: string;
  text: string;
  tags: string[];
  link: string;
}

interface ExperienceItemProps {
  experienceItem: ExperienceItemProps;
}

const Experience = ({
  companyName,
  title,
  timePeriod,
  text,
  tags,
  link,
}: ExperienceProps) => {
  return (
    <ExperienceWrapper>
      <ExperienceBody>
        <ExperienceTimeline> {timePeriod}</ExperienceTimeline>
        <ExperienceDescription>
          <SubHeading>{`${title} - ${companyName}`}</SubHeading>

          <Text>{text}</Text>
        </ExperienceDescription>
      </ExperienceBody>
    </ExperienceWrapper>
  );
};

export const ExperienceList = ({}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {/* <Experience /> */}
      {experienceArray.map((e) => (
        <Experience
          companyName={e.companyName}
          title={e.title}
          timePeriod={e.timePeriod}
          text={e.text}
          tags={e.tags}
          link={e.link}
        />
      ))}
      <SubHeading>View full resume</SubHeading>
    </div>
  );
};
