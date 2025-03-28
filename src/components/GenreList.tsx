import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List.Root listStyle='none'>
      {data.map(genre =>
        <List.Item key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)} />
            <Button onClick={() => onSelectGenre(genre)}
              size='md' variant='ghost'>{genre.name}</Button>
          </HStack>
        </List.Item>)}
    </List.Root>
  );
};

export default GenreList;