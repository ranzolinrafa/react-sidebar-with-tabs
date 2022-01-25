import styled from 'styled-components';

export const Header = styled.header`
    position: relative;
    background-color: ${(props) => props.theme.color.background};
    border-bottom: 1px solid ${(props) => props.theme.color.border};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1em;
    margin-bottom: 1em;

    @media (max-width: ${(props) => props.theme.breakpoint.tablet}) {
        padding-bottom: 0;
    }
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
    width: 100%;
    justify-content: space-between;
    margin-top: 1em;

    @media (min-width: ${(props) => props.theme.breakpoint.tablet}) {
        width: unset;
        flex-direction: column;
        gap: 0.75em;

        position: absolute;
        left: -0.75em;
        top: 0.75em;
        transform: translateX(-100%);
    }
`;

export const NavButton = styled.button`
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme.color.text};
    padding: 1em;

    ${(props) => props.active && 'box-shadow: 0px 1px 0px 0px #F80027;'}

    @media (min-width: ${(props) => props.theme.breakpoint.tablet}) {
        background-color: ${(props) => `${props.theme.color.background}90`};
        display: flex;
        box-shadow: none;
        border-radius: 50%;
        transition: background-color 300ms;

        &:hover {
            background-color: #1e1e1e;
        }
    }
`;
