import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import { NoteProvider } from "./context/NoteContext";
import {
  AuthProvider,
  NoteProvider,
  DeleteProvider,
  ArchiveProvider,
  FilterProvider,
} from "./context/index";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <FilterProvider>
          <NoteProvider>
            <DeleteProvider>
              <ArchiveProvider>
                <App />
              </ArchiveProvider>
            </DeleteProvider>
          </NoteProvider>
        </FilterProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
