import * as React from "react";
import { usePluginStore } from "react-pluggable";

const Header = (props: any) => {
  const pluginStore: any = usePluginStore();
  let Renderer = pluginStore.executeFunction("Renderer.getRendererComponent");

  return (
    <>
      <h1>I am header</h1>
      <Renderer placement={"header:after"} />
    </>
  );
};

export default Header;
