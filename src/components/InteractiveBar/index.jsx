import { useState } from 'react';
import * as S from './styles';
import TabPanel, { Tab } from '../TabPanel';
import Chat from '../Chat';
import Promotions from '../Promotions';
import Pools from '../Pools';

import { BsFillChatRightTextFill } from 'react-icons/bs';
import { FaPercent } from 'react-icons/fa';
import { BsListCheck } from 'react-icons/bs';

const InteractiveBar = () => {
    const [tabActive, setTabActive] = useState(3);
    const [active, setActive] = useState(true);

    const openTab = (tab) => {
        setActive(true);
        setTabActive(tab);
    };

    return (
        <S.Container active={active}>
            <S.ButtonGroup>
                <button onClick={() => openTab(1)}>
                    <BsFillChatRightTextFill />
                </button>
                <button onClick={() => openTab(2)}>
                    <BsListCheck />
                </button>
                <button onClick={() => openTab(3)}>
                    <FaPercent />
                </button>
            </S.ButtonGroup>
            <TabPanel
                tabActive={tabActive}
                onClose={() => setActive(false)}
                style={{ width: 470 }}
            >
                <Tab tabIndex={1} title="Chat" component={<Chat />} />
                <Tab tabIndex={2} title="Enquetes" component={<Pools />} />
                <Tab
                    tabIndex={3}
                    title="Promoções"
                    component={<Promotions />}
                />
            </TabPanel>
        </S.Container>
    );
};

export default InteractiveBar;
