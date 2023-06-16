import { Box, Text, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  box: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

const App: React.FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <Box className={classes.box}>
        <Text>hello</Text>
      </Box>
    </>
  );
};

export default App;
