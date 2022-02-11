import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import Login from '../components/Login';
import NotUserOrder from "../components/NotUserOrder";

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Section = styled.section`
    position: relative;
    width: 60%;
    max-width: 500px;
    height: 80%;
    background-color: teal;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 64rem) {
        width: 85%;
        height: 90%;
    }
`;
const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    background-color: tomato;
    & div {
        width: 100%;
        height: 2em;
        display: flex;
        & button {
            flex: 1;
            border: none;
            border-bottom: 2px solid white;
            background-color: none;
            &: hover {
                border-bottom: 2px solid black;
            }
        }
    }
`;
const Main = styled.main`
    width: 80%;
    height: 60%;
`;

const OrderTypePage = ({authUser}) => {
    const [isUser, setIsUser] = useState(true);

    // security api 로 로그인 화면 조회해야 함
    const handleShow = (e) => {
        if(e.target.textContent === '회원'){
            setIsUser(true);
        }else{
            setIsUser(false);
        }
    }

    return (
        <>
        {authUser ?
        window.location.href = '/userOrder' :
        (<Div>
        <Section>
            <Header>
                <Link to="/">
                    <button className="closeBtn">
                        <i className="fas fa-times"></i>
                    </button>
                </Link>
                <h1>로그인</h1>
                <div>
                    <button onClick={handleShow}>회원</button>
                    <button onClick={handleShow}>비회원</button>
                </div>
            </Header>
            <Main>
            {isUser ? <Login/> : <NotUserOrder/>}
            </Main>
        </Section>
        </Div>)
        }
        </>
    );
}

export default OrderTypePage;
