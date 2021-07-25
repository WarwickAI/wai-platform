import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Icon } from '@iconify/react';
import androidFilled from '@iconify/icons-ant-design/android-filled';
import { Card } from '@material-ui/core';
import UserTable from './UserTable';

const HeadingStyle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(15),
  fontWeight: theme.typography.fontWeightRegular
}));

const RootStyle = styled('div')(({ theme }) => ({
  width: '100%'
}));

const HeaderStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(2, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.info.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
    theme.palette.info.dark,
    0.24
  )} 100%)`
}));

export default function UserGroup() {
  return (
    <RootStyle>
      <Accordion
        // Removes the grey border on the top edge of the panel
        sx={{
          '&:before': {
            display: 'none'
          }
        }}
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <HeaderStyle>
            <IconWrapperStyle>
              <span role="img" aria-label="emoji">
                💫
              </span>
            </IconWrapperStyle>
            <Typography variant="h3">Project Carbon</Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
              4 Members
            </Typography>
          </HeaderStyle>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          '&:before': {
            display: 'none'
          }
        }}
      >
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <HeaderStyle>
            <HeadingStyle>Notifications</HeadingStyle>
          </HeaderStyle>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Here you can see all of the notifications that have been set up for this group. To add a
            new notification, click the + button.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          '&:before': {
            display: 'none'
          }
        }}
      >
        <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
          <HeaderStyle>
            <HeadingStyle>Members</HeadingStyle>
          </HeaderStyle>
        </AccordionSummary>
        <AccordionDetails>
          <UserTable />
        </AccordionDetails>
      </Accordion>
    </RootStyle>
  );
}
