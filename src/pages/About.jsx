import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const Title = styled(motion.h2)`
  font-size: ${props => props.theme.typography.h2.fontSize};
  font-weight: ${props => props.theme.typography.h2.fontWeight};
  color: ${props => props.theme.colors.text};
  margin-bottom: 2rem;
`;

const Content = styled(motion.div)`
  font-size: ${props => props.theme.typography.body.fontSize};
  line-height: ${props => props.theme.typography.body.lineHeight};
  color: ${props => props.theme.colors.text};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCard = styled(motion.div)`
  padding: 1.5rem;
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 0.5rem;
  text-align: center;
`;

const About = () => {
  return (
    <AboutContainer>
      <Section>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </Title>
        <Content
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            I am a passionate developer with a strong foundation in web development.
            I love creating beautiful and functional web applications that provide
            great user experiences.
          </p>
        </Content>
      </Section>

      <Section>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </Title>
        <SkillsGrid>
          <SkillCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML, CSS</p>
          </SkillCard>
          <SkillCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>Backend</h3>
            <p>Node.js, Express, MongoDB</p>
          </SkillCard>
          <SkillCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>Tools</h3>
            <p>Git, VS Code, Docker</p>
          </SkillCard>
        </SkillsGrid>
      </Section>
    </AboutContainer>
  );
};

export default About; 