import React from 'react';
const WorkDetail = ({ work }) => 
{
  return (
    <div className="work-detail">
      <h3>{work.title}</h3>
      <p>Рік написання: {work.year}</p>
    </div>
  );
};
export default WorkDetail;