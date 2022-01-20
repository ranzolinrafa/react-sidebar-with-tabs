import { renderWithTheme } from '../../../utils/renderTestComponents';
import TabPanelButtons from '.';
import tabsConfig from '../../../configs/tabs';

describe('<TabPanelButtons />', () => {
    it('should render based in a config object', () => {
        let tabs = [];
        tabsConfig.forEach((item) => tabs.push(item.name));

        const { container } = renderWithTheme(
            <TabPanelButtons tabs={['chat']} />
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
