import styled from 'styled-components';

export const Header = styled.header`
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
