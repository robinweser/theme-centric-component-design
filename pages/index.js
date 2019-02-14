import { useState } from "react";
import { RendererProvider, ThemeProvider } from "react-fela";

import Button from "../components/button";
import ButtonContainer from "../components/button/ButtonContainer";
import ButtonBase from "../components/button/ButtonBase";

import renderer from "../styling/renderer";

import sweden from "../themes/sweden";
import germany from "../themes/germany";

const CustomStyledButton = ({ children, ...props }) => (
  <ButtonContainer {...props}>
    {buttonProps => (
      <div
        {...buttonProps}
        style={{
          background: "green",
          textAlign: "center",
          padding: 10,
          width: 150,
          borderRadius: 10,
          fontSize: 18
        }}
      >
        {children}
      </div>
    )}
  </ButtonContainer>
);

const CustomLogicButton = ({ children, onClick, ...styleProps }) => (
  <ButtonBase styleProps={styleProps} onClick={onClick}>
    {children}
  </ButtonBase>
);

export default () => {
  const [theme, setTheme] = useState(sweden);

  const isSweden = theme === sweden;

  return (
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={theme}>
        <div style={{ maxWidth: 850 }}>
          <button
            style={{ padding: 10 }}
            onClick={() => setTheme(isSweden ? germany : sweden)}
          >
            Current Theme: {isSweden ? "Sweden" : "Germany"}
          </button>
          <br />
          <br />
          <p>
            Those 2 buttons are using only built-in styles and props such as
            onClick.
            <br />
            They get a role, a tabIndex and everything that's required to have a
            accessible button by default.
          </p>
          <Button variant="primary" onClick={() => alert("Clicked: Secondary")}>
            Primary
          </Button>
          <br />
          <Button
            variant="secondary"
            onClick={() => alert("Clicked: Secondary")}
          >
            Secondary
          </Button>

          <br />
          <br />
          <p>
            Those 2 buttons are default buttons with extended styles to set
            textAlign: left using the theme.styles.button key.
            <br />
            The first one has a theme.direction set to "ltr" while the second
            one defaults to "rtl".
          </p>
          <ThemeProvider
            theme={{
              ...theme,
              styles: { button: { textAlign: "left" } }
            }}
          >
            <Button onClick={() => alert("Clicked: Themed Button")}>
              LTR Themed Button
            </Button>
          </ThemeProvider>
          <ThemeProvider
            theme={{
              ...theme,
              styles: { button: { textAlign: "left" } },
              direction: "rtl"
            }}
          >
            <Button onClick={() => alert("Clicked: Themed Button")}>
              RTL Themed Button
            </Button>
          </ThemeProvider>
          <br />
          <br />
          <p>
            Those 2 buttons are using only parts of the default button.
            <br />
            The first one uses the Container to get all the logic, accessibility
            props etc.
            <br />
            The second one reuses the pure styled button component but provides
            its own logic, handlers and props.
          </p>
          <CustomStyledButton
            onClick={() => alert("Clicked: Custom Styled Button")}
          >
            Custom Styled
          </CustomStyledButton>
          <CustomLogicButton
            onClick={() => alert("Clicked: Custom Logic Button")}
          >
            Custom Logic
          </CustomLogicButton>
        </div>
      </ThemeProvider>
    </RendererProvider>
  );
};
