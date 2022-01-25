import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from './styles';

import TabPanel, { Tab } from '../TabPanel';
import Chat from '../Chat';
import Pools from '../Pools';
import Promotions from '../Promotions';

import { BsFillChatRightTextFill } from 'react-icons/bs';
import { FaPercent } from 'react-icons/fa';
import { BsListCheck } from 'react-icons/bs';

import { dark, light } from '../../styles/theme';

const InteractiveBar = ({ variant }) => {
    const [active, setActive] = useState(true);

    return (
        <ThemeProvider theme={variant === 'light' ? light : dark}>
            <S.Container active={active}>
                <TabPanel
                    style={{ width: 470 }}
                    onClickClose={() => setActive(false)}
                    onClickTabButtons={() => setActive(true)}
                >
                    <Tab
                        tabIndex={0}
                        title="Chat"
                        icon={BsFillChatRightTextFill}
                        component={Chat}
                        transmission={99}
                    />
                    <Tab
                        tabIndex={1}
                        title="Enquetes"
                        icon={BsListCheck}
                        component={Pools}
                    />
                    <Tab
                        tabIndex={2}
                        title="Promoções"
                        icon={FaPercent}
                        component={Promotions}
                    />
                </TabPanel>
            </S.Container>
        </ThemeProvider>
    );
};

export default InteractiveBar;
