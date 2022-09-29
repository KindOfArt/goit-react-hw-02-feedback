import { SectionStyle, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <Title>{title}</Title>
      {children}
    </SectionStyle>
  );
};

export default Section;
