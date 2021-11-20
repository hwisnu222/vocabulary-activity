import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// components
import Card from '../components/Card';
import Category from '../components/Category';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {/* header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.titleHeader}>Good morning, Wisnu</Text>
            <Text style={styles.subHeader}>Let's to practice today!</Text>
          </View>
          <Text>H</Text>
        </View>
        <View>
          <Text style={styles.label}>Practice word</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.wordList}>
            <Card />
            <Card />
          </ScrollView>
          <Text style={styles.label}>Category</Text>
          <View style={styles.categoryWrap}>
            <Category onPress={() => navigation.navigate('vocabulary')} />
            <Category onPress={() => navigation.navigate('vocabulary')} />
            <Category onPress={() => navigation.navigate('vocabulary')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  scrollView: {flex: 1},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  titleHeader: {
    fontSize: hp('3%'),
    fontWeight: '900',
  },
  subHeader: {
    opacity: 0.75,
  },
  label: {
    fontWeight: '900',
    marginBottom: 16,
    fontSize: hp('3%'),
  },
  wordList: {flex: 1},
  categoryWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
