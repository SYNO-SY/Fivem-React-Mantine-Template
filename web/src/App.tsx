import { fetchNui } from "./utils/fetchNui";
import { theme } from "./theme";
import { MantineProvider } from "@mantine/core";
import { useConfig } from "./providers/ConfigProvider";
import AppComp from "./components/AppComp";

const App: React.FC = () => {
  const { config } = useConfig();

  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{ ...theme, ...config }}>
      <AppComp></AppComp>
    </MantineProvider>
  );
};

export default App;
