import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercerntageToDP as hp,
} from 'react-native-responsive-screen';

export default function Card() {
  return (
    <View style={styles.card}>
      <Text style={styles.titleCard}>Happy</Text>
      <Text style={styles.bodyCard}>Gembira</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Show</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 24,
    backgroundColor: '#000000',
    borderRadius: 24,
    marginBottom: 40,
    width: wp('80%'),
    marginRight: 16,
  },
  titleCard: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 16,
  },
  bodyCard: {
    color: '#ffffff',
    marginBottom: 24,
  },
  button: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: '#ffffff',
  },
  textButton: {
    color: '#000000',
  },
});
