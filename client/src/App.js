// importation of component from material ui 
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

// importation of components 
import Form from "./components/form/Form";

import Posts from "./components/posts/Posts";

// imporation of images fromthe image folder
import memories from "./images/beach.jpg";

const App = () => {

  return (

    <>

      <Container maxWidth="lg">

        <AppBar position="static" color="inherit">

          <Typography variant="h2" align="center">Memories</Typography>

          <img src={memories} alt="memories" height="60"/>

        </AppBar>
        
        <Grow in>

          <Container>
            
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              
              <Grid item xs={12} sm={7}> <Posts/> </Grid>

              <Grid item xs={12} sm={4}><Form/></Grid>

            </Grid>

          </Container>

        </Grow>

      </Container>
      
    </>

  )

}

export default App
