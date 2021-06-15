import React from 'react';
import ReactFlow, { Handle } from 'react-flow-renderer';

const elements = [
  {
    id: '2',
    type: 'special',
    position: { x: 100, y: 100 },
    data: { text: 'A custom node' },
  },
];

const customNodeStyles = {
  backgroundImage: 'linear-gradient(red,blue)',
  display: 'flex',
  alignItems: 'center',
  color: '#FFF',
  height: 40,
  padding: 15,
  borderRadius: '50%',
};

const CustomNodeComponent = ({ data }) => {
  return (
    <div style={customNodeStyles}>
      <div>{data.text}</div>
      
    </div>
  );
};

const nodeTypes = {
  special: CustomNodeComponent,
};

const CustomNodeExample = () => {
  return (
    <div style={{ height: 300 }}>
      <ReactFlow elements={elements} nodeTypes={nodeTypes} />
    </div>
  );
};

export default CustomNodeExample;
