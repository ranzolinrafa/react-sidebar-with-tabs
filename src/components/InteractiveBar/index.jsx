import { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from './styles';
import TabPanel from '../TabPanel';
import InteractiveBarButtons from '../InteractiveBarButtons';

import { dark, light } from '../../styles/theme';

const InteractiveBar = ({ variant, tabs }) => {
    const [tabActive, setTabActive] = useState('chat');
    const [active, setActive] = useState(true);

    const openTab = useCallback((tab) => {
        setActive(true);
        setTabActive(tab);
    }, []);

    return (
        <ThemeProvider theme={variant === 'light' ? light : dark}>
            <S.Container active={active}>
                <InteractiveBarButtons onClick={openTab} tabs={tabs} />
                <TabPanel
                    tabs={tabs}
                    tabActive={tabActive}
                    onClose={() => setActive(false)}
                    style={{ width: 470 }}
                />
            </S.Container>
        </ThemeProvider>
    );
};

export default InteractiveBar;
