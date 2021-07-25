import { Box, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  padding: 2rem 1.5rem;
  background-color: var(--background);

  hr {
    border: none;
    border-top: 0.5rem solid var(--gray);
    margin: 1.5rem 0;
    max-width: 120px;
  }
`;

const MainContent = () => {
  return (
    <MainContainer>
      <Typography variant="h4" component="h1" className="dark-text" >
        Mateus Branco Rios
      </Typography>
      <Typography variant="body1" className="bold-text blue-text upper" gutterBottom>
        Front-end dev &nbsp; | &nbsp; UX/UI Designer
      </Typography>
      <hr />
      <Typography variant="body1" className="bold-text blue-text upper" gutterBottom>
        Perfil Profissional
      </Typography>
      <Typography variant="body1" component="p" className="dark-text" gutterBottom>
        Hoje atuo como programador Front-end por formação e paixão, UI/UX Designer por experiência e oportunidade e editor de vídeo por ocasião. Já programei em mais de 6 linguagens e já trabalhei como Gerente de Projetos e Gerente Técnico em desenvolvimento de software usando a metodologia Scrum.
      </Typography>
      <Typography variant="body1" component="p" className="dark-text" gutterBottom>
        Sou um cara que ama desafios que absorvam conhecimento. Gosto do senso analítico, então procuro sempre levantar o cenário mais abrangente possível para uma tomada de decisão mais acertada, seja em design de experiência ou tecnologia aplicada.
      </Typography>

      <Box mt={4} />

      <Typography variant="body1" className="bold-text blue-text upper" gutterBottom>
        Experiência Profissional
      </Typography>
      <Typography variant="body1" className="bold-text dark-text upper">
        Programador Front-end &nbsp; | &nbsp; UX/UI Designer &nbsp; | &nbsp; Edição de vídeo
      </Typography>
      <Typography variant="body2" className="bold-text dark-text upper">
        Impacting group - Beeleads
      </Typography>
      <Typography variant="body2" className="bold-text blue-text upper" gutterBottom>
        07/2018 - presente (100% Remoto)
      </Typography>
      <Typography variant="body1" className="dark-text">
        Programador Front-end, UI/UX Designer e nas horas vagas, editor de vídeo. Responsável por desenvolver interfaces do usuário, baseado na sua usabilidade, geralmente utilizando Figma, Photoshop e/ou Illustrator. Responsável também por programar a parte do Front-end, inclusive meus próprios layouts, geralmente usando ReactJS com Material UI ou então JQuery e Bootstrap. Ah! Também sou responsável por algumas edições rápidas de vídeos tipo "youtuber", desenvolvendo um intro e end, cortes, aplicação de alguns efeitos, trilhas de fundo e por aí vai...
      </Typography>

      <Box mt={2} />

      <Typography variant="body1" className="bold-text dark-text upper">
        Freelancer
      </Typography>
      <Typography variant="body2" className="bold-text blue-text upper" gutterBottom>
        01/2014 - presente (100% Remoto)
      </Typography>
      <Typography variant="body1" className="dark-text" gutterBottom>
        Realizo trabalhos de design de interfaces, de desenvolvimento Front-end e edição de vídeo. Entre os diversos trabalhos que fiz como Freelancer, já desenvolvi identidades visuais, artes para redes sociais, UI para sites e mobile apps, melhoria de usabilidade em app de clientes, apresentações comerciais, edição de vídeo-aulas e, claro, desenvolvimento de aplicações web usando ReactJS ou JQuery e Bootstrap.
      </Typography>

      <Box mt={2} />

      <Typography variant="body1" className="bold-text dark-text upper">
        Savoir Tecnologia
      </Typography>
      <Typography variant="body2" className="bold-text dark-text upper">
        CTO &nbsp; | &nbsp; UX/UI Designer
      </Typography>
      <Typography variant="body2" className="bold-text blue-text upper">
        10/2014 - 06/2018 (Itajubá / MG)
      </Typography>
      <Typography variant="body2" className="bold-text dark-text upper">
        Gerente de Projetos
      </Typography>
      <Typography variant="body2" className="bold-text blue-text upper">
        06/2013 - 03/2014 (São Paulo / SP)
      </Typography>
      <Typography variant="body2" className="bold-text dark-text upper">
        Team Leader e AS3 Dev
      </Typography>
      <Typography variant="body2" className="bold-text blue-text upper" gutterBottom>
        04/2010 - 05/2013 (Itajubá / MG)
      </Typography>
      <Typography variant="body1" className="dark-text" gutterBottom>
        Comecei como estagiário e fui evoluindo junto com a empresa. Inicialmente programava em AS3 (Flash), transitei por algumas outras linguagens e coordenei algumas squads de desenvolvimento. Fiz uma experiência em gestão de projetos em São Paulo e me firmei na gestão técnica de times de desenvolvimento basicamente usando PHP, HTML, CSS, JS e Angular. Durante esta gestão, surgiu a oportunidade de estudar sobre UX/UI design, suas boas práticas e me especializei nesta área dentro da empresa.
      </Typography>

      <Box mt={4} />
      
      <Typography variant="body1" className="bold-text blue-text upper" gutterBottom>
        Formação Acadêmica
      </Typography>
      <Typography variant="body1" className="bold-text dark-text upper">
        Centro Universitário de Itajubá - FEPI
      </Typography>
      <Typography variant="body2" className="bold-text blue-text upper">
        MBA em Gerenciamento de Projetos - PMI (2013 -2015)
      </Typography>
      <Typography variant="body2" className="bold-text blue-text upper">
        Sistemas de Informação (2008 - 2011)
      </Typography>
    </MainContainer>
  )
}

export default MainContent;