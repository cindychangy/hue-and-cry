import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { SectionHeading } from 'components/molecules/sectionHeading/SectionHeading';
import { Page } from 'components/templates';
import { timelineData } from './TimelineData';

import * as S from './HighwayOfTears.styles';

export const HighwayOfTearsHome = () => {

  const timelineList = timelineData.map((data) => (
    <S.TimelineCase key={data.name}>
      <S.CaseMeta>
        <S.TimelineYear>{data.year}</S.TimelineYear>
        <S.TimelineLocation>{data.location}</S.TimelineLocation>
      </S.CaseMeta>
      <S.TimelineSeparatorStyled>
        <TimelineDot />
        <TimelineConnector />
      </S.TimelineSeparatorStyled>
      <TimelineContent>
        <S.TimelineBio>
          <Box>
            <S.TimelineName>{data.name}</S.TimelineName>
            <Typography>
              {data.blurb}
              {!!data.link && <S.TimelineLink href={data.link}> Read full story</S.TimelineLink>}
            </Typography>
          </Box>
          {data.photo && 
            <S.ImageContainer 
            sx={{ 
              background: `url(${data.photo})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center' 
            }}>
            </S.ImageContainer>
          }
        </S.TimelineBio>
      </TimelineContent>
    </S.TimelineCase>
  ));

  return (
    <Page>
      <SectionHeading />
      <Box mb={4}/>
      <Grid container>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={12} lg={4}>
          <S.Title>Highway of Tears</S.Title>
          <S.BoxGray>
            <S.BoxHeader>
              The Highway of Tears is an isolated 725-kilometer stretch of Highway 16 between Prince George and Prince Rupert in British Columbia, Canada.
            </S.BoxHeader>
            <S.ParagraphStyled>
              It has been the location of numerous murders and disappearances beginning as early as the late 60's. The majority of the victims belong to Indiginous communities. Poverty rates in this area are high and hitchhiking is often the only way for many to travel to work, school, visit family, or seek medical treatment. 
            </S.ParagraphStyled>
            <S.ParagraphStyled>
              Historically, Indigenous communities have been plagued by systematic racism and negligance from authorities, which is reflected in how many of these cases were handled. It is a widely believed that these cases will never be solved, but the families of the victims that were affected, and the victims themselves, deserve to have their stories heard and remembered.
            </S.ParagraphStyled>
          </S.BoxGray>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Timeline>
            {timelineList}
          </Timeline>
        </Grid>
      </Grid>
    </Page>
  );
};
