import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Vocabulary() {
  return (
    <View style={styles.card}>
      <View style={styles.list}>
        <Text style={styles.label}>Word</Text>
        <Text>Word</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.label}>Word</Text>
        <Text>Word</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.label}>Word</Text>
        <Text>Word</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.label}>Word</Text>
        <Text>Word</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontWeight: '900',
    fontSize: hp('2.3%'),
  },
});
