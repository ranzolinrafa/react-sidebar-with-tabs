import styled from 'styled-components';

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    position: absolute;
    top: 1em;
    left: -64px;

    button {
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
    }
`;
