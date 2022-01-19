import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${(props) => props.theme.color.background};
    color: ${(props) => props.theme.color.text};

    transition: width 300ms;

    position: relative;
    width: 470px;
    height: 100vh;

    ${(props) => {
        return !props.active && `width: 0`;
    }}
`;

export const CloseButton = styled.button`
    position: absolute;
    right: 0;
    margin: 1em;
`;
