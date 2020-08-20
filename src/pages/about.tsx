import { Link } from 'gatsby';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <>
      <h1>A little bit about me</h1>
      <p>
        Hi! My name is Max (Max being short for <i>Maksim</i>)
      </p>
      <p>
        I'm a senior frontend engineer, based in Russia. My work lies at the intersection of programming and design. I create and improve
        user interfaces for web applications that used thousands of users.
      </p>
      <p>
        I think the modern Web is an excellent platform for applications. Users from anywhere in the World can use cloud services from
        different devices (mobile, laptop, PC, even from a TV). Besides, web applications update immediately.
      </p>
      <p>
        I have a degree in Economics from <i>Moscow Business Academy under the Government of Moscow</i>, but every things I know of web
        development I have studied on my own.
      </p>
      <p>I have experience in industrial web development for about 5,5 years.</p>
      <div>
        <p>
          However, my real experience is still more. I started creating websites in 2002. It was the time where existed Internet Explorer 6
          and developers using tables for markup layout.
        </p>
      </div>
      <p>
        I have a full-stack development background. This experience gave me an understanding of how entire web-application works.
        Additionally, I worked on both sides: backend and frontend. It helped me with the choice of specialization. I have felt work with
        interfaces is closer to me.
      </p>
      <p>
        High quality is a main priority in my work. I like engineering solutions and hate it when people write code thoughtlessly. I enjoy
        writing clean code and designing application architecture. I also like reading the other developers' code. It broadens my ranges.
        Read more about my approach to work on the <Link to='/hire-me'>Hire me</Link> page.
      </p>
      <p>I'm a mentor and help junior developers adapt to this profession. I also help evolve to more experienced developers.</p>
      <div>
        <p>I was a mentor at the programming by JavaScript championship in 2017.</p>
      </div>
      <p>I spend my free time with my beloved family. I'm married, and I have a daughter, she is my little princess.</p>

      <h2>A few random facts about me</h2>
      <ul>
        <li>I was born in utmost North (Arkhangelsk)</li>
        <li>I know a little Hebrew and will continue to study it in the future</li>
        <li>I have Jewish roots and study Jewish history, history of modern state of Israel, Judaism</li>
        <li>
          I'm interested in civil aviation and a lot of reading and watching about that. I flew on full flight simulator Boeing 737 NG in
          2019. It was my dream.
        </li>
      </ul>
    </>
  );
};

export default AboutPage;
