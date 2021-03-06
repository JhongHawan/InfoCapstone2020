import React from 'react';
import { 
   Box, 
   Button, 
   Typography, 
   Paper, 
   Step, 
   Stepper, 
   Hidden, 
   StepLabel, 
   StepContent
} from '@material-ui/core';
import { Col, Row, Container } from 'react-bootstrap';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import ReactCompareImage from 'react-compare-image';
import Hero from './Hero';
import Divider from './Divider';
import { useStyles } from './Styles';

function Event(props) {
   return (
      <TimelineItem
         key={props.key}
         dateText={props.date}
         dateInnerStyle={{ background: '#c9d6df', color: '#002851' }}
         style={{ color: '#F16841' }}
         bodyContainerStyle={{
            background: '#F0F5F9',
            padding: '20px',
            borderRadius: '8px',
         }}
      >
         <Typography style={{ padding: '0.5em' }} component="overline" variant="overline" color="secondary">
            {props.title}
         </Typography>
      </TimelineItem>
   )
}

function ContextTimeline() {
   return (
      <Timeline lineColor={'#F0F5F9'}>
         <Event
            key="001"
            date="1891"
            title="Bureau of Immigration is Established"
         />
         <Event
            key="002"
            date="1917"
            title="The Immigration Act of 1917"
         />
         <Event
            key="003"
            date="1921-1924"
            title="The Quota Acts"
         />
         <Event
            key="004"
            date="1939-1945"
            title="World War II"
         />
         <Event
            key="005"
            date="1945"
            title="The United Nations is Established"
         />
      </Timeline>
   )
}

function Myths() {
   const classes = useStyles();

   function TrueFact(props) {
      return (
         <Row >
            <Col sm={3} md={4} align="center">
               <img src="green_check.png" width="50px" alt="green check mark" />
            </Col>
            <Col sm={9} md={8}>
               <Typography component="overline" variant="overline">{props.description}</Typography>
            </Col>
         </Row>
      )
   }

   function FalseFact(props) {
      return (
         <Row>
            <Col sm={3} md={4} style={{ textAlign: 'center' }}>
               <img src="red_check.png" width="50px"  alt="red x mark" />
            </Col>
            <Col sm={9} md={8}>
               <Typography component="overline" variant="overline">{props.description}</Typography>
            </Col>
         </Row>
      )

   }

   return (
      <Container>
         <Row>
            <Col md={6}>
               <TrueFact
                  description="Refugees go through a 20 step vetting process."
               />
               <TrueFact
                  description="Refugees are forced to leave their home to escape violence."
               />
               <TrueFact
                  description="The refugee crisis is still happening."
               />
            </Col>
            <Col md={6}>
               <FalseFact
                  description="Immigrants and refugees are the same type of person."
               />
               <FalseFact
                  description="All refugees are terrorists with a violent agenda."
               />
               <FalseFact
                  description="Refugees do not pay taxes, and negatively impact the economy."
               />
            </Col>
         </Row >
      </Container >

   )
}

function VettingProcess() {
   const classes = useStyles();

   // ! calls for vetting function
   const [activeStep, setActiveStep] = React.useState(0);
   const steps = getSteps();

   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
   };

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };

   const handleReset = () => {
      setActiveStep(0);
   };

   function getSteps() {
      return ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Stage 5', 'Stage 6'];
   }

   function getStepContent(step) {
      switch (step) {
         case 0:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="vetting_un.jpg" width="100%" alt="UN globe logo"/>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">United Nations Interview</Typography>
                        <ol style={{ paddingTop: "1em" }} >
                           <li><Typography component="body1" variant="body1">Registration with the United Nations.</Typography></li>
                           <li><Typography component="body1" variant="body1">Interview with the United Nations.</Typography></li>
                           <li><Typography component="body1" variant="body1">Refugee status granted by the United Nations.</Typography></li>
                           <li><Typography component="body1" variant="body1">Referral for resettlement in the United States.</Typography></li>
                        </ol>
                     </Col>
                  </Row>
               </Container>
            );
         case 1:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="vetting_usds.jpg" width="100%" alt="flg of the United States Department of State" />
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">State Department Interview</Typography>
                        <ol start="5" style={{ paddingTop: "1em" }} >
                           <li><Typography component="body1" variant="body1">Interview with State Department Contractors</Typography></li>
                        </ol>
                     </Col>
                  </Row>
               </Container>
            );
         case 2:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="vetting_magnifying.jpg" width="100%" alt="man investigating with magnifying glass" />
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">First Round of Background Checks</Typography>
                        <ol start="6" style={{ paddingTop: "1em" }} >
                           <li><Typography component="body1" variant="body1">First background check.</Typography></li>
                           <li><Typography component="body1" variant="body1">Higher-level background check for some.</Typography></li>
                           <li><Typography component="body1" variant="body1">Another background check.</Typography></li>
                        </ol>
                     </Col>
                  </Row>
               </Container>
            );
         case 3:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="vetting_screening.jpg" width="100%" alt="bio screening"/>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">Fingerprint screenings</Typography>
                        <ol start="9" style={{ paddingTop: "1em" }} >
                           <li><Typography component="body1" variant="body1">First fingerprint screening; photo taken (FBI).</Typography></li>
                           <li><Typography component="body1" variant="body1">Second fingerprint screening (Homeland Security).</Typography></li>
                           <li><Typography component="body1" variant="body1">Third fingerprint screening (Defense Department).</Typography></li>
                        </ol>
                     </Col>
                  </Row>
               </Container>
            );
         case 4:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Seal_of_the_United_States_Department_of_Homeland_Security.svg" width="100%" alt="seal of the united states department of homeland security"/>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">Homeland Security</Typography>
                        <ol start="12" style={{ paddingTop: "1em" }} >
                           <li><Typography component="body1" variant="body1">Extensive In-person interview with Homeland Security.</Typography></li>
                           <li><Typography component="body1" variant="body1">Homeland Security approval is required.</Typography></li>
                        </ol>
                     </Col>
                  </Row>
               </Container>
            );
         case 5:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="vetting_travel.jpg" width="100%"  alt="plane flying to america"/>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">Arrival to the United States</Typography>
                        <ol start="14" style={{ paddingTop: "1em" }} >
                           <li><Typography component="body1" variant="body1">Screening for contagious diseases.</Typography></li>
                           <li><Typography component="body1" variant="body1">Cultural orientation classes.</Typography></li>
                           <li><Typography component="body1" variant="body1">Matched with an American resettlement agency.</Typography></li>
                           <li><Typography component="body1" variant="body1">Multi-agency security check before leaving for the United States.</Typography></li>
                           <li><Typography component="body1" variant="body1">Final security check at American airport.</Typography></li>
                        </ol>
                     </Col>
                  </Row>
               </Container>
            );
         default:
            return 'Unknown step';
      }
   }

   // TODO would be interesting to write something for the end of the Vetting Process 
   return (
      <div className={classes.stepperRoot}>
         <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
               <Step key={label}>
                  <StepLabel>{label}</StepLabel>
               </Step>
            ))}
         </Stepper>
         <div>
            {activeStep === steps.length ? (
               <div>
                  <Typography className={classes.stepperInstructions}>
                     The Vetting Process for refugees is extensive and not as easy as it seems.
                  </Typography>
                  <Button onClick={handleReset}>Reset</Button>
               </div>
            ) : (
                  <div>
                     <Typography className={classes.stepperInstructions}>{getStepContent(activeStep)}</Typography>
                     <div style={{ textAlign: 'center' }}>
                        <Button
                           disabled={activeStep === 0}
                           onClick={handleBack}
                           className={classes.stepperBackButton}
                        >
                           Back
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleNext}>
                           {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                     </div>
                  </div>
               )}
         </div>
      </div>
   )
}

function VettingProcessMobile() {
   const classes = useStyles();

   function getSteps() {
      return ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Stage 5', 'Stage 6'];
   }

   function getStepContent(step) {
      switch (step) {
         case 0:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="vetting_un.jpg" width="100%" alt="UN globe logo"/>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">United Nations Interview</Typography>

                        <ol style={{ paddingTop: "1em" }}>
                           <li><Typography component="body1" variant="body1">Registration with the United Nations.</Typography></li>
                           <li><Typography component="body1" variant="body1">Interview with the United Nations.</Typography></li>
                           <li><Typography component="body1" variant="body1">Refugee status granted by the United Nations.</Typography></li>
                           <li><Typography component="body1" variant="body1">Referral for resettlement in the United States.</Typography></li>
                        </ol>
                     </Col>
                  </Row>
               </Container>
            );
         case 1:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="vetting_usds.jpg" width="100%" alt="Flag of United States Department"/>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">State Department Interview</Typography>
                        <ol start="5" style={{ paddingTop: "1em" }}>
                           <li><Typography component="body1" variant="body1">Interview with State Department Contractors</Typography></li>
                        </ol>
                     </Col>
                  </Row>
               </Container>
            );
         case 2:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="vetting_magnifying.jpg" width="100%" alt="man investigating with magnifying glass"/>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">First Round of Background Checks</Typography>
                        <ol start="6" style={{ paddingTop: "1em" }}>
                           <li><Typography component="body1" variant="body1">First background check.</Typography></li>
                           <li><Typography component="body1" variant="body1">Higher-level background check for some.</Typography></li>
                           <li><Typography component="body1" variant="body1">Another background check.</Typography></li>
                        </ol>
                     </Col>
                  </Row>
               </Container>
            );
         case 3:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="vetting_screening.jpg" width="100%" alt="bio screening"/>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">Fingerprint screenings</Typography>
                        <ol start="9" style={{ paddingTop: "1em" }}>
                           <li><Typography component="body1" variant="body1">First fingerprint screening; photo taken.</Typography></li>
                           <li><Typography component="body1" variant="body1">Second fingerprint screening.</Typography></li>
                           <li><Typography component="body1" variant="body1">Third fingerprint screening.</Typography></li>
                        </ol>
                     </Col>
                  </Row>
               </Container>
            );
         case 4:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Seal_of_the_United_States_Department_of_Homeland_Security.svg" width="100%" alt="seal of the united states department of homeland security"/>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">Homeland Security</Typography>
                        <ol start="12" style={{ paddingTop: "1em" }}>
                           <li><Typography component="body1" variant="body1">Extensive In-person interview with Homeland Security.</Typography></li>
                           <li><Typography component="body1" variant="body1">Homeland Security approval is required.</Typography></li>
                        </ol>
                     </Col>
                  </Row>
               </Container>
            );
         case 5:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="vetting_travel.jpg" width="100%" alt="plane flying to America"/>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">Arrival to the United States</Typography>
                        <ol start="14" style={{ paddingTop: "1em" }}>
                           <li><Typography component="body1" variant="body1">Screening for contagious diseases.</Typography></li>
                           <li><Typography component="body1" variant="body1">Cultural orientation classes.</Typography></li>
                           <li><Typography component="body1" variant="body1">Matched with an American resettlement agency.</Typography></li>
                           <li><Typography component="body1" variant="body1">Multi-agency security check before leaving for the United States.</Typography></li>
                           <li><Typography component="body1" variant="body1">Final security check at American airport.</Typography></li>
                        </ol>
                     </Col>
                  </Row>
               </Container>
            );
         default:
            return 'Unknown step';
      }
   }

   const [activeStep, setActiveStep] = React.useState(0);
   const steps = getSteps();

   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
   };

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };

   const handleReset = () => {
      setActiveStep(0);
   };

   return (
      <div className={classes.stepperRoot}>
         <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
               <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                     <Typography>{getStepContent(index)}</Typography>
                     <div className={classes.stepperMobileActionContainer}>
                        <div style={{ textAlign: 'center' }}>
                           <Button
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              className={classes.stepperInstruction}
                           >
                              Back
                           </Button>
                           <Button
                              variant="contained"
                              color="primary"
                              onClick={handleNext}
                              className={classes.stepperInstruction}
                           >
                              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                           </Button>
                        </div>
                     </div>
                  </StepContent>
               </Step>
            ))}
         </Stepper>
         {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.stepperMobileResetContainer}>
               <Typography>All steps completed - you&apos;re finished</Typography>
               <Button onClick={handleReset} className={classes.stepperInstruction}>
                  Reset
          </Button>
            </Paper>
         )}
      </div>
   )
}

function ImageComparer() {
   return (
      // <Box>
      <Box style={{ textAlign: "center" }}>
         <Box style={{ maxWidth: "800px", margin: "auto" }}>
            <ReactCompareImage
               leftImage="refugee1.jpg"
               leftImageAlt="A refugee is  someone a person  who has been forced  to leave their  country in order to  escape war,  persecution, or  natural disaster."
               rightImage="immigrant2.jpg"
               rightImageAlt="An immigrant is someone who makes a conscious decision to leave his or her home and move to a foreign country with the intention of settling there."
               sliderLineWidth="4"
               hover={true}
            />
         </Box>
      </Box>
      // </Box>
   )
}



function Context() {

   const classes = useStyles();
   return (
      <div >
         <Hero
            showCard={false}
            sectionTitle="Background"
         />
         <Container>
            <Box>
               <Divider title="HISTORY" />
               <Box className={classes.descriptionBox}>
                  <Typography component="body1" variant="body1">To truly understand refugees and their journey one must understand the history and what has shaped their experiences in the past. Below is the beginning of a timeline that outlines the development of policies and major events that have impacted refugees and immigrants for over a century. </Typography>
               </Box>
               <ContextTimeline />
               <Box style={{ textAlign: 'center', paddingBottom: '30px' }}>
                  <Button variant="contained" color="secondary" href="/history" >More History</Button>
               </Box>
            </Box>
            <Box>
               <Divider title="MYTHS" />
               <Box className={classes.descriptionBox}>
                  <Typography component="body1" variant="body1">There are many myths and misconceptions about refugees, that continue to spread and hurt refugees. It is extremely important to understand the difference between a refugee and an immigrant, comprehend the complexity of the processes they go through to get into the US, and realize the real reasons that they leave their homes.  </Typography>
               </Box>
               <Myths />
               <Box style={{ textAlign: 'center', paddingBottom: '30px', paddingTop: '2em' }}>
                  <Button variant="contained" color="secondary" href="/myths" >More Myths</Button>
               </Box>
            </Box>
            <Box>
               <Divider title="TERMINOLOGY" />
               <Box className={classes.descriptionBox}>
                  <Typography component="body1" variant="body1">Vocabulary and terminology are super important especially when it comes to politically charged issues because words hold more weight for differing communities. Using the wrong terminology could bring harm to certain groups and impact their way of life. Below is a comparison between the two most commonly misused terms. Hover over the images below to learn the difference. </Typography>
               </Box>
               <ImageComparer />
               <Box style={{ textAlign: 'center', paddingBottom: '30px', paddingTop: '2em' }}>
                  <Button variant="contained" color="secondary" href="/terminology">More Definitions</Button>
               </Box>
            </Box>
            <Box>
               <Divider title="VETTING PROCESS" />
               <Box className={classes.descriptionBox}>
                  <Typography>Refugees are the most vetted individuals in the world, at a minimum the vetting process that they go through includes 6 stages and 20 different steps. Each person’s experience is completely different depending on their network, their home country, and the people they interact with from beginning to end. The process detailed below is required by the U.S. Refugee Admissions Program (USRAP) as well as the refugee resettlement process. </Typography>
               </Box>

               {/* IN MOBILE */}
               <Hidden only={['sm', 'md', 'lg', 'xl']}>
                  <VettingProcessMobile />
               </Hidden>
               <Hidden only={['xs']}>
                  <VettingProcess />
               </Hidden>
               <Box style={{ textAlign: 'center', paddingBottom: '30px', paddingTop: '2em' }}>
                  <Button variant="contained" color="secondary" href="/vettingProcess">More Details</Button>
               </Box>
            </Box>
         </Container>
      </div>
   );
}

export default Context; 
