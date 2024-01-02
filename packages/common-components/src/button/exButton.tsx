// packages/design-system/src/Button.tsx
import React, { ReactNode } from "react";
import styled from "@emotion/styled";
// import styled from "styled-components";
import "./exButton.module.scss";

type ButtonProps = {
	children: ReactNode;
	className: string;
};

const StyledButton = styled.button`
	background-color: transparent;
	padding: 10px;
	border: 3px solid red;
	border-radius: 5px;
`;

const TgButton: React.FC<ButtonProps> = (props) => {
	return (
		<StyledButton className={props.className}>{props.children}</StyledButton>
	);
};

const NormalButton = () => {
	return <button className="normalButton">NormalBtn234</button>;
};

export { TgButton, NormalButton, StyledButton };
