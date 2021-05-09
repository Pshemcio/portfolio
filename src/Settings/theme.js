const Theme = {
    colors: {
        // primaryColor: '#0B2027',
        primaryColor: '#181818',
        primaryColorLight: '#252525',
        secondaryColor: '#f2f5ea',
        tertiaryColor: '#1ee5ff',
        tertiaryColorDark: '#1ee5ff1a',
        quaternaryColor: '#e75a7c'
    },
    typography: {
        primaryFont: 'Poppins, Roboto, Helvetica, sans-serif',
        secondaryFont: 'Montserrat, Roboto, Ubuntu, sans-serif'
    },
    breakpoints: {
        xs: `(min-width: 512px)`,
        sm: `(min-width: 768px)`,
        smPortrait: `(orientation: portrait) and (min-width: 768px)`,
        md: `(min-width: 992px)`,
        lg: `(min-width: 1200px)`,
        xl: `(min-width: 1440px)`
    },
    structure: {
        paddingMobile: '20px',
        paddingDesktop: '10vw'
    }
}

export default Theme;