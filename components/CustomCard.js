import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import DeleteItemButton from '../components/DeleteItemButton';


const CustomCard = ({ children, items, handleDeleteProduct }) => {
  const { colors } = useTheme();

  let deleteButton;
  if (handleDeleteProduct) {
    deleteButton = <DeleteItemButton onPress={() => handleDeleteProduct(itemData.item.product.id)} />;
  }


  return (
    <View style={StyleSheet.compose(styles.cardContainer, { borderColor: colors.primary })}>
      {children}
      <FlatList
        keyExtractor={(item) => item.product.id}
        style={styles.list}
        data={items}
        renderItem={(itemData) =>
        (
          <View style={StyleSheet.compose(styles.cartRow, { borderColor: colors.primary })}>
            <Text style={styles.textCnt}>{itemData.item.cnt} x</Text>
            <Text style={styles.textTitle}>{itemData.item.product.title}</Text>
            <Text style={styles.textPrice}>{itemData.item.product.price}$</Text>
            {deleteButton}
          </View>
        )}
      />
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: '100%',
    paddingBottom: 20,
    backgroundColor: '#f2e5c9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    overflow: 'hidden'
  },
  list: {
    width: '90%',
    flex: 1,
    marginTop: 30
  },
  cartRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    borderBottomWidth: 2,
  },
  textCnt: {
    fontSize: 15,
    flex: 1
  },
  textTitle: {
    fontSize: 15,
    flex: 3
  },
  textPrice: {
    fontSize: 15,
    flex: 1,
    textAlign: 'right'
  }
});