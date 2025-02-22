import { useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useColorMode } from "./components/ui/color-mode";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode('dark');
  }, []);

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }} >
    <GridItem area='nav'>
      <NavBar />
    </GridItem>
    <GridItem area='aside' display={{
      base: "none",
      lg: "block"
    }}>
      Aside
    </GridItem>
    <GridItem area='main'>
      <GameGrid />
    </GridItem>
  </Grid>;
}

export default App;
