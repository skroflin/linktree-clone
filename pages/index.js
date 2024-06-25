import React from 'react';
import Navbar from '../components/NavBar';
import ButtonWithQR from '../components/ButtonWithQR';
import { Container, Box, Typography } from '@mui/material';
import styles from '../styles/Home.module.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Navbar />
        <Box className={styles.mainContent}>
          <img src="../images/logo.webp" alt="Superteam Balkan Logo" className={styles.logo} />
          <Typography variant="h6" gutterBottom fontSize={'1.5rem'} fontStyle={'italic'} fontFamily={'Verdana, Trebuchet MS, sans-serif'}>
            Community of outstanding founders, developers, and other individuals working on Solana growth.
          </Typography>
          <Box className={styles.buttonsContainer}>
            <ButtonWithQR label="Website" link="https://blkn.superteam.fun/" />
            <ButtonWithQR label="Discord" link="https://discord.com/invite/WHU3GYSSPp" />
            <ButtonWithQR label="Twitter" link="https://twitter.com/SuperteamBLKN" />
            <ButtonWithQR label="LinkedIn" link="https://www.linkedin.com/company/superteam-balkan/   " />
            <ButtonWithQR label="Instagrants" link="https://earn.superteam.fun/grants/solana-foundation-balkan-grants/" />
            <ButtonWithQR label="Superteam Balkan Substack" link="https://superteambalkans.substack.com/" />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Home;