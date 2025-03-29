import { useEffect, useState } from "react";
import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import { useColorMode } from "./components/ui/color-mode";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
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
      <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
    </GridItem>
    <GridItem area='aside' display={{
      base: "none",
      lg: "block"
    }} paddingX={5}>
      <GenreList selectedGenre={gameQuery.genre}
        onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
    </GridItem>
    <GridItem area='main'>
      <Box paddingLeft={10}>
        <GameHeading gameQuery={gameQuery} />
        <HStack spaceX={3} marginBottom={-2}>
          <PlatformSelector selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
          <SortSelector selectedSortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
          </HStack>
        </Box>
      <GameGrid gameQuery={gameQuery} />
    </GridItem>
  </Grid>;
}

export default App;
