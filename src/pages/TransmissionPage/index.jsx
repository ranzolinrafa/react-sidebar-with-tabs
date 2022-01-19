import InteractiveBar from '../../components/InteractiveBar';
import * as S from './styles';

const ContainerComponent = () => {
    return (
        <S.Image
            alt="Imagem de fundo"
            src="https://images.unsplash.com/photo-1642201344145-0d49517e76e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2123&q=80"
        />
    );
};

const TransmissionPage = () => {
    return (
        <S.Container>
            <S.Box style={{ maxHeight: '100vh', overflow: 'hidden' }}>
                <ContainerComponent />
            </S.Box>
            <S.Box flex="unset">
                <InteractiveBar
                    active
                    variant="dark"
                    tabs={['chat', 'promotions', 'pools']}
                />
            </S.Box>
        </S.Container>
    );
};

export default TransmissionPage;
