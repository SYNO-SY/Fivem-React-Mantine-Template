import { fetchNui } from "./utils/fetchNui";
import { theme } from "./theme";
import { MantineProvider } from "@mantine/core";
import { useConfig } from "./providers/ConfigProvider";
import Test from "./components/ButtonComp";

const App: React.FC = () => {
  const { config } = useConfig();

  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{ ...theme, ...config }}>
      <Test></Test>
    </MantineProvider>
  );
};

export default App;
