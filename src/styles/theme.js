/**
 * New theme objects
 */

export const dark = {
    color: {
        background: '#111111',
        border: '#303030',
        text: '#ffffff'
    }
};

export const light = {
    color: {
        background: '#ffffff',
        border: '#111111',
        text: '#111111'
    }
};

/**
 * Current theme object
 */
const theme = {
    colors: {
        primary: '#F80027',
        white: '#FFFFFF',
        trueBlack: '#000',
        black: '#111111',
        grey: '#757579',
        greyDisabled: '#DCDCDC',
        lightGrey: '#E7E7E8',
        warning: '#ffca61',
        error: '#F80027'
    },
    colorsDark: {
        primary: '#F80027',
        white: '#111111',
        trueBlack: '#FFFFFF',
        black: '#E7E7E8',
        darkGrey: '#E7E7E8',
        grey: '#757579',
        greyDisabled: '#DCDCDC',
        lightGrey: '#E7E7E8',
        warning: '#ffca61',
        error: '#F80027'
    },

    fonts: {
        display: {
            titleExtraLarge: {
                fontFamily: 'Neue Haas Grotesk Display Pro',
                fontSize: '8rem', // 64px
                lineHeight: '8rem', // 64px
                letterSpacing: -1,
                fontWeight: 'bold'
            },
            titleLarge: {
                fontFamily: 'Neue Haas Grotesk Display Pro',
                fontSize: '6rem', // 48px
                lineHeight: '5.25rem', // 42px
                letterSpacing: -1,
                fontWeight: 'bold'
            },
            title: {
                fontFamily: 'Neue Haas Grotesk Display Pro',
                fontSize: '5rem', // 40px
                lineHeight: '6rem', // 48px
                fontWeight: 'bold',
                letterSpacing: -0.5
            },
            titleSmall: {
                fontFamily: 'Neue Haas Grotesk Display Pro',
                fontSize: '4rem', // 32px
                lineHeight: '4rem', // 32px
                fontWeight: 'bold'
            },
            titleTiny: {
                fontFamily: 'Neue Haas Grotesk Display Pro',
                fontSize: '3.5rem', // 28px
                lineHeight: '4rem', // 32px
                letterSpacing: -0.5,
                fontWeight: 'bold'
            },
            titleIntro: {
                fontFamily: 'Neue Haas Grotesk Display Pro',
                fontSize: '4rem', // 32px
                lineHeight: '4rem', // 32px
                fontWeight: 'normal'
            },
            titleOnboarding: {
                fontFamily: 'Neue Haas Grotesk Display Pro',
                fontSize: '4.5rem', // 36px
                lineHeight: '5rem', // 40px
                fontWeight: 'bold',
                letterSpacing: -0.5
            },
            input: {
                fontFamily: 'Neue Haas Grotesk Display Pro',
                fontSize: '4rem', // 32px
                lineHeight: '6.25rem', // 50px
                fontWeight: 500
            }
        },

        text: {
            paragraphExtraLarge: {
                fontFamily: 'Neue Haas Grotesk Text Pro',
                fontSize: '3rem', // 24px
                lineHeight: '3rem', // 24px
                fontWeight: 500
            },
            paragraphLarge: {
                fontFamily: 'Neue Haas Grotesk Text Pro',
                fontSize: '2.25rem', // 18px
                lineHeight: '3.375rem', // 27px
                fontWeight: 'normal'
            },
            paragraph: {
                fontFamily: 'Neue Haas Grotesk Text Pro',
                fontSize: '2rem', // 16px
                lineHeight: '3rem', // 24px
                fontWeight: 'normal'
            },
            paragraphSmall: {
                fontFamily: 'Neue Haas Grotesk Text Pro',
                fontSize: '1.75rem', // 14px
                lineHeight: '3rem', // 24px
                fontWeight: 'normal'
            },
            paragraphTiny: {
                fontFamily: 'Neue Haas Grotesk Text Pro',
                fontWeight: 'normal',
                fontSize: '1.375rem', // 11px
                lineHeight: '2rem', // 16px
                letterSpacing: '0.0625rem'
            }
        }
    },

    breakpoints: {
        xs: '480px',
        sm: '768px',
        md: '992px',
        lg: '1200px',
        xlg: '1440px'
    }
};

export default theme;
