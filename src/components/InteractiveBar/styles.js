import styled from 'styled-components';

export const Container = styled.div`
    background-color: #111111;
    color: #ffffff;

    transition: width 300ms;

    position: relative;
    width: 400px;
    height: 100vh;

    ${(props) => {
        return !props.active && `width: 0`;
    }}
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    position: absolute;
    top: 1em;
    left: -64px;

    button {
        display: flex;
        background-color: #11111190;
        color: #ffffff;
        border: 0;
        border-radius: 50%;
        padding: 1em;
        transition: background-color 300ms;

        &:hover {
            background-color: #1e1e1e;
        }
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    right: 0;
    margin: 1em;
`;
