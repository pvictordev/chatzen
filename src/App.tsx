import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import "./App.css";
import "./app/globals.css";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="app">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
