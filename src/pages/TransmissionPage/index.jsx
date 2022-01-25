import InteractiveBar from '../../components/InteractiveBar';
import * as S from './styles';

import Chat from '../../components/Chat';
import Pools from '../../components/Pools';
import Promotions from '../../components/Promotions';
import { Tab } from '../../components/TabPanel';

import { BsFillChatRightTextFill } from 'react-icons/bs';
import { FaPercent } from 'react-icons/fa';
import { BsListCheck } from 'react-icons/bs';

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
                <InteractiveBar active variant="dark">
                    <Tab
                        tabIndex="chat"
                        title="Chat"
                        icon={BsFillChatRightTextFill}
                        component={Chat}
                        transmission={99}
                    />
                    <Tab
                        tabIndex="pools"
                        title="Enquetes"
                        icon={BsListCheck}
                        component={Pools}
                    />
                    <Tab
                        tabIndex="promotions"
                        title="Promoções"
                        icon={FaPercent}
                        component={Promotions}
                    />
                </InteractiveBar>
            </S.Box>
        </S.Container>
    );
};

export default TransmissionPage;
