import React from "react";
import { IPlugin, PluginStore } from "react-pluggable";

class AnotherPlugin implements IPlugin {
  pluginStore!: PluginStore;

  getPluginName(): string {
    return "Another@0.1.0";
  }

  getDependencies(): string[] {
    return [];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  activate(): void {
    this.pluginStore.executeFunction("Renderer.add", "header:after", () => (
      <p>This is a paragraph</p>
    ));
  }

  deactivate(): void {
    //
  }
}

export default AnotherPlugin;
