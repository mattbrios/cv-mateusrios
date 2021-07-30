import { Hidden, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import ProfilePhoto from '../images/mateusrios.jpg';
import ContactItem from './ContactItem';
import Skill from './Skill';

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
      max-width: 200px;
      border-radius: 999px;
      border: 0.5rem solid var(--white);
      box-shadow: 0 8px 16px 8px rgba( 0, 0, 0, 0.25 );
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
    content: "Me chama no Whats",
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

const hardSkills = [
  {
    name: "HTML5, CSS3",
    ranking: 4
  },
  {
    name: "JavaScript",
    ranking: 4
  },
  {
    name: "ReactJS",
    ranking: 3
  },
  {
    name: "JQuery",
    ranking: 3
  },
  {
    name: "Bootstrap",
    ranking: 4
  },
  {
    name: "Material UI",
    ranking: 4
  },
  {
    name: "Git, Gitflow",
    ranking: 4
  },
  {
    name: "UX/UI Design",
    ranking: 4
  },
  {
    name: "Figma",
    ranking: 4
  },
  {
    name: "Adobe Photoshop",
    ranking: 4
  },
  {
    name: "Adobe Illustrator",
    ranking: 3
  },
  {
    name: "Adobe Premiere Pro",
    ranking: 2
  },
  {
    name: "Docker",
    ranking: 1
  },
];

const softSkills = [
  {
    name: "Gerenciamento",
    ranking: 4
  },
  {
    name: "Comunicação",
    ranking: 5
  },
  {
    name: "Equipe 100% remota",
    ranking: 5
  },
  {
    name: "Inglês",
    ranking: 3
  },
  {
    name: "Auto-reciclagem",
    ranking: 5
  },
]

const SideBar = () => {
  return (
    <Content>
      <div className="imgContainer">
        <img src={ProfilePhoto} alt="Foto Mateus Rios" />
      </div>
      <Hidden smUp>
        <Typography variant="h4" component="h1" className="light-text spacing-before" >
          Mateus Branco Rios
        </Typography>
        <Typography variant="body1" className="bold-text blue-text upper" gutterBottom>
          Front-end dev &nbsp; | &nbsp; UX/UI Designer
        </Typography>
      </Hidden>
      <Typography component="h4" variant="body2" className="white-text bold-text upper spacing-before" gutterBottom>
        Contatos
      </Typography>
      <>
        {contacts.map((item, index) => (
          <ContactItem item={item} key={`contact${index}`} />
        ))}
      </>
      <Typography component="h4" variant="body2" className="white-text bold-text upper spacing-before" gutterBottom>
        Hard Skills
      </Typography>
      { hardSkills.map( ( hard, index ) => (
          <Skill data={hard} key={`HardSkill${index}`} />
      ))}
      <Typography component="h4" variant="body2" className="white-text bold-text upper spacing-before" gutterBottom>
        Soft Skills
      </Typography>
      { softSkills.map( ( soft, index ) => (
          <Skill data={soft} key={`SoftSkill${index}`} />
      ))}
    </Content>
  )
}

export default SideBar;