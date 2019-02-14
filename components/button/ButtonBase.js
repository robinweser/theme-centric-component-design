import { useFela } from "react-fela";

const button = ({ theme, variant }) => ({
  width: "100%",
  appearance: "none",
  outline: 0,
  border: 0,
  fontFamily: theme.fonts.primary,
  padding: theme.spacings.l,
  fontSize: theme.sizes.l,
  backgroundColor: theme.colors.backgroundLight,
  medium: {
    fontSize: theme.sizes.m
  },
  ":focus": {
    outline: "2px solid grey"
  },
  extend: [
    {
      condition: variant === "primary",
      style: {
        backgroundColor: theme.colors.primary,
        color: "white"
      }
    },
    {
      condition: variant === "secondary",
      style: {
        backgroundColor: theme.colors.secondary,
        color: "white"
      }
    },
    (theme.styles && theme.styles.button) || {}
  ]
});

export default function Button({ styleProps, ...props }) {
  console.log(props, styleProps);
  const { css } = useFela(styleProps);

  return <button {...props} className={css(button)} />;
}
