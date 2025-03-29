import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by: Relevance <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value={"relevance"}>Relevance</Menu.Item>
            <Menu.Item value={"date-added"}>Date added</Menu.Item>
            <Menu.Item value={"name"}>Name</Menu.Item>
            <Menu.Item value={"release-date"}>Release date</Menu.Item>
            <Menu.Item value={"popularity"}>Popularity</Menu.Item>
            <Menu.Item value={"average-rating"}>Average Rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;