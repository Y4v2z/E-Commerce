//import liraries
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/color';
import {height} from '../../utils/constant';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLİST} from '../../utils/routes';
import {ArrowRight2} from 'iconsax-react-native';

// create a component
const CategoryCard = ({item}) => {
  const naigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        naigation.navigate(PRODUCTLİST, {category: item, title: item})
      }>
      <Text
        style={{fontSize: 24, fontWeight: '600', textTransform: 'capitalize'}}>
        {item}
      </Text>
      <ArrowRight2 size="32" color="black" fontWeight={'600'} />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.SOFTGRAY,
    paddingHorizontal: 20,
    minHeight: height / 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    flexDirection: 'row',
  },
});

//make this component available to the app
export default CategoryCard;
