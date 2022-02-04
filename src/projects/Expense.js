import React from 'react';
import e1 from '../assets/ExpenseVoice-1.PNG';

const expense = (
  <div>
    <h1 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      <a href="https://cosmin-voice-powered-expense-tracker.netlify.app/" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'rgb(21, 44, 61)' }}>
        INTRODUCTION (Link to actual site)
      </a>
    </h1>
    <h2 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      <a href="https://github.com/Javascript-Projects-Cosmin/Voice-powered-Exepense-Tracker/blob/main/README.md" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'rgb(21, 44, 61)' }}>
        GitHub Link
      </a>
    </h2>
    <p>
      This is the first project in my track of discovering new APIs and new packages that i can make use of in my future projects. This time, it was Speechly, a voice-oriented package,
      that has it s own machine learning model, which you can program at the beginning for specific inputs. Also has it s own UI elements, which made it really easy to use.
      I would also mention MUI here since it is the first time i properly interacted with it, and made use of it s styles and animations. And as the final mention, hooks. I finally
      made use of the useContext hook instead of Redux and it made my life a bit easier than i expected and i also created a simple custom hook.
    </p>
    <img src={e1} style={{ width: '100%', marginTop: '1rem' }} />
  </div>
);

export default expense;
