import React from "react";
import { IPlugin, PluginStore } from "react-pluggable";

class SharePlugin implements IPlugin {
  pluginStore!: PluginStore;

  getPluginName(): string {
    return "Share@0.1.0";
  }

  getDependencies(): string[] {
    return [];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  activate(): void {
    this.pluginStore.executeFunction("Renderer.add", "header:after", () => (
      <button>Share</button>
    ));
  }

  deactivate(): void {
    //
  }
}

export default SharePlugin;
