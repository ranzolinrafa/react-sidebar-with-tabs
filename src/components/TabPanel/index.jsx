import React from 'react';
import * as S from './styles';
import { MdClose } from 'react-icons/md';

const TabPanel = ({ tabActive, children, onClose, ...props }) => {
    let tab;
    let title;

    React.Children.map(children, function (item) {
        if (item.props.tabIndex === tabActive) {
            tab = item;
            title = item.props.title;
        }
    });

    return (
        <div {...props}>
            <S.Header>
                <h2>{title}</h2>
                <S.CloseButton onClick={onClose}>
                    <MdClose size={24} color="#ffffff" />
                </S.CloseButton>
            </S.Header>
            {tab}
        </div>
    );
};

export const Tab = ({ component }) => {
    return <div>{component}</div>;
};

export default TabPanel;
