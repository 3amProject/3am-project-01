import styled from "styled-components";

const FooterComponent = styled.footer`
    height: 5em;
    width: 70vw;
    background-color: ghostwhite;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 64rem) {
        width: 90vw;
    }
`;

const TotalPrice = ({totalPrice, showPrice}) => {
    return (
        <FooterComponent>
            <div>
                <span>결제금액</span>
                <span>총 {showPrice(totalPrice)}</span>
            </div>
            <button>장바구니</button>
        </FooterComponent>
    )
}

export default TotalPrice;