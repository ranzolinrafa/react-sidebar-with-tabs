import styled from 'styled-components';

export const Header = styled.header`
    position: relative;
    background-color: ${(props) => props.theme.color.background};
    border-bottom: 1px solid ${(props) => props.theme.color.border};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    margin-bottom: 1em;
`;

export const CloseButton = styled.button`
    display: flex;
    border: 0;
    margin: 0;
    padding: 0;
    background: transparent;
`;

export const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 0.75em;

    position: absolute;
    left: -0.75em;
    top: 0.75em;
    transform: translateX(-100%);
`;

export const NavButton = styled.button`
    display: flex;
    background-color: ${(props) => `${props.theme.color.background}90`};
    color: ${(props) => props.theme.color.text};
    border: 0;
    border-radius: 50%;
    padding: 1em;
    transition: background-color 300ms;

    &:hover {
        background-color: #1e1e1e;
    }
`;
