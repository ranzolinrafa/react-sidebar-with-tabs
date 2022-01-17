import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const Box = styled.div`
    flex: ${(props) => props.flex || 1};
`;

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;
