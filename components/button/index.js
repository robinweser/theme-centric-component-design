import ButtonBase from "./ButtonBase";
import ButtonContainer from "./ButtonContainer";

export default function Button({ children, ...props }) {
  return (
    <ButtonContainer {...props}>
      {buttonProps => <ButtonBase {...buttonProps}>{children}</ButtonBase>}
    </ButtonContainer>
  );
}
