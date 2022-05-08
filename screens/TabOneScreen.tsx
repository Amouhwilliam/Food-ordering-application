import * as React from 'react';
import { StyleSheet, ImageBackground, View, TextInput, TouchableOpacity, FlatList, Image, Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Category from './DATA';
//import { Text } from '../components/Themed'; disabled theme

export default function TabOneScreen() {
  const [value, onChangeText] = React.useState('');
  const [selectedId, setSelectedId] = React.useState(0);
  const [menu, setMenu] = React.useState(Category[0].menu);

  const renderCategoryItem = (item: any) => (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          borderBottomWidth: item.id === selectedId ? 2 : 0,
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderColor: '#e65100'
        }}
        onPress={() => {
        setSelectedId(item.id);
        setMenu(item.menu);
        }}>
        <Text
          style={{
            color: item.id === selectedId ? '#e65100' : 'gray',
            fontSize: 18,
            marginHorizontal: 20,
            marginVertical: 6,
            fontFamily: 'Nunito_700Bold'
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
  
  const renderMenuItem = (item: any) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.menuTitle}>{item.title}</Text>
        <Text style={styles.menuPrice}>{item.price}€</Text>
      </View>
      <View style={styles.imageUtils}>
      </View>
      <Image
        style={styles.menuImage}
        source={item.image}
      />
    </View>
  );

  return (
    <ImageBackground style={styles.container} source={require('../assets/images/background1.png')}>
      <View style={styles.baniere}>
        <View style={{marginLeft: 50}}> 
          <View style={{backgroundColor: '#212121', width: 28, height: 3, borderRadius:2}}></View> 
          <View style={{backgroundColor: '#212121', width: 18, height: 3, marginVertical: 7, borderRadius:2}}></View> 
          <View style={{backgroundColor: '#212121', width: 28, height: 3, borderRadius:2}}></View>
        </View>
        <Ionicons size={35} name='ios-cart-outline' color='#9e9e9e' style={{marginRight: 50}} />
      </View>
      <View style={{marginLeft: 50, marginTop: 40}}> 
        <Text style={styles.title}>Delicious</Text>
        <Text style={styles.title}>food for you</Text>
      </View>
    
      <View style={styles.searchContainer}>
        <Ionicons 
          name="ios-search" size={25} 
          color="#212121"
          style={{ marginTop: 10, marginLeft: 25}}
          />
        <TextInput
          placeholder='Search'
          placeholderTextColor="gray"
          selectionColor='gray'
          style={styles.searchStyle}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
      </View>

      <FlatList 
        horizontal
        data={Category}
        renderItem={({item}) =>renderCategoryItem(item)}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.categoryFlatist}
      />

      <FlatList 
        horizontal
        data={menu}
        renderItem={({item}) => renderMenuItem(item)}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.menuFlatist}
      />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold', 
    fontSize: 35, color: 
    '#212121', 
    fontFamily: 'Nunito_800ExtraBold'
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
      padding: 10,
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  menuImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: -150,
  },
  categoryFlatist: {
    marginLeft: 50,
    marginTop: 50,
    flexGrow: 0
  },
  menuFlatist: {
    paddingLeft: 50,
    marginTop: 10,
  },
  searchStyle: { 
    height: 50, 
    width: 220, 
    fontSize: 20,
    marginLeft: 8,
    fontFamily: 'Nunito_700Bold',
    color: '#212121'
  },
  searchContainer : {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    flexDirection: 'row',
    height: 60,
    paddingVertical: 5,
    borderRadius: 50,
    backgroundColor: '#eceff1'
  },
  baniere: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageUtils : {
    borderWidth: 4, 
    width: 145, 
    height: 145, 
    marginTop: -280, 
    borderRadius: 72, 
    ...Platform.select({
      ios: {
        shadowOpacity: 400,
        shadowRadius: 15,
        shadowColor: 'black'   
      },
      android: {
        elevation: 5,
      },
    }),
  },
  menuTitle: {
    fontSize: 18, 
    textAlign: 'center',
    fontWeight: 'bold', 
    fontFamily: 'Nunito_800ExtraBold'
  },
  menuPrice: {fontSize: 15, 
    fontWeight: 'bold', 
    marginTop: 18, 
    color: '#e65100', 
    fontFamily: 'Nunito_800ExtraBold'
  },
  cardContent: {
    width: 200,
    height: 230,
    backgroundColor: '#eceff1',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 95,
    paddingHorizontal: 25,
  },
  card: {
    width: 200,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30
  }
});
