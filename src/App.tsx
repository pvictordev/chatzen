import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import "./App.css";
import "./app/globals.css";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";

function App() {
  return (
    <div className="app">
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
