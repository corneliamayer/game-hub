import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }} >
    <GridItem area='nav'>
      <NavBar />
    </GridItem>
    <GridItem area='aside' bg='gold' display={{
      base: "none", // auf mobilen Ger�ten nicht angezeigt
      lg: "block" // auf gro�en Screens schon
    }}>
      Aside
    </GridItem>
    <GridItem area='main' bg='dodgerblue'>
      Main
    </GridItem>
  </Grid>;
}

export default App;
