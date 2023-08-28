import React from 'react';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  return (
    <div id='experience' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h2 className='py-4 tracking-widest uppercase text-[#5651e5]'>
          Experience
        </h2>
        <div className='grid md:grid-cols-1 gap-8'>
          <ExperienceItem
            title='Software Development Engineer Intern @ Amazon'
            location='Vancouver, BC'
            timePeriod='May 2023 - Sep 2023'
            bulletPoints={['Designed and implemented a highly scalable weighted priority queuing mechanism with FIFO for internal notification system using Java, achieving a 95% reduction in wait time for high-severity items on average in production.', 'Architected new AWS CDK stacks infrastructure for the project’s CloudFormation setup using TypeScript.', 'Crafted a DAO from scratch for DynamoDB, incorporating enhanced settings to ensure optimal project execution.', 'Implemented unit tests for Lambda functions achieving 99% coverage, complemented by integration and load tests.', 'Created CloudWatch dashboards to monitor summary statistics, additionally setting up alarms for issue detection.', 'Expanded the project scope significantly and completed deliverables ahead of the stipulated timeline by 2 weeks.']}
          />
          <ExperienceItem
            title='Software Enginner R&D Intern @ Huawei'
            location='Markham, ON'
            timePeriod='Jan 2023 - May 2023'
            bulletPoints={['Researched and developed a storage engine using C++ for a serverless and fully scalable distributed database system.', 'Parallelized read operations, achieving linear performance increase with respect to the number of worker threads.', 'Implemented an Arrow connector to integrate Hive Metastore, enhancing metadata management and interoperability.', 'Developed tailored Python scripts and conducted in-depth hash join performance benchmarking for Velox, ClickHouse and GaussDB, enabling precise system evaluation and pinpoint opportunities for optimization.', 'Improved the hash build and probe time by 5% for numbers through the adoption of more efficient hash functions.', 'Operated within a Linux based environment and crafted Shell scripts for effective project compilation.']}
          />
          <ExperienceItem
            title='Backend Developer Intern @ IBM'
            location='Markham, ON'
            timePeriod='May 2022 - Aug 2022'
            bulletPoints={['Contributed to backend microservices using Java and Maven focusing on AI/ML features in IBM Cognos Analytics.', 'Integrated Conversation AI Assistant into Microsoft Teams by building a chatbot using TypeScript and Node.', 'Trained NLP models and integrated newer versions of Core NLP package that eliminated all the critical vulnerabilities.', 'Improved and maintained the visualization recommendation system, and created JUnit tests to ensure full test coverage.', 'Automated manual test cases using JavaScript and Selenium, reducing average test time by 3 minutes per case.', 'Utilized Jenkins for CI/CD infrastructure to automate the process of loading the latest build and deploy.']}
          />
           <ExperienceItem
            title='Full Stack Developer Intern @ CAE'
            location='Richmond, BC'
            timePeriod='Jan 2022 - Apr 2022'
            bulletPoints={['Developed and maintained cloud-based SaaS solution for managing aviation training records using C#, ASP.NET and JavaScript for web application, and Xamarin.iOS for mobile application.', 'Rewrote the existing JavaScript and jQuery web app frontend with React and Bootstrap as a prototype.', 'Contributed extensively to developing many new features, including utilizing Azure Functions and Azure Service Bus to send user email notifications with data queried using Entity Framework Core, and added unit test coverage.', 'Refactored and improved the performance by 80% for updating all user’s data on mobile app with multi-threading.', 'Collaborated and communicated with other members frequently, resulting in more efficient deliveries of sprint tasks, and actively took part in code review, demo new features.']}
          />
           <ExperienceItem
            title='Full Stack Developer Volunteer @ Campus Nutrition'
            location='Vancouver, BC'
            timePeriod='Feb 2022 - Apr 2022'
            bulletPoints={['Organized GraphQL models from Django backend and lead the investigation for refactoring the backend with Headless CMS solutions.', 'Developed multiple frontend features using React and Tailwind, and fetched data using GraphQL API.']}
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
