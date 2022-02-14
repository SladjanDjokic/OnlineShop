import React, { useState } from "react";
import "./firebase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "components/layouts/AuthLayout/AuthLayout";
import Login from "modules/Login/Login";
import Inbox from "modules/Inbox/Inbox";
import ChannelView from "modules/Channels/ChannelView/ChannelView";
import { AppProvider } from "utils/Context/Context";
import { IChannel, IPost } from "utils/types";

function App() {
  const [channels, setChannels] = useState<IChannel[]>([]);
  const [inbox, setInbox] = useState<IPost[] | null>(null);
  const [activeSection, setActiveSection] = useState<string | undefined>(
    "inbox"
  ); // this is the section where the arrow key navigation is being focused on, defaults to "inbox"

  return (
    // Declare context provider values
    <AppProvider
      value={{
        channels,
        setChannels,
        inbox,
        setInbox,
        activeSection,
        setActiveSection,
      }}
    >
      {/* Declare routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Inbox />} />
            <Route path=":id" element={<ChannelView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
