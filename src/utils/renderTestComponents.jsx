import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { dark } from '../styles/theme';

export const renderWithTheme = (children) => {
    return render(<ThemeProvider theme={dark}>{children}</ThemeProvider>);
};
