import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Content = styled.a`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  transition: filter 0.5s;
  
  img {
    max-width: 2.5rem;
  }

  &:hover {
    filter: brightness(1.5);
  }
`;

const ContactItem = ({item}) => {
  return (
    <Content href={item.url} target="_blank" rel="noreferrer">
      <img src={`./icons/${item.icon}`} alt={item.name} title={item.name} />
      <Typography variant="body1">
        {item.content}
      </Typography>
    </Content>
  )
}

export default ContactItem;