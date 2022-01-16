// eslint-disable-next-line
import { goldenLaurel, movieNext, wagtailRocket, osfAcademy, cppAlumni, imageRec } from './imports';
import { imageReco, mthreeAlumni, movieApp, osfProj, godMenu, wagtail } from './jsximports';

const devProjects = [
  {
    name: 'The God\'s Menu',
    description: 'My own personal diet planning/social web application',
    tags: ['React', 'Mongo', 'REST', 'Redux', 'Node'],
    htmlname: godMenu,
    image: goldenLaurel,
  },
  {
    name: 'Wagtail (Django CMS) for Python',
    description: 'Python project made during the FullStack Dev course from Udemy',
    tags: ['Python', 'Django', 'Wagtail'],
    htmlname: wagtail,
    image: wagtailRocket,
  },
  {
    name: 'Next.js Movie App',
    description: 'React and Next.js App developed during Next.js Udemy course',
    tags: ['React', 'Next.js', 'Front-End'],
    htmlname: movieApp,
    image: movieNext,
  },
  {
    name: 'OSF Digital Academy Project',
    description: 'Project made for the Training Program offered by OSF Digital',
    tags: ['Full-Stack', 'Node.js'],
    htmlname: osfProj,
    image: osfAcademy,
  },
  {
    name: 'MThree C++ Training',
    description: 'Training Program for the role of C++ Dev at Morgan Stanley',
    tags: ['Back-End', 'C++', 'Linux', 'SQL'],
    htmlname: mthreeAlumni,
    image: cppAlumni,
  },
  {
    name: 'Python Image Recognition',
    description: 'Short Progam made during the FullStack Dev course from Udemy',
    tags: ['Back-End', 'Python'],
    htmlname: imageReco,
    image: imageRec,
  },
];

export default devProjects;
