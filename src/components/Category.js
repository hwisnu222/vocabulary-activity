import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercerntageToDP as hp,
} from 'react-native-responsive-screen';

export default function Category({onPress}) {
  return (
    <View style={styles.category}>
      <Text style={styles.titleCategory}>Happy</Text>
      <Text style={styles.bodyCategory}>Gembira</Text>
      <TouchableOpacity style={styles.buttonCategory} onPress={() => onPress()}>
        <Text style={styles.textCategory}>Show</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    alignSelf: 'flex-start',
    width: wp('41%'),
    marginRight: 8.6,
    marginBottom: 16,
    justifyContent: 'space-between',
    align: 'space-between',
  },
  titleCategory: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '900',
  },
  bodyCategory: {
    marginBottom: 16,
  },
  buttonCategory: {
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 24,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  textCategory: {
    color: '#ffffff',
  },
});
