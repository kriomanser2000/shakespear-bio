import React from 'react';
import WorkDetail from './WorkDetail';
const works = 
[
  { title: 'Гамлет', year: 1600 },
  { title: 'Отелло', year: 1603 },
  { title: 'Король Лір', year: 1605 },
];
const WorkList = () => 
{
  return (
    <div className="work-list">
      <h2>Твори</h2>
      {works.map((work, index) => (
        <WorkDetail key={index} work={work} />
      ))}
    </div>
  );
};
export default WorkList;