import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import ProfilePhoto from '../images/mateusrios.jpeg';
import ContactItem from './ContactItem';

const Content = styled.div`
  background-color: var(--dark-blue);
  color: var(--gray);
  padding: 1.5rem;
  height: 100%;

  .imgContainer {
    width: 100%;
    text-align: center;
    
    img {
      width: 80%;
      border-radius: 999px;
      border: 0.5rem solid var(--white);
      box-shadow: 0 8px 16px 8px rgba( 0, 0, 0, 0.25 );
      margin-bottom: 2rem;
    }
  }
`;

const contacts = [
  {
    icon: "mail.png",
    name: "E-mail",
    content: "mattbrios@gmail.com",
    url: "mailto:mattbrios@gmail.com",
  },
  {
    icon: "wpp.png",
    name: "WhatsApp",
    content: "+55 15 99623-6179",
    url: `https://wa.me/5515996236179/?text=${encodeURI("Oi!!! Eu achei seu contato pelo seu CV. Podemos conversar?")}`,
  },
  {
    icon: "linkedin.png",
    name: "LinkedIn",
    content: "/mateus-branco-rios",
    url: "https://www.linkedin.com/in/mateus-branco-rios/",
  },
  {
    icon: "github.png",
    name: "GitHub",
    content: "/mattbrios",
    url: "https://github.com/mattbrios",
  },
  {
    icon: "behance.png",
    name: "Behance",
    content: "/mattbrios",
    url: "https://www.behance.net/mattbrios",
  },
  {
    icon: "facebook.png",
    name: "Facebook",
    content: "/mattbrios",
    url: "https://www.facebook.com/mattbrios",
  },
  {
    icon: "ig.png",
    name: "Instagram",
    content: "/mattbrios",
    url: "https://www.instagram.com/mattbrios/",
  },
  {
    icon: "site.png",
    name: "Portfólio",
    content: "mateusrios.dev.br",
    url: "https://mateusrios.dev.br",
  },
];

const SideBar = () => {
  return (
    <Content>
      <div className="imgContainer">
        <img src={ProfilePhoto} alt="Foto Mateus Rios" />
      </div>
      <Typography component="h4" variant="body2" className="white-text bold-text upper" gutterBottom>
        Contatos
      </Typography>
      <>
        {contacts.map((item, index) => (
          <ContactItem item={item} key={`contact${index}`} />
        ))}
      </>
      <Typography component="h4" variant="body2" className="white-text bold-text upper" gutterBottom>
        Hard Skills
      </Typography>
      <Typography component="h4" variant="body2" className="white-text bold-text upper" gutterBottom>
        Soft Skills
      </Typography>
    </Content>
  )
}

export default SideBar;