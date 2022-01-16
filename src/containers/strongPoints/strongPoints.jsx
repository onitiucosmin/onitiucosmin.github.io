import React from 'react';
import Feature from '../../components/feature/Feature';
import './strongPoints.css';

const StrongPoints = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Let me present myself" text="Aerospace Engineer turned Developer. Life is wierd sometimes, but also fun, really fun. Let me tell you a bit of what qualities represent me best and where they came from. I can talk and talk but i'll keep it short." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">What do i bring to the table?</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Perseverance" text="I was often told that i'm a hard-headed person when it comes to my objectives. Take for example this passsion of mine, called programming. I knew nothing about it not too long ago. But what do we call a sleepless, focused, machine-like man? Crazy... ah? Perseverent, that is the word!" />
      <Feature title="Strive for improvement" text="Upgrades, people, upgrades. You need them, i need them. In this ever-evolving world, you either upgrade your 'parts' or take the old-fashioned route. Luckily, today's world offers quite the spare shop, and I got the keys." />
      <Feature title="Tolerance" text="This strength came from my trading experience. The conclusion i came upon was that every business-related decision should come from a rational plane. It's just my belief, but, if you do manage to not get emotional over money, you're in a right state of mind for evolving." />
      <Feature title="An open mind" text="This one, the mother of all necessities in a team. Acceptance, Teamwork, Learning, all of them stem from this one thing. So what can i say about me? Well, i'll put a question forward. Would i be doing all this if I had my mind stuck in the usual loop?" />
      <Feature title="Time-oriented attitude" text="This one hits close to home for me. I think that as long as you value your time wisely, you are entitled to spend money to save time, as long as you create more value out of it." />
      <Feature title="A full battery" text="In case it wasn't clear, I'm not a passive person. I like doing everything in my power to accomplish my goals. They will not be running towards me, so I'll be sprinting towards them." />
    </div>
  </div>
);

export default StrongPoints;
