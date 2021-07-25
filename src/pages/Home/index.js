import React from 'react';
import { Container, Grid } from '@material-ui/core';

import SideBar from '../../components/SideBar';
import MainContent from '../../components/MainContent';

const Home = () => {
  return (
    <Container>
      <Grid container spacing={0}>
        <Grid item sm={3} xs={12}>
          <aside style={{ height: "100%" }}>
            <SideBar />
          </aside>
        </Grid>
        <Grid item sm={9} xs={12}>
          <main style={{ height: "100%" }}>
            <MainContent />
          </main>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home;