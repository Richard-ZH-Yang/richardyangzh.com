import React from 'react';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Experience
        </p>
        <h2 className='py-4'>Where I&apos;ve worked</h2>
        <div className='grid md:grid-cols-1 gap-8'>
          <ExperienceItem
            title='Backend Developer Intern @ IBM'
            location='Markham, ON'
            timePeriod='May 2022 - Aug 2022'
            bulletPoints={['Contributed to backend microservices using Java and Maven focusing on AI/ML features in IBM Cognos Analytics.', 'Integrated Cognos Conversation Assistant into Microsoft Teams by building a chatbot using TypeScript and Node.', 'Trained NLP models and integrated newer versions of Core NLP package that eliminated all the critical vulnerabilities.', 'Improved and maintained the visualization recommender service, and created JUnit tests to ensure full test coverage.', 'Created automation test cases based on existing manual test cases using JavaScript and Selenium.', 'Utilized Jenkins for CI/CD to automate the process of loading the latest build and investigating build failures.']}
          />
           <ExperienceItem
            title='Full Stack Developer Intern @ CAE'
            location='Richmond, BC'
            timePeriod='Jan 2022 - Apr 2022'
            bulletPoints={['Developed and maintained cloud-based SaaS solution for managing aviation training records using C#, ASP.NET and JavaScript for web application, and Xamarin.iOS for mobile application.', 'Rewrote the existing JavaScript and jQuery web app frontend with React and Bootstrap as a prototype.', 'Contributed extensively to developing many new features, including utilizing Azure Functions and Azure Service Bus to send user email notifications with data queried using Entity Framework Core, and added unit test coverage.', 'Refactored and improved the performance by 80% for updating all user’s data on mobile app with multi-threading.', 'Created automation test cases based on existing manual test cases using JavaScript and Selenium.', 'Collaborated and communicated with other members frequently, resulting in more efficient deliveries of sprint tasks, and actively took part in code review, demo new features.']}
          />
           <ExperienceItem
            title='Full Stack Developer Volunteer @ Campus Nutrition'
            location='Vancouver, BC'
            timePeriod='Feb 2022 - Apr 2022'
            bulletPoints={['Developed multiple frontend features using React and Tailwind, and fetched data using GraphQL API.', 'Organized GraphQL models from Django backend and lead the investigation for refactoring the backend with Headless CMS solutions.']}
          />
           <ExperienceItem
            title='Undergraduate Teaching Assistant @ UBC'
            location='Vancouver, BC'
            timePeriod='Jan 2021 - Apr 2022'
            bulletPoints={['Taught various Computer Science, Data Science and Statistics courses, including an upper-level Software Engineering course that instructed specification, design, validation, evolution and construction of modern software systems.', 'Received perfect evaluation scores from 100+ students in the most recent semester in categories including teaching ability, preparedness, and communication.', 'Taught large groups of students, resolved conflicts in project groups, and relayed student needs to professors.']}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
