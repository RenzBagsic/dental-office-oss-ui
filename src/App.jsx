import { createTheme, MantineProvider } from "@mantine/core";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { Notifications } from "@mantine/notifications";

export default function App() {
  return (
    <MantineProvider>
      <Notifications />
      {
        <Router basename="/">
          <Routes />
        </Router>
      }
    </MantineProvider>
  );
}
