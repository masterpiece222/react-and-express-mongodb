import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Header
  firstimg: {
    float: 'left',
    paddingTop: [{ unit: 'px', value: -1 }]
  },
  ul: {
    listStyleType: 'none',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    paddingTop: [{ unit: 'px', value: 0 }],
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    fontSize: [{ unit: 'px', value: 17 }]
  },
  li: {
    float: 'left',
    'screen&&<w900': {
      float: 'none',
      width: [{ unit: '%H', value: 1 }]
    }
  },
  'li a': {
    display: 'block',
    color: 'black',
    textAlign: 'center',
    padding: [{ unit: 'px', value: 12 }, { unit: 'px', value: 16 }, { unit: 'px', value: 12 }, { unit: 'px', value: 16 }],
    textDecoration: 'none'
  },
  'li a:hover:not(active)': {
    backgroundColor: '#a9a9a9'
  },
  active: {
    backgroundColor: '#4CAF50'
  },
  underline: {
    borderBottom: [{ unit: 'px', value: 3 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'black' }]
  },
  // footer
  buttom: {
    borderTop: [{ unit: 'px', value: 3 }],
    textAlign: 'center',
    paddingTop: [{ unit: 'px', value: 15 }],
    width: [{ unit: '%H', value: 1 }],
    float: 'left',
    margin: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }],
    backgroundColor: 'blue'
  },
  fa: {
    fontSize: [{ unit: '%V', value: 1.3 }],
    color: 'black'
  },
  boxing1: {
    maxWidth: [{ unit: '%H', value: 0.96 }],
    margin: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }]
  },
  '*': {
    boxSizing: 'border-box'
  },
  // Media Queries
});
