import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { Title } from '../components/title';
import Img from 'gatsby-image';
import './about.css';
import { Content } from '../components/content';

const AboutPage: React.FC = () => {
  const images = useStaticQuery(graphql`
    query {
      main: file(relativePath: { eq: "main.jpg" }) {
        data: childImageSharp {
          fluid(maxWidth: 500, quality: 60) {
            aspectRatio
            src
            srcSet
            base64
          }
        }
      }
      dinosaur: file(relativePath: { eq: "dinosaur.jpg" }) {
        data: childImageSharp {
          fluid(maxWidth: 500, quality: 60) {
            aspectRatio
            src
            srcSet
            base64
          }
        }
      }
      wedding: file(relativePath: { eq: "wedding.jpg" }) {
        data: childImageSharp {
          fluid(maxWidth: 500, quality: 60) {
            aspectRatio
            src
            srcSet
            base64
          }
        }
      }
      boeing: file(relativePath: { eq: "boeing.jpg" }) {
        data: childImageSharp {
          fluid(maxWidth: 500, quality: 65) {
            aspectRatio
            src
            srcSet
            base64
          }
        }
      }
      giraffe: file(relativePath: { eq: "giraffe.jpg" }) {
        data: childImageSharp {
          fluid(maxWidth: 500, quality: 60) {
            aspectRatio
            src
            srcSet
            base64
          }
        }
      }
      sochi: file(relativePath: { eq: "sochi.jpg" }) {
        data: childImageSharp {
          fluid(maxWidth: 500, quality: 60) {
            aspectRatio
            src
            srcSet
            base64
          }
        }
      }
      waves: file(relativePath: { eq: "waves.jpg" }) {
        data: childImageSharp {
          fluid(maxWidth: 500, quality: 60) {
            aspectRatio
            src
            srcSet
            base64
          }
        }
      }
    }
  `);

  return (
    <>
      <Title level={1} className='content__row'>
        A little bit about me...
      </Title>
      <Img className='main-photo' fluid={images.main.data.fluid} />
      <div className='main'>
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
        <p>I have experience in industrial web development for about 5 years.</p>
        <p>
          However, my real experience is still more. I started creating websites in 2002. It was the time where existed Internet Explorer 6
          and developers using tables for markup layout.
        </p>
      </div>
      <p className='content__row'>
        I have a full-stack development background. This experience gave me an understanding of how entire web-application works.
        Additionally, I worked on both sides: backend and frontend. It helped me with the choice of specialization. I have felt work with
        interfaces is closer to me.
      </p>
      <div className='quality'>
        <p>
          High quality is a main priority in my work. I prefer engineering solutions and hate it when people write code thoughtlessly. I
          enjoy writing clean code and designing application architecture. I also like reading the other developers' code. It broadens my
          ranges. Read more about my approach to work on the <Link to='/hire-me'>hire me</Link> page.
        </p>
      </div>
      <p className='content__row'>
        I'm a mentor and help junior developers adapt to this profession. I also help to more experienced developers.
      </p>
      <p className='content__row content__row_remark'>
        I was a mentor at the programming by JavaScript championship in 2017. Besides, I&nbsp;taught a course on web design for school
        children.
      </p>
      <Content className='personal' as='section'>
        <Title level={2} visuallyHidden>
          Personal information
        </Title>
        <div className='personal-info'>
          <p>
            I spend my free time with my beloved family. I'm married, and I have a daughter, she is my little princess. We enjoy{' '}
            <Link to='/travels/'>traveling</Link>.
          </p>
          <p>
            I'm jolly man. I like to read paper books and hate digital books. I also enjoy walking because we live in a cityy that is more
            than 1000 years old. Our city is very beautiful.
          </p>
          <section>
            <Title level={2}>A few random facts about me</Title>
            <ul>
              <li>I was born in utmost North (Arkhangelsk)</li>
              <li>I know a little Hebrew and will continue to study it in the future</li>
              <li>I have Jewish roots and study Jewish history, history of modern state of Israel, Judaism</li>
              <li>
                I'm interested in civil aviation and a lot of reading and watching about that. I flew on full flight simulator Boeing 737 NG
                in&nbsp;2019. It was my dream.
              </li>
            </ul>
          </section>
        </div>
        <Img className='dinosaur-photo' fluid={images.dinosaur.data.fluid} />
      </Content>
      <Content className='photo-gallery' as='section'>
        <Title level={2} visuallyHidden>
          Photo
        </Title>
        <Img className='photo photo1' fluid={images.wedding.data.fluid} />
        <Img className='photo photo2' fluid={images.sochi.data.fluid} />
        <Img className='photo photo3' fluid={images.waves.data.fluid} />
        <Img className='photo photo4' fluid={images.giraffe.data.fluid} />
        <Img className='photo photo5' fluid={images.boeing.data.fluid} />
      </Content>
    </>
  );
};

export default AboutPage;
