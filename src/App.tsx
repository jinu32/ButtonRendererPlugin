import React from "react";
import {
  createPluginStore,
  PluginProvider,
  RendererPlugin
} from "react-pluggable";
import SharePlugin from "./plugins/SharePlugin";
import AnotherPlugin from "./plugins/AnotherPlugin";
import Header from "./components/Header";

const pluginStore = createPluginStore();
pluginStore.install(new RendererPlugin());
pluginStore.install(new SharePlugin());
pluginStore.install(new AnotherPlugin());

function App() {
  return (
    <PluginProvider pluginStore={pluginStore}>
      <Header />
    </PluginProvider>
  );
}

export default App;
