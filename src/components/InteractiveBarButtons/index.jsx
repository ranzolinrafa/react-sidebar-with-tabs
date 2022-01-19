import { memo, useMemo } from 'react';
import { filterTabs } from '../../configs/tabs';
import * as S from './styles';

const InteractiveBarButtons = ({ onClick, tabs }) => {
    const filteredTabs = useMemo(() => filterTabs(tabs), [tabs]);

    return (
        <S.ButtonGroup>
            {filteredTabs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                    <button key={item.name} onClick={() => onClick(item.name)}>
                        <IconComponent />
                    </button>
                );
            })}
        </S.ButtonGroup>
    );
};

export default memo(InteractiveBarButtons);
