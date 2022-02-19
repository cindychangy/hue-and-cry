import React from 'react';

import Box from '@mui/material/Box';
import { Header } from 'components/organisms/header/Header';
import { Footer } from 'components/organisms/footer/Footer';

import * as S from './About.styles';

export const About = () => {

  const backgroundImage = {
    backgroundImage: 'url("https://wordpress.thehueandcry.com/wp-content/uploads/thumbprint-banner.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <>
    <Header/>
      <S.AboutHero style={backgroundImage}/>
      <Box maxWidth={900} m="auto" mb={14} px={2}>
        <S.Title variant="h1">Hue and Cry</S.Title>
        <Box mt={2}>
          <S.Title variant="h2" gutterBottom>
            a \ The pursuit of a suspect or a written proclamation for the capture of a suspect.
          </S.Title>

          <S.Title variant="h2">
            b \ A loud outcry formerly used in the pursuit of one who is suspected of a crime.
          </S.Title>

          <S.Cite>Merriam Webster dictionary</S.Cite>

          <Box mt={6}/>

          <S.TextStyled>
            <strong>The mission</strong> is to bring awareness to cases of unsolved crimes against women and girls. Hue and Cry is a true crime blog-but you won't find stories of serial killers or any focus on the people that commit crimes here. The focus is on victims who have yet to see justice, those of unsolved crimes. Stories of both well-known and lesser-known cases, with a emphasis on crimes that are committed against women of color.
          </S.TextStyled>

          <S.TextStyled>
            Links and sources are provided at the end of each article so you can dig deeper and continue with your own search for the truth. The more people know the more likely something will be solved, and hopefully one day all of the victims in these stories will get the justice they deserve.
          </S.TextStyled>

          <S.TextStyled>
            Note: I am not a professional writer or journalist. Just a true crime obsessee who wanted to re-tell stories that I heard, read, watched, and couldn't stop thinking about. All my knowledge comes from articles, podcasts or shows cited at the bottom of each article.
          </S.TextStyled>

          <S.TextStyled>
            If you have any questions feel free to <S.LinkStyled href="mailto:hello@thehueandcry.com">contact me</S.LinkStyled>.
          </S.TextStyled>
        </Box>
      </Box>
      <Footer/>
    </>
  );
};
