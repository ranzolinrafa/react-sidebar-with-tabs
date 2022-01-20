import React, { useEffect, useState } from 'react';
import { getTab } from '../../configs/tabs';
import { MdClose } from 'react-icons/md';
import * as S from './styles';

import TabPanelButtons from './TabPanelButtons';

const TabPanel = ({ onClickClose, tabs, initialTab, onClickTabButton }) => {
    const [tabActive, setTabActive] = useState(initialTab);
    const { title, component: TabComponent } = getTab(tabActive);

    useEffect(() => setTabActive(initialTab), [initialTab]);

    return (
        <div>
            <TabPanelButtons
                tabs={tabs}
                setTabActive={setTabActive}
                onClick={onClickTabButton}
            />
            <S.Header>
                <h2>{title}</h2>
                <S.CloseButton onClick={onClickClose}>
                    <MdClose size={24} color="#ffffff" />
                </S.CloseButton>
            </S.Header>
            <TabComponent />
            <Tab />
        </div>
    );
};

export const Tab = ({ component }) => {
    return <div>{component}</div>;
};

export default TabPanel;
