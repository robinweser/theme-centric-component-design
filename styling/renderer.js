import { createRenderer } from "fela";
import preset from "fela-preset-web";
import rtl from "fela-plugin-rtl";
import namedKeys from "fela-plugin-named-keys";

const renderer = createRenderer({
  plugins: [
    ...preset,
    namedKeys(props => (props.theme && props.theme.breakpoints) || {}),
    rtl()
  ]
});

renderer.renderStatic(
  {
    margin: 0,
    padding: 0
  },
  "*"
);

export default renderer;
