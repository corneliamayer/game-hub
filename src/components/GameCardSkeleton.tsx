import { Card, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <Card.Body>
        <Skeleton height="15px" mb="2" />
        <Skeleton height="15px" mb="2" />
        <Skeleton height="15px" />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;