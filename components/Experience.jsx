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
            bulletPoints={['Designed and implemented a highly scalable, weighted priority queuing system with FIFO capabilities for Amazon’s internal notification platform using Java, resulting in a 95 % reduction in average wait time for high-severity items.', 'ADeveloped Lambda functions that interact efficiently with DynamoDB, incorporating mechanisms to prevent race conditions and ensuring highly scalable, robust, and reliable notification delivery to downstream clients.', 'chieved 99% unit test coverage using JUnit and Mockito, further supported by extensive integration and load tests.', 'Created 25+ CloudWatch dashboards to monitor summary statistics, and set up alarms for issue detection.', 'Architected and automated the provisioning of newly added AWS resources such as SQS, Lambda, DynamoDB, and CloudWatch using AWS CDK in TypeScript for reliable and repeatable deployments']}
          />
          <ExperienceItem
            title='Software Enginner R&D Intern @ Huawei'
            location='Markham, ON'
            timePeriod='Jan 2023 - May 2023'
            bulletPoints={['Researched and developed a storage engine using C++ for a serverless and fully scalable distributed database system.', 'Parallelized read operations, achieving linear performance increase with respect to the number of worker threads utilized.', 'Implemented an Arrow connector and integrated Hive Metastore, enhancing metadata management capabilities.', 'Developed tailored Python scripts and conducted in-depth hash join performance benchmarking for Velox, ClickHouse and GaussDB, enabling precise system evaluation and pinpoint opportunities for optimization', 'Improved the hash build and probe time by 5% for numbers through the adoption of more efficient hashing algorithms.', 'Operated in a Linux based environment and crafted Shell scripts to optimize project compilation workflows.']}
          />
          <ExperienceItem
            title='Backend Developer Intern @ IBM'
            location='Markham, ON'
            timePeriod='May 2022 - Aug 2022'
            bulletPoints={['Contributed to backend microservices using Java and Maven focusing on AI/ML features in IBM Cognos Analytics.', 'Integrated Conversation AI Assistant into Microsoft Teams by building a chatbot using TypeScript and Node.', 'Trained NLP models and integrated newer versions of Core NLP package that eliminated all the critical vulnerabilities.', 'Automated manual test cases using JavaScript and Selenium, enhancing test efficiency and reliability.', 'Utilized Jenkins for CI/CD infrastructure to automate the process of loading the latest build and deploy.']}
          />
           <ExperienceItem
            title='Full Stack Developer Intern @ CAE'
            location='Richmond, BC'
            timePeriod='Jan 2022 - Apr 2022'
            bulletPoints={['Developed and maintained cloud-based SaaS solution for managing aviation training records using C#, ASP.NET and JavaScript for web application, and Xamarin.iOS for mobile application.', 'Rewrote the existing JavaScript and jQuery web app frontend with React and Bootstrap as a prototype.', 'Contributed extensively to developing many new features, including utilizing Azure Functions and Azure Service Bus to send user email notifications with data queried using Entity Framework Core, and added unit test coverage.', 'Refactored and improved the performance by 80% for updating all user’s data on mobile app with multi-threading.']}
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
