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
	return (
		<button
			className={props.className}
			ref={forwardedRef}
			css={css`
				border: 1px solid red;
				width: 100px;
				height: 100px;
			`}
			{...otherProps}
		>
			{isLoading ? "로딩중..asd." : children}
		</button>
	);
});

EmButton.displayName = "EmButton";
export { EmButton };

// import styled from '@emotion/styled';
// const Container = styled.div`
//   padding: 20px;
//   border: 2px solid ${(props) => props.primaryColor};
//   background-color: ${(props) => props.secondaryColor};
// `;
//
// const Title = styled.h1`
//   font-size: 24px;
//   color: ${(props) => props.primaryColor};
// `;
//
// const Description = styled.p`
//   font-size: 16px;
//   color: ${(props) => props.secondaryColor};
// `;
//
// const ComplexComponent = ({ primaryColor, secondaryColor }) => (
// 	<Container primaryColor={primaryColor} secondaryColor={secondaryColor}>
// 		<Title primaryColor={primaryColor}>Title</Title>
// 		<Description secondaryColor={secondaryColor}>This is a description.</Description>
// 	</Container>
// );

//styled-component는 템플릿리터럴과 styled함수를 사용해야 하는 방식이라 해당 변수가 어떤 태그인 지 봐야하는 번거러움
