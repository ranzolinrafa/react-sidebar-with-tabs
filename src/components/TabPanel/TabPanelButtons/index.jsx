import { memo, useMemo } from 'react';
import { filterTabs } from '../../../configs/tabs';
import * as S from './styles';

const TabPanelButtons = ({ setTabActive, onClick, tabs }) => {
    const filteredTabs = useMemo(() => filterTabs(tabs), [tabs]);

    const handleClick = (tab) => {
        onClick();
        setTabActive(tab);
    };

    return (
        <S.ButtonGroup>
            {filteredTabs.map((item) => {
                const IconComponent = item.icon;
                return (
                    <button
                        key={item.name}
                        onClick={() => handleClick(item.name)}
                    >
                        <IconComponent />
                    </button>
                );
            })}
        </S.ButtonGroup>
    );
};

export default memo(TabPanelButtons);
