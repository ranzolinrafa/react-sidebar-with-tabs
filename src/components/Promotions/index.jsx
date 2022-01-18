import * as S from './styles';
import PromotionCard from '../PromotionCard';
import { useTransmission } from '../../contexts/transmission';

const Promotions = () => {
    const { transmission_id, title } = useTransmission();
    console.log(transmission_id, title);

    return (
        <S.Container>
            <PromotionCard
                description="Lorem ipsum dolor sit amet."
                partner="Ambev Tech"
                url="http://www.zedelivery.com"
                image="https://loungestoragedev.blob.core.windows.net/lounge-container/sales/810112d90461c9e0-1642428967316.png"
            />
        </S.Container>
    );
};

export default Promotions;
