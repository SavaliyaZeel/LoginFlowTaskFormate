import { FlatList, Image, StatusBar, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { getDataWatcher } from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../../common/styles/color';
import { Images } from '../../common/styles/image';
import { FontFamily } from '../../common/styles/font';
import { styles } from './styles';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const {getData} = useSelector((state)=>({
    getData: state.getDataReducer.getData
  }))

  useEffect(() => {
    dispatch(getDataWatcher({accessToken: ""}))
  }, [])

  return (
    console.log("getData", getData),
    <View style={styles.mainBox}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <View style={styles.box}>
        <FlatList showsVerticalScrollIndicator={false} data={getData.events} renderItem={({ item, index }) => (
          <View style={styles.eventBox}>
            <View style={styles.eventSemiBox}>
              <Image source={{uri: item.event_profile_img}} style={styles.image} />
              <View style={styles.eventDetailsBox}>
                <Text style={styles.title} numberOfLines={1}>
                  {item.event_name}
                </Text>
                <View style={styles.descriptionBox}>
                  <Text style={styles.date}>{item.readable_to_date} - {item.readable_from_date}</Text>
                  <Text style={styles.city}>{item.city}, {item.country}</Text>
                </View>
                <Text style={styles.price}>€{item.event_price_to} - €{item.event_price_from}</Text>
                <View style={styles.container}>
                  <View style={styles.flatlist}>
                    <FlatList showsHorizontalScrollIndicator={false} data={item.keywords} horizontal renderItem={({item, index})=>(
                      <View style={[styles.optionBox, {marginLeft: index != 0 ? 5 : 0}]}>
                        <Text style={styles.option}>{item}</Text>
                      </View>
                    )} />
                </View>
                  <View style={styles.descriptionBox}>
                    <Image source={Images.share} style={styles.icon} />
                    <Image source={item.isFavorite == 0 ? Images.green_heart :Images.heart} style={[styles.icon, styles.ml5]} />
                </View>
                </View>
              </View>
            </View>
            <Image source={Images.rigth_arrow} style={styles.arrowIcon} />
          </View>
        )} />
      </View>
    </View>
  );
};

export default HomeScreen;