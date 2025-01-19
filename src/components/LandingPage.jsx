import { useState } from 'react';
import styled from 'styled-components';
import WhatIf from './WhatIf';
import Schedule from './Schedule';
import Standings from './Standings';
import Rules from './Rules';
import TabBarComponent from './TabBarComponent';

// Styled components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  font-family: Arial, sans-serif;
`;

const ContentContainer = styled.div`
  flex: 1;
  margin-top: 50px; /* Matches TabBar height */
  overflow-y: auto;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Section = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const sections = [
  { key: 'standings', label: 'Standings', component: <Standings /> },
  { key: 'schedule', label: 'Schedule', component: <Schedule /> },
  { key: 'rules', label: 'League Rules', component: <Rules /> },
  {
    key: 'whatIf',
    label: 'What If ?',
    component: <WhatIf />,
  },
];

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('standings');

  const activeComponent = sections.find(
    (section) => section.key === activeTab
  )?.component;

  return (
    <PageContainer>
      <TabBarComponent
        sections={sections}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <ContentContainer>
        <Section>{activeComponent}</Section>
      </ContentContainer>
    </PageContainer>
  );
}
