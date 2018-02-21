import FontFamilies from './FontFamilies'
import { theme } from '../../../styles'

const fontFamily = `'Avenir Next W01',sans-serif`
const fontSize = 14 // px
const fontWeightLight = 300
const fontWeightRegular = 400
const fontWeightMedium = 500
const htmlFontSize = 16

function pxToRem(value) {
  return `${value / htmlFontSize}rem`
}

export default {
  root: {
    display: 'block',
    margin: 0,
  },
  display4: {
    fontSize: pxToRem(112),
    fontWeight: fontWeightLight,
    fontFamily,
    letterSpacing: '-.04em',
    lineHeight: pxToRem(32),
    marginLeft: '-.04em',
  },
  display3: {
    fontSize: pxToRem(56),
    fontWeight: fontWeightRegular,
    fontFamily,
    lineHeight: '-0.2px',
    marginLeft: '-.04em',
  },
  display2: {
    fontSize: pxToRem(45),
    fontWeight: fontWeightRegular,
    fontFamily,
    marginLeft: '-.04em',
  },
  display1: {
    fontSize: pxToRem(24),
    fontWeight: fontWeightRegular,
    fontFamily,
    marginLeft: '-.04em',
  },
  headline: {
    fontSize: pxToRem(24),
    fontWeight: fontWeightRegular,
    fontFamily,
  },
  title: {
    fontSize: pxToRem(24),
    fontWeight: fontWeightMedium,
    fontFamily,
  },
  subheading: {
    fontSize: pxToRem(16),
    fontWeight: fontWeightMedium,
    fontFamily,
  },
  body2: {
    fontSize: pxToRem(14),
    fontWeight: fontWeightMedium,
    fontFamily,
  },
  body1: {
    fontSize: pxToRem(14),
    fontWeight: fontWeightRegular,
    fontFamily,
  },
  caption: {},
  button: {},
  alignLeft: {
    textAlign: 'left',
  },
  alignCenter: {
    textAlign: 'center',
  },
  alignRight: {
    textAlign: 'right',
  },
  alignJustify: {
    textAlign: 'justify',
  },
  noWrap: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  gutterBottom: {
    marginBottom: '0.35em'
  },
  paragraph: {
    marginBottom: theme.spacing.unit * 2
  },
  colorInherit: {
    color: 'inherit'
  },
  colorPrimary: {
    color: theme.palette.primary
  },
  colorSecondary: {
    color: theme.palette.secondary
  },
  colorTextSecondary: {
    color: theme.palette.text.secondary
  },
  colorError: {
    color: theme.palette.error.main
  }
}
