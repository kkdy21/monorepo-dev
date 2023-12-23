// packages/design-system/src/Button.tsx
import { ReactNode } from "react";
import styled from "@emotion/styled";
// import styled from "styled-components";
import "./button.scss";

type ButtonProps = {
	children: ReactNode;
};

const StyledButton = styled.button`
	background-color: transparent;
	padding: 10px;
	border: 3px solid red;
	border-radius: 5px;
`;

const TgButton = ({ children }: ButtonProps) => {
	return <StyledButton className="tgButton">{children}</StyledButton>;
};

const NormalButton = () => {
	return <button className="normalButton">NormalBtn234</button>;
};

export { TgButton, NormalButton, StyledButton };
