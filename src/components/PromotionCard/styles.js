import styled from 'styled-components';

export const Container = styled.div`
    background: url(${(props) => props.image}) 0% 0% / cover no-repeat
        rgb(17, 17, 17);
    margin: 20px auto;
    border-radius: 24px;
    height: 225px;
    position: relative;
    overflow: hidden;
    padding: 1.5em;
`;

export const Title = styled.h2``;

export const Partner = styled.p`
    font-size: 1.25em;
    line-height: 3rem;
    font-weight: normal;
    color: rgb(255, 255, 255);
`;
export const Description = styled.p`
    font-size: 1.5em;
    max-width: 205px;
`;

export const Link = styled.a`
    font-size: 0.75em;
    font-weight: bold;
    display: inline-flex;
    background: #ffffff;
    color: #000000;
    padding: 12px 28px;
    border-radius: 4rem;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    margin-top: 2em;
`;

export const Image = styled.img``;
export const ImageContainer = styled.div``;
