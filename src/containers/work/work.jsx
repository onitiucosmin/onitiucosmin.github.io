import React from 'react';
import FeatureWork from '../../components/featureWork/FeatureWork';

const workplaces = [
  {
    title: 'Mthree Collaboration with Morgan Stanley',
    period: 'Period: June 2021 - Present',
    list: ['Cannot disclose present activity'],
  },
  {
    title: 'OSF Academy Internship (Node.js Project)',
    period: 'Period: May 2021',
    list: ['Short list of learned aspects:', 'JavaScript +HTML + CSS Basics, jQuery library, AJAX, Bootstrap, Node.js, Express, Mongo and REST APIs', 'Objective: Using given endpoints, create a dynamic ecommerce type website'],
  },
  {
    title: 'Financial Consultant at OVB Allfinanz',
    period: 'Period: October 2020 - May 2021',
    list: [
      'Identifying sales opportunities for all the products and services of OVB Romania, oriented towards individuals',
      'Offering a consultancy to the client, concerning their main objectives and needs and advising for a specific financial tool',
      'Increasing the client portofolio and the volume of business together with a direct sales team',
      'Collecting information and documentation related to the products offered',
      'Maintaining a close connection with the clients throughout the whole collaboration',
      'Participation in different social projects and activities',
      'Participation in professional and personal development courses'],
  },
  {
    title: 'Design Engineer at Multimetal Technologies',
    period: 'Period: November 2020 - April 2021',
    list: [
      'Creating the conceptual design, the preliminary design and the prototype for different metal structures and/or equipment',
      'Coordinating the existing teams of production and organizing them by efficiency and procedure',
      'Optimization of projects, FEM and CFD analysis for a safety scope, improvement of costs and used material',
      'Efficient communication within the workforce to speed up the processes',
      'Creating technical drawings in SolidWorks and AutoCAD in an organized manner',
      'Organizing the projects and innovating the existing systems',
    ],
  },
  {
    title: 'Siemens Internship (C++ Focused)',
    period: 'Period: March 2019 - May 2019',
    list: [
      'Working together with a task-force team to creeate a control-access system',
      'Using a set of developing tools including Microsoft Visual Studio (Using C++)',
      'Creating an virtual interface using a cross-platform software (Qt)',
      'Focusing on Object Oriented Programming',
      'Creating and maintaining the connection between the main program and a database made with MySQL',
      'Porting the application on a tablet for ease of use and security reasons',
    ],
  },
  {
    title: 'University: Universitatea Transilvania Brasov, Aerospace Engineering',
    period: 'Period: October 2016 - June 2020',
    list: [
      'Bachelor\'s Thesis - Software and hardware design of a rescue drone',
      'The thesis was offered the support of the university through project funding',
      'Creating and using simulating the networking of the drone using network tools (OPNET)',
      'Programming the active components of the drone and control module (NodeMCU) using coding languages (Arduino)',
      'Designing, analyzing, testing and 3D printing original components, including a tested aerodynamical case (using SolidWorks, Ansys, AAA, etc.)',
      'Testing the created hexacopter in different conditions and loads',
    ],
  },
];

const Work = () => (
  <div className="gpt3__possibility section__padding" id="possibilitywork">
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">My studies and work experiences</h1>
      <div className="row">
        {workplaces.map((item, index) => (
          <div className="col-lg-6 col-sm-12">
            <FeatureWork title={item.title} period={item.period} list={item.list} key={item.title + index} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Work;
