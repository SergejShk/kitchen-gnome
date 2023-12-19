import styled from "styled-components";

const ProductHuntLink = () => {
	return (
		<ProductHuntLinkStyled
			href="https://www.producthunt.com/"
			target="_blank"
			rel="noreferrer noopener"
			aria-label="appstore"
		>
			<LogoPH />

			<TextWrapper>
				<SmallText>FEATURED ON</SmallText>
				<MainText>Product Hunt</MainText>
			</TextWrapper>

			<DownloadsBlock>2549</DownloadsBlock>
		</ProductHuntLinkStyled>
	);
};

export default ProductHuntLink;

const ProductHuntLinkStyled = styled.a`
	width: 223px;
	border-radius: 6px;
	border: 1px solid #ff6153;
	background-color: #fff;
	padding: 8px 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const LogoPH = styled.div`
	width: 31px;
	height: 31px;
	background-image: url("/icons/ph-logo.svg");
	background-size: auto;
	background-position: center center;
	background-repeat: no-repeat;
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	color: #ff6153;
	font-family: Helvetica;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

const SmallText = styled.p`
	font-size: 9px;
`;

const MainText = styled.p`
	font-size: 21px;
`;

const DownloadsBlock = styled.div`
	width: 30px;
	height: 29px;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	color: #ff6153;
	font-family: Helvetica;
	font-size: 13px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	background-image: url("/icons/triangle.svg");
	background-size: auto;
	background-position: top center;
	background-repeat: no-repeat;
`;
