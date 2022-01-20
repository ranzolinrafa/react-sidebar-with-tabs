import { filterTabs, getTab, tabsConfig } from './tabs';

it('should return an array of tabs or an empty object', () => {
    const filter = ['chat', 'promotions'];
    const result = filterTabs(filter);

    result.forEach((item) => {
        expect(item).toMatchObject({
            name: expect.stringContaining(
                filter.filter((filterItem) => filterItem === item.name)[0]
            ),
            title: expect.any(String),
            icon: expect.any(Function),
            component: expect.any(Function)
        });
    });
});

it('should return an object with a tab', () => {
    tabsConfig.forEach((item) => {
        let result = getTab(item.name);

        expect(result).toMatchObject({
            name: expect.stringContaining(item.name),
            title: expect.any(String),
            icon: expect.any(Function),
            component: expect.any(Function)
        });
    });
});
