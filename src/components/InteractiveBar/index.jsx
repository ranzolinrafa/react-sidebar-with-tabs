import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from './styles';
import TabPanel from '../TabPanel';

import { dark, light } from '../../styles/theme';

const InteractiveBar = ({ variant, tabs, initialTab }) => {
    const [active, setActive] = useState(true);

    return (
        <ThemeProvider theme={variant === 'light' ? light : dark}>
            <S.Container active={active}>
                <TabPanel
                    tabs={tabs}
                    initialTab={initialTab}
                    style={{ width: 470 }}
                    onClickClose={() => setActive(false)}
                    onClickTabButton={() => setActive(true)}
                />
            </S.Container>
        </ThemeProvider>
    );
};

export default InteractiveBar;
