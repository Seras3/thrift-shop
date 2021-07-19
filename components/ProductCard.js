import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

import TextPrice from './TextPrice';
import BuyButton from './BuyButton';

const ProductCard = ({ navigation, product }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: product.imageUrl }} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <TextPrice style={styles.price}>{product.price}</TextPrice>
      </View>
      <View style={styles.actionsContainer}>
        <Button
          containerStyle={{ minWidth: 100, width: '40%', height: 50 }}
          buttonStyle={{ flex: 1, backgroundColor: colors.primaryDark }}
          icon={
            <Icon
              name="search"
              size={30}
              color="white"
              style={{ paddingRight: 10 }}
            />
          }
          title="View"
          onPress={() => {
            navigation.navigate('Details', { productId: product.id, productTitle: product.title });
          }}
        />
        <BuyButton onPress={() => {
          navigation.navigate('Cart');
        }} />
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    height: 400,
    width: '100%',
    alignItems: 'center',
    marginBottom: 30
  },
  imgContainer: {
    width: '100%',
    height: '60%',
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 4
  },
  img: {
    width: '100%',
    height: '100%'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20
  },
  actionsContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
