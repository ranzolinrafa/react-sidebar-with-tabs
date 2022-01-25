import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from './styles';

import TabPanel from '../TabPanel';

import { dark, light } from '../../styles/theme';

const InteractiveBar = ({ variant, children }) => {
    const [active, setActive] = useState(true);

    return (
        <ThemeProvider theme={variant === 'light' ? light : dark}>
            <S.Container active={active}>
                <TabPanel
                    style={{ width: 470 }}
                    onClickClose={() => setActive(false)}
                >
                    {children}
                </TabPanel>
            </S.Container>
        </ThemeProvider>
    );
};

export default InteractiveBar;
