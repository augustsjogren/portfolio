import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const BioImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Aggebagge_web.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      loading='eager'
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    />
  );
};

export default BioImage;
