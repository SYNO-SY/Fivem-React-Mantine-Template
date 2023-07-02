import { Button, Center, CloseButton, Flex, Text, rem } from "@mantine/core";
import { useState } from "react";
import { fetchNui } from "../utils/fetchNui";

export default function ButtonComp() {
  const [money, setMoney] = useState<any>("");
  const handleGetPlayerMoney = () => {
    fetchNui("getPlayerMoney")
      .then((retData) => {
        setMoney(retData);
      })
      .catch((e) => {
        console.error("Setting mock data due to error", e);
        setMoney(5000);
      });
  };
  function handleclose() {
    setMoney("");
  }

  return (
    <Center
      py={10}
      mx='auto'>
      <Flex
        mih={50}
        gap='md'
        justify='center'
        align='center'
        direction='column'
        wrap='wrap'>
        <Button
          variant='light'
          radius='xl'
          size='md'
          styles={{
            root: { paddingRight: rem(14), height: rem(48) },
            rightIcon: { marginLeft: rem(22) },
          }}
          onClick={handleGetPlayerMoney}>
          Get Player Money
        </Button>
        <CloseButton
          title='Close popover'
          size='xl'
          iconSize={20}
          onClick={handleclose}
        />
        {money && (
          <Text
            c='white'
            fw={700}
            fz='xl'>
            {money}
          </Text>
        )}
      </Flex>
    </Center>
  );
}
