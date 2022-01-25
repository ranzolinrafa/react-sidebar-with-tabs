import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import * as S from './styles';

const TabPanel = ({ onClickClose, children, onClickTabButtons, ...props }) => {
    const [tabActive, setTabActive] = useState(0);

    let tab;
    let title;

    // TODO: useMemo?
    React.Children.map(children, (item) => {
        if (item.props.tabIndex === tabActive) {
            tab = item;
            title = item.props.title;
        }
    });

    const handleNavButtonClick = (tabIndex) => {
        setTabActive(tabIndex);
        if (onClickTabButtons) onClickTabButtons();
    };

    return (
        <div {...props}>
            <S.Header>
                <h2>{title}</h2>
                <S.CloseButton onClick={onClickClose}>
                    <MdClose size={24} color="#ffffff" />
                </S.CloseButton>

                <S.Navigation>
                    {React.Children.map(children, (item) => {
                        const { tabIndex, icon: Icon } = item.props;

                        return (
                            <S.NavButton
                                key={tabIndex}
                                onClick={() => handleNavButtonClick(tabIndex)}
                                active={tabIndex === tabActive}
                            >
                                <Icon size={16} />
                            </S.NavButton>
                        );
                    })}
                </S.Navigation>
            </S.Header>
            {tab}
        </div>
    );
};

export const Tab = ({ component: Component, ...props }) => {
    return (
        <>
            <Component {...props} />
        </>
    );
};

export default TabPanel;
