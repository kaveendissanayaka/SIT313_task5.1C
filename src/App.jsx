import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import PostPage from "./components/Postpage";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <PostPage />
    </ThemeProvider>
  );
}

export default App;
