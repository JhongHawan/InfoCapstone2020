import React from 'react';
import { Grid, Box, Container } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import ReactCompareImage from 'react-compare-image';
import ContextCard from './ContextCard';
import VettingContext from './VettingContext';
import Hero from './Hero';
import Divider from './Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


import { useStyles } from './Styles';

function Myths() {
  const classes = useStyles();

  return (
    <div>
      <Box>
        {/* <Box>
          <Box style={{ textAlign: "center" }}> */}
        {/* <Box style={{ maxWidth: "800px", margin: "auto" }}> */}
        {/* <Box>
              <ReactCompareImage leftImage="refugee-edit.png" rightImage="immigrant-edit.png" />
            </Box> */}
        {/* </Box>
        </Box> */}

        {/* <Box className={classes.mythSectionColor}>
          <Box className={classes.subHeading}>
            <h1 className={classes.subHeadingTitle}>MYTHS</h1>
          </Box>
        </Box> */}
        <Hero 
          sectionTitle=
          "No one puts their children in a boat unless the water is safer than the land"
          cardTitle="WHY DOES IT MATTER?"
          cardSubtitle="Subtitle"
          cardBody="The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference."
        
        />
        <Box className={classes.homeTopSpace}>
          <Divider title="MYTH DEBUNK" />
        
        </Box>
        <Box className={classes.homeTopSpace}>
          <Divider title="FACT CHECK" />
          <Box className={classes.callToAction}>
            <h5>There are several myths that need to be debunked when it comes to refugees.</h5>
            <p>Bellow is a list of common misconceptions about topics concerning refugees.
            There is extreme danger in perpetuating false information especially when the lives of inncocent people relies on it. To learn more, click on each myth and debunk it.</p>
            <Grid container spacing={2}>
              <Grid item sm={4}>
                <ContextCard
                  mythTitle="Refugees are not vetted."
                  mythSummary=" This statement is entirely false. In fact refugees are the most vetted people in the world."
                  mythDetails="There is an extensive vetting process that usually takes up to two years. This process consists of an average of 18-20  different steps that refugees must go through to come into the US. Departments that are involved in this process include the FBI, Department of Homeland Security, the National Counterterrorism Center, and much more. Certain refugees like Syrians have a longer and more extensive process, and are the most vetted refugees in the world. Learn more about the details of the vetting process here."
                />
              </Grid>
              <Grid item sm={4}>
                <ContextCard
                  mythTitle="No other countries are taking refugees."
                  mythSummary=" In terms of Arab refugees, Muslim countries are taking the most burden of the refugee crisis."
                  mythDetails="However, it is undeniable that the US is more politically and economically stable than any of the Arab countries combined. Oppression exists in other Arab countries, the same oppression that forced refugees to leave their own countries in the first place. Additionally, several countries in Europe have welcomed refugees to the best of their ability. In 2019 Europe accepted 123, 920 refugees and have taken even more in past years. However, it is undeniable that the US has more means and resources to take in refugees, and if possible should continue to help to the best of their ability. "
                />
              </Grid>
              <Grid item sm={4}>
                <ContextCard
                  mythTitle="All the refugees that come are adult men."
                  mythSummary=" In 2018, a total of 11,099 female refugees, and 11,306 male refugees arrived in the United States."
                  mythDetails="Of the male refugees that arrived 5,448 were children, and of the female refugees 5,115 were children. Families never want to split up, that is never the first choice. However, if one family member is able to enter the US they will come and do what they can to bring the rest of their family to safety. These people are beyond desperate they are doing whatever they can for their freedom and for the security of their family. "
                />
              </Grid>
              <Grid item sm={4}>
                <ContextCard
                  mythTitle="All refugees are terrorists."
                  mythSummary=" Refugees are fleeing from violence and terrorism, they are the victims of this kind of opression back home."
                  mythDetails="When they flee to a host country they do so to find peace and to start new lives. Their lives are being threatened every day, that is why they are running away. This statement is ironic, and a hurtful generalization that often costs real people and families their lives. The extensive vetting process that the refugees go through makes sure to eliminate any viable threat of terrorism or violence. This process has been very successful so far, of the roughly three million refugees admitted since 1980, not one refugee has ever killed a single American in a terrorist attack."
                />
              </Grid>
              <Grid item sm={4}>
                <ContextCard
                  mythTitle="Why can't we just send them help back home?"
                  mythSummary=" This kind of help already exists. However, it is simply not enough."
                  mythDetails="Organizations like Catholic Relief Services (CRS), UNHCR, and the International Rescue Committee have provided help for countries like Greece, Jordan, Lebanon, Syria, and Iraq. This help includes food, shelter, education, and medical care. This is not enough. The level of oppression and violence that these refugees are experiencing goes beyond resources and virtual support. These people need to leave these countries and resettle so that they and their family members are not injured, imprisoned, or killed.  "
                />
              </Grid>
              <Grid item sm={4}>
                <ContextCard
                  mythTitle="The refugee crisis is over."
                  mythSummary=" This statement is simply false. There is still refugee crisis going on in thie world and it needs more attention."
                  mythDetails="When thinking about the refugee crisis we want to find a way to solve it, end it for good. Unfortunately this is not possible. Refugees flee their homes because threats on their life or their safety. Therefore, as long as wars continue people will continue to flee them. "
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Box className={classes.mythSectionColor, classes.heading1spacing}>
          <h5>There are several myths that need to be debunked when it comes to refugees.</h5>
          <p>Bellow is a list of common misconceptions about topics concerning refugees.
            There is extreme danger in perpetuating false information especially when the lives of inncocent people relies on it. To learn more, click on each myth and debunk it.</p>
          <Grid container spacing={2}>
            <Grid item sm={4}>
              <ContextCard
                mythTitle="MYTH #1: Refugees are not vetted."
                mythDetails="This statement is entirely false. In fact refugees are the most vetted people in the world. There is an extensive vetting process that usually takes up to two years. This process consists of an average of 18-20  different steps that refugees must go through to come into the US. Departments that are involved in this process include the FBI, Department of Homeland Security, the National Counterterrorism Center, and much more. Certain refugees like Syrians have a longer and more extensive process, and are the most vetted refugees in the world. Learn more about the details of the vetting process here."
              />
            </Grid>
            <Grid item sm={4}>
              <ContextCard
                mythTitle="MYTH #2: No other countries are taking refugees."
                mythDetails="Why should all the burden fall on the US? In terms of Arab refugees, Muslim countries are taking the most burden of the refugee crisis. However, it is undeniable that the US is more politically and economically stable than any of the Arab countries combined. Oppression exists in other Arab countries, the same oppression that forced refugees to leave their own countries in the first place. Additionally, several countries in Europe have welcomed refugees to the best of their ability. In 2019 Europe accepted 123, 920 refugees and have taken even more in past years. However, it is undeniable that the US has more means and resources to take in refugees, and if possible should continue to help to the best of their ability. "
              />
            </Grid>
            <Grid item sm={4}>
              <ContextCard
                mythTitle="MYTH #3: All the refugees that come are adult men."
                mythDetails="In 2018, a total of 11,099 female refugees, and 11,306 male refugees arrived in the United States. Of the male refugees that arrived 5,448 were children, and of the female refugees 5,115 were children. Families never want to split up, that is never the first choice. However, if one family member is able to enter the US they will come and do what they can to bring the rest of their family to safety. These people are beyond desperate they are doing whatever they can for their freedom and for the security of their family. "
              />
            </Grid>
            <Grid item sm={4}>
              <ContextCard
                mythTitle="MYTH #4: All refugees are terrorists with an agenda."
                mythDetails="Refugees are fleeing from violence and terrorism, they are the victims of this kind of opression back home. When they flee to a host country they do so to find peace and to start new lives. Their lives are being threatened every day, that is why they are running away. This statement is ironic, and a hurtful generalization that often costs real people and families their lives. The extensive vetting process that the refugees go through makes sure to eliminate any viable threat of terrorism or violence. This process has been very successful so far, of the roughly three million refugees admitted since 1980, not one refugee has ever killed a single American in a terrorist attack."
              />
            </Grid>
            <Grid item sm={4}>
              <ContextCard
                mythTitle="MYTH #5: Why can't we just send them help back home?"
                mythDetails="This kind of help already exists. Organizations like Catholic Relief Services (CRS), UNHCR, and the International Rescue Committee have provided help for countries like Greece, Jordan, Lebanon, Syria, and Iraq. This help includes food, shelter, education, and medical care. This is not enough. The level of oppression and violence that these refugees are experiencing goes beyond resources and virtual support. These people need to leave these countries and resettle so that they and their family members are not injured, imprisoned, or killed.  "
              />
            </Grid>
            <Grid item sm={4}>
              <ContextCard
                mythTitle="MYTH #6: The refugee crisis is over."
                mythDetails="This statement is simply false. When thinking about the refugee crisis we want to find a way to solve it, end it for good. Unfortunately this is not possible. Refugees flee their homes because threats on their life or their safety. Therefore, as long as wars continue people will continue to flee them. "
              />
            </Grid>
          </Grid>
        </Box> */}
      </Box>

    </div>
  );
}

export default Myths; 
