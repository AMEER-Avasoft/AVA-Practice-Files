import {StyleSheet} from 'react-native';
import {
  getHeightEquivalent,
  getWidthEquivalent,
} from '../../../../Helpers/Utilities/Utilities';

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: getWidthEquivalent(58),
    height: getHeightEquivalent(48),
    backgroundColor:"#000",
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    borderRightWidth: 1,
    borderRightColor: "blue",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: getWidthEquivalent(12),
    paddingVertical: getHeightEquivalent(16),
  },
  flagSize: {
    height: getHeightEquivalent(16),
    width: getWidthEquivalent(22),
  },
  dropdownMenuStyle: {
    backgroundColor: `#ffffff`,
    borderRadius: 5,
    width: getWidthEquivalent(100),
  },
  dropdownItemStyle: {
    width: '100%',
    paddingHorizontal: getWidthEquivalent(12),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: getHeightEquivalent(16),
  },
  tickIcon: {height: 10, width: 10, marginLeft: 5},
});

export default styles;
