import {
  ActionIcon,
  Box,
  Button,
  Center,
  Flex,
  Group,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import { useState } from "react";
import { fetchNui } from "../utils/fetchNui";
import { IconX } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  center: {
    borderRadius: 10,
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default function AppComp() {
  const { classes } = useStyles();
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
      className={classes.center}
      py={10}
      h={360}
      w={330}
      bg={"#25262b"}
      mx='auto'>
      <Group
        position='right'
        px={8}>
        <ActionIcon
          color='yellow'
          size='lg'
          radius='md'
          variant='light'
          onClick={handleClose}>
          <IconX size='1.625rem' />
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
            styles={{
              root: { paddingRight: rem(14), height: rem(48) },
              rightIcon: { marginLeft: rem(22) },
            }}
            onClick={handleGetPlayerMoney}>
            Click To Get Player Money
          </Button>
          <Text
            ta='center'
            c='white'
            size='xl'
            px={6}
            sx={{ borderRadius: 5 }}
            bg={"#4a4a4a"}
            fw={700}
            fz='xl'>
            Player Money<br></br>:{""}
            {money}
          </Text>
          <Button
            variant='light'
            color='cyan'
            radius='md'
            size='md'
            uppercase
            onClick={handleReset}>
            Reset
          </Button>
        </Flex>
      </Center>
    </Box>
  );
}
