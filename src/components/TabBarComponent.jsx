import styled from 'styled-components';

const TabBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #007acc;
  color: white;
  height: 50px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Tab = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.active ? 'yellow' : 'white')};
  font-size: 16px;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  cursor: pointer;
  padding: 10px 20px;

  &:hover {
    color: #ffd700;
  }

  &:focus {
    outline: none;
  }
`;

function TabBarComponent({ sections, activeTab, setActiveTab }) {
  return (
    <TabBar>
      {sections.map(({ key, label }) => (
        <Tab
          key={key}
          active={activeTab === key}
          onClick={() => setActiveTab(key)}
        >
          {label}
        </Tab>
      ))}
    </TabBar>
  );
}

export default TabBarComponent;
