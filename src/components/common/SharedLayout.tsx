import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";

const SharedLayout: FC = () => {
	return (
		<LayoutStyled>
			<Header />

			<ContentWrapper>
				<Suspense>
					<Outlet />
				</Suspense>
			</ContentWrapper>
		</LayoutStyled>
	);
};

export default SharedLayout;

const LayoutStyled = styled.div`
	min-height: calc(100vh - 70px);
	position: relative;
	height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;

const ContentWrapper = styled.div`
	margin: 70px auto 0;
`;
