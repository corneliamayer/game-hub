import { useEffect, useState } from "react";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { useColorMode } from "./components/ui/color-mode";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
      <GenreList selectedGenre={gameQuery.genre}
        onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
    </GridItem>
    <GridItem area='main'>
      <HStack spaceX={3} paddingLeft={10} marginBottom={-2}>
        <PlatformSelector selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
        <SortSelector selectedSortOrder={gameQuery.sortOrder}
          onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
      </HStack>
      <GameGrid gameQuery={gameQuery} />
    </GridItem>
  </Grid>;
}

export default App;
