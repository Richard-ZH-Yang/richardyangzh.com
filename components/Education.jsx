import React from 'react';
import ExperienceItem from './ExperienceItem';

const Education = () => {
  return (
    <div id='education' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h2 className='py-4 tracking-widest uppercase text-[#5651e5]'>
          Education
        </h2>
        <div className='grid md:grid-cols-1 gap-8'>
          <ExperienceItem
            title='B.Sc. major in Computer Science (Co-op), minor in Data Science @ University of British Columbia'
            location='Vancouver, BC'
            timePeriod='Sep 2020 - May 2024'
            bulletPoints={['Received Trek Excellence Scholarship (top 5%), and Faculty of Science International Student Scholarship.', 'Coursework: Software Engineering (97%), Computer Systems (92%), Data Structures and Algorithms (94%)', 'GPA: 3.9/4.0 (88%)']}
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
