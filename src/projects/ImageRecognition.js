import React from 'react';
import imageRec1 from '../assets/ImageRecognition-1.png';
import imageRec2 from '../assets/ImageRecognition-2.png';
import imageRec3 from '../assets/ImageRecognition-3.png';
import imageRec4 from '../assets/ImageRecognition-4.png';
import imageRec5 from '../assets/ImageRecognition-5.png';

const imageRec = (
  <div>
    <h1 style={{ color: 'rgb(55, 51, 51)' }} className="text-center my-2">INTRODUCTION</h1>
    <p>
      Following the fullstack development course by Kalob Taulien, this was one of the short projects included in the course.<br /> Basically, it is a script that, using a pre-existing model and packages for Python,
      can detect in images different types of entities (People, Cars, Animals, Bikes, Traffic, Etc.). I will not add this project to my GitHub since i did not make any changes to the original so please,
      check this link to the original project created by Kalob :) https://github.com/KalobTaulien/image-detection
    </p>
    <h1 className="text-center my-2" style={{ color: 'rgb(55, 51, 51)' }}>
      Setting up the project
    </h1>
    <p style={{ lineHeight: '140%' }}>
      The hardest part of the project to put it straight, setting up the virtual enviroment (as to not install useless packages on your local python dev).<br />
      Libraries needed in this project are: Tensorflow (used in this manner for version pip install tensorflow==1.* for the correct version of the components)<br />
      ImageAi, OpenCv, Keras (You can find them in the requirments txt from the github project).<br />
      The model used for image recognizition was created by Olafenwa Moses and you can find it at this link: https://github.com/OlafenwaMoses/ImageAI/releases/download/1.0/resnet50_coco_best_v2.0.1.h5<br />
    </p>
    <img src={imageRec1} style={{ width: '50%', marginLeft: '25%' }} />
    <h1 className="text-center my-2" style={{ color: 'rgb(55, 51, 51)' }}>
      The code
    </h1>
    <p style={{ fontWeight: 'lighter', lineHeight: '140%' }}>
      The code itself is quite simple, it uses the given above dependencies and becomes a simple code itself. It imports the ObjectDetection main className from imageai<br />
      It sets up the current path, and loads the model downloaded before, then does the simple task of picking an image given as an argument, <br />
      and outputs a new image with the detection loaded. It also prints out the detection probabilities.
    </p>
    <img src={imageRec2} style={{ width: '50%', marginLeft: '25%' }} />
    <p style={{ fontWeight: 'lighter', lineHeight: '140%' }}>
      This is the whole program, thanks to the multiple libraries Python has, our job has become quite simple. This is the output a camera would see in the new image:
    </p>
    <img src={imageRec3} style={{ width: '50%', marginLeft: '25%' }} />
    <p style={{ fontWeight: 'lighter', lineHeight: '140%' }}>
      As a last funny test, let us look at a cat:
    </p>
    <img src={imageRec4} style={{ width: '50%', marginLeft: '25%' }} />
    <img src={imageRec5} style={{ width: '50%', marginLeft: '25%' }} />
    <h1 className="text-center my-2" style={{ color: 'rgb(55, 51, 51)' }}>
      Conclusions
    </h1>
    <p style={{ fontWeight: 'lighter', lineHeight: '140%' }}>
      This has opened my eyes a bit regarding the endless possibilities we have and how many have already been done in some form or the other by people and put into standalone project.
      <br />Python has also been really simple to learn, so probably more projects to come in the future!
    </p>
  </div>
);

export default imageRec;
