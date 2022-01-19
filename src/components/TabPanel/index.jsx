import React from 'react';
import { getTab } from '../../configs/tabs';
import { MdClose } from 'react-icons/md';
import * as S from './styles';

const TabPanel = ({ tabActive, children, onClose, tabs, ...props }) => {
    const { title, component: TabComponent } = getTab(tabActive);

    return (
        <div {...props}>
            <S.Header>
                <h2>{title}</h2>
                <S.CloseButton onClick={onClose}>
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
