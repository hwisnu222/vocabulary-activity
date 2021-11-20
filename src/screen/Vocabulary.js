import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// components
import List from '../components/List';

export default function Vocabulary({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text
          style={styles.titleHeader}
          onPress={() => navigation.navigate('home')}>
          Vocabulary
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <List />
        <List />
        <List />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
  },
  header: {
    paddingHorizontal: hp('2%'),
    paddingVertical: hp('3%'),
    marginBottom: 16,
  },
  titleHeader: {
    fontSize: hp('3%'),
    fontWeight: '900',
  },
});
