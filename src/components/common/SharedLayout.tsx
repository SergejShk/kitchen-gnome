import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const SharedLayout: FC = () => {
	return (
		<LayoutStyled>
			<Suspense>
				<Outlet />
			</Suspense>
		</LayoutStyled>
	);
};

export default SharedLayout;

const LayoutStyled = styled.div`
	min-height: 100vh;
	position: relative;
	height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;
