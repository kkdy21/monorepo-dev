import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";

import { css } from "@emotion/react";
import "./EmButton.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean;
	children: React.ReactNode;
}

const EmButton = forwardRef<HTMLButtonElement, Props>((props, forwardedRef) => {
	const { isLoading, children, ...otherProps } = props;
	// eslint-disable-next-line
	console.log("test");
	return (
		<button
			className="testBtn"
			ref={forwardedRef}
			css={css`
				border: 1px solid red;
				width: 100px;
				height: 100px;
			`}
			{...otherProps}>
			{isLoading ? "로딩중..asd." : children}
		</button>
	);
});

EmButton.displayName = "EmButton";
export { EmButton };
