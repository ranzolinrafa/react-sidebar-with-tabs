import * as S from './styles';

const PromotionCard = ({ ...props }) => {
    const { description, url, partner, image } = props;

    return (
        <S.Container image={image}>
            <S.Partner>{partner}</S.Partner>
            <S.Description>{description}</S.Description>
            <S.Link href={url} target="_blank">
                Resgatar
            </S.Link>
        </S.Container>
    );
};

export default PromotionCard;
