import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Icon } from '@iconify/react';
import androidFilled from '@iconify/icons-ant-design/android-filled';
import { Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const RootStyle = styled(Card)(({ theme }) => ({
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
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
    theme.palette.info.dark,
    0.24
  )} 100%)`
}));

export default function UserGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <RootStyle>
            <IconWrapperStyle>
              <Icon icon={androidFilled} width={24} height={24} />
            </IconWrapperStyle>
            <Typography variant="h3">Project Carbon</Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
              4 Members
            </Typography>
          </RootStyle>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <RootStyle>
            <Typography className={classes.heading}>Notifications</Typography>
          </RootStyle>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Here you can see all of the notifications that have been set up for this group. To add a
            new notification, click the + button.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
          <RootStyle>
            <Typography className={classes.heading}>Members</Typography>
          </RootStyle>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Here are all of the members that have signed up to this group.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
