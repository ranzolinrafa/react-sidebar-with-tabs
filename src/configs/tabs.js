import { BsFillChatRightTextFill } from 'react-icons/bs';
import { FaPercent } from 'react-icons/fa';
import { BsListCheck } from 'react-icons/bs';

import Chat from '../components/Chat';
import Promotions from '../components/Promotions';
import Pools from '../components/Pools';

export const tabsConfig = [
    {
        name: 'chat',
        title: 'Chat',
        icon: BsFillChatRightTextFill,
        component: Chat
    },
    {
        name: 'pools',
        title: 'Enquetes',
        icon: BsListCheck,
        component: Pools
    },
    {
        name: 'promotions',
        title: 'Promoções',
        icon: FaPercent,
        component: Promotions
    }
];

export function filterTabs(tabs) {
    return (
        tabsConfig.filter((item) => {
            return tabs.includes(item.name);
        }) || {}
    );
}

export function getTab(tab) {
    return (
        tabsConfig.find((item) => {
            return item.name === tab;
        }) || {}
    );
}

export default tabsConfig;
