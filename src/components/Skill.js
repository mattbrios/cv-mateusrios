import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.25rem 0;

  .skill-name {
    margin-left: 0.3rem;
  }

  .dot {
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }

  .ranking-dot {
    background-color: var(--gray);
  }
  .empty-dot {
    border: 1px solid var(--gray);
  }
`;

const Skill = ({data}) => {
  const name = data.name;
  const ranking = [];
  const maxRanking = 5;
  for( let i = 0; i < maxRanking; i++ ) {
    ranking.push( i < data.ranking );
  }

  return (
    <SkillContainer>
      { ranking.map((checkSkill) => (
        <div className={`dot ${checkSkill ? 'ranking-dot' : 'empty-dot'}`}></div>
      ))}
      <Typography variant="body1" className="skill-name">
        {name}
      </Typography>
    </SkillContainer>
  )
}

export default Skill;