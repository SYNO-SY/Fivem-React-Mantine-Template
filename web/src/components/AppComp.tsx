import {
  ActionIcon,
  Box,
  Button,
  Center,
  Flex,
  Group,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { fetchNui } from "../utils/fetchNui";
import { useLocales } from "../providers/LocaleProvider";
import classes from "./App.module.css";
import { Icon } from "@iconify/react";

// icons
const closeIcon = <Icon icon="gg:close-o" width="24" height="24" />;

export default function AppComp() {
  // locale provider
  const { locale } = useLocales();
  // state Handler for money
  const [money, setMoney] = useState<any>("0");
  const handleGetPlayerMoney = () => {
    fetchNui("getPlayerMoney")
      .then((retData) => {
        setMoney(retData);
      })
      .catch(() => {
        setMoney("50,000");
      });
  };
  function handleReset() {
    setMoney("0");
  }
  function handleClose() {
    fetchNui("hide-ui");
  }

  return (
    <Box
      className={classes.app_container}
      py={10}
      h={360}
      w={330}
      bg={"#25262b"}
      mx='auto'>
      <Group
        justify='end'
        px={8}>
        <ActionIcon
          color='yellow'
          size='lg'
          radius='md'
          variant='light'
          onClick={handleClose}>
          {closeIcon}
        </ActionIcon>
      </Group>
      <Center className={classes.center}>
        <Flex
          gap='md'
          justify='center'
          align='center'
          direction='column'
          wrap='wrap'>
          <Button
            mt={50}
            variant='light'
            radius='xl'
            size='xl'
            onClick={handleGetPlayerMoney}>
            {locale.ui_buttonText}
          </Button>
          <Text
            ta='center'
            c='white'
            size='xl'
            px={6}
            bg={"#4a4a4a"}
            fw={700}
            fz='xl'>
            {locale.ui_playerMoney}
            <br></br>:{""}
            {money}
          </Text>
          <Button
            variant='light'
            color='cyan'
            radius='md'
            size='md'
            tt={"uppercase"}
            onClick={handleReset}>
            {locale.ui_reset}
          </Button>
        </Flex>
      </Center>
    </Box>
  );
}
