import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 300px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }

  ul.skills-list2 {

    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-sm);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-md);
        line-height: 12px;
      }
    }
  }
`;



const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Python', 'C++', 'SQL', ' Bash','Dart' ];
  const libs = ['TensorFlow','PyTorch', 'LangChain', 'Scikit-Learn','Pandas', 'Flutter', 'React'];
  const cloud= ['Amazon Web Services','FireBase']

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div> 
            <p>
            I'm Darshan, a grad student at <a href="https://www.usc.edu/" target="_blank">University of Southern California</a> majoring in Computer Science. My journey began with a degree in Computer Engineering from the <a href="https://mu.ac.in/" target="_blank">University of Mumbai</a>, where I developed a passion for building mobile apps with Flutter. My interest in machine learning, especially neural networks, took off during my research internship at <a href="https://www.tifr.res.in/" target="_blank">TIFR</a>. I've always been more drawn to solving real-world problems than sticking to just academic theories.
            </p>
            <p>
            Currently, at the <a href='https://inklab.usc.edu/' target="_blank" >INK Lab</a> at USC, I'm investigating how large language models function and the sensitivity at which they hallucinate. I'm excited about creating benchmarks to better evaluate these models.
            </p>
            <p>
            With a long-standing passion for software development and machine learning, I'm eager to make my mark in this field and contribute to its future.
            {' '}
            </p>

            <p>Here are the list of technical skills I have:</p>

            <ul className="skills-list2">
            <li>Languages 
              <ul className="skills-list">
                {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
              </ul>
            </li>
            <li>Libraries & Frameworks
              <ul className="skills-list">
                {libs && libs.map((libs, i) => <li key={i}>{libs}</li>)}
              </ul>
            </li>
            <li> Cloud Services & DevOps
              <ul className="skills-list">
                {cloud && cloud.map((cloud, i) => <li key={i}>{cloud}</li>)}
              </ul>
            </li>

          </ul>
          </div>


        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
