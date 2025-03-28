import { useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useColorMode } from "./components/ui/color-mode";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode('dark');
  }, []);

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }} templateColumns={{
    base: '1fr',
    lg: '200px 1fr'
  }}>
    <GridItem area='nav'>
      <NavBar />
    </GridItem>
    <GridItem area='aside' display={{
      base: "none",
      lg: "block"
    }} paddingX={5}>
      <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
    </GridItem>
    <GridItem area='main'>
      <GameGrid selectedGenre={selectedGenre} />
    </GridItem>
  </Grid>;
}

export default App;
