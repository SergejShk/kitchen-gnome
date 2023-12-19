import { FC } from "react";
import styled from "styled-components";
import ProductHuntLink from "../common/ProductHuntLink";

const HomePage: FC = () => {
	return (
		<HomeStyled>
			<Logo />
			<Title>Kitchen Gnome</Title>
			<Description>Your Smart Culinary Guide</Description>

			<AppStoreLink
				href="https://www.apple.com/app-store/"
				target="_blank"
				rel="noreferrer noopener"
				aria-label="appstore"
			/>
			<ProductHuntLink />
		</HomeStyled>
	);
};

export default HomePage;

const HomeStyled = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: calc(100vh - 70px);
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 64px;
	height: 64px;
	background-image: url("/icons/logo-main.svg");
	background-size: auto;
	background-position: center center;
	background-repeat: no-repeat;
`;

const Title = styled.h1`
	font-family: Abhaya Libre;
	font-size: 36px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	margin: 12px auto 30px;
`;

const Description = styled.p`
	font-family: Avenir;
	font-size: 20px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
	margin: 0 auto 65px;
`;

const AppStoreLink = styled.a`
	width: 180px;
	height: 50px;
	border-radius: 6px;
	background-image: url("/icons/appstore.svg");
	background-size: auto;
	background-position: center center;
	background-repeat: no-repeat;
	margin: 0 0 20px 0;
`;
