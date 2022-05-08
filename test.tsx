import * as React from 'react';
import { StyleSheet, ImageBackground, View, TextInput, TouchableOpacity, Animated, FlatList, Image, Platform, Dimensions, Text } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import { event } from 'react-native-reanimated';
//import { Text } from '../components/Themed';

const Category = [
  {
    id: 1,
    title: 'Foods',
    menu: [
      {
        id: '1',
        title: 'The Extremes of Good',
        price: 24,
        image: require('../assets/images/food2.jpeg')
      },
      {
        id: '2',
        title: 'PThe Extremes of Good',
        price: 20,
        image: require('../assets/images/food1.jpeg')
      },
      {
        id: '3',
        title: 'The Extremes of Good',
        price: 24,
        image: require('../assets/images/food3.jpeg')
      },
      {
        id: '4',
        title: 'The Extremes of Good',
        price: 20,
        image: require('../assets/images/food.jpeg')
      },
      {
        id: '5',
        title: 'The Extremes of Good',
        price: 24,
        image: require('../assets/images/food3.jpeg')
      },
      {
        id: '6',
        title: 'simply dummy text',
        price: 20,
        image: require('../assets/images/food1.jpeg')
      }
    ]
  },
  {
    id: 2,
    title: 'Drinks',
    menu: [
      {
        id: '1',
        title: 'Simply dummy text',
        price: 10,
        image: require('../assets/images/drink3.jpeg')
      },
      {
        id: '2',
        title: 'simply dummy text',
        price: 13,
        image: require('../assets/images/drink1.jpeg')
      },
      {
        id: '3',
        title: 'simply dummy text',
        price: 10,
        image: require('../assets/images/drink2.jpeg')
      },
      {
        id: '4',
        title: 'simply dummy text',
        price: 13,
        image: require('../assets/images/drink2.jpeg')
      },
      {
        id: '5',
        title: 'simply dummy text',
        price: 10,
        image: require('../assets/images/drink3.jpeg')
      },
      {
        id: '6',
        title: 'simply dummy text',
        price: 13,
        image: require('../assets/images/drink1.jpeg')
      }
    ]
  },
  {
    id: 3,
    title: 'Snacks',
    menu: [
      {
      id: '1',
      title: 'simply dummy text',
      price: 10,
      image: require('../assets/images/snack.jpeg')
    },
    {
      id: '2',
      title: 'simply dummy text',
      price: 13,
      image: require('../assets/images/snack.jpeg')
    },
    {
      id: '3',
      title: 'simply dummy text',
      price: 10,
      image: require('../assets/images/snack.jpeg')
    },
    {
      id: '4',
      title: 'simply dummy text',
      price: 13,
      image: require('../assets/images/snack.jpeg')
    },
    {
      id: '5',
      title: 'simply dummy text',
      price: 10,
      image: require('../assets/images/snack.jpeg')
    },
    {
      id: '6',
      title: 'simply dummy text',
      price: 13,
      image: require('../assets/images/snack.jpeg')
    }
  ]
  },
  {
    id: 4,
    title: 'Sauces',
    menu: [
      {
        id: '1',
        title: 'The Extremes of Good',
        price: 10,
        image: require('../assets/images/sauces.jpeg')
      },
      {
        id: '2',
        title: 'The Extremes of Good',
        price: 13,
        image: require('../assets/images/sauces.jpeg')
      },
      {
        id: '3',
        title: 'The Extremes of Good',
        price: 10,
        image: require('../assets/images/sauces.jpeg')
      },
      {
        id: '4',
        title: 'The Extremes of Good',
        price: 13,
        image: require('../assets/images/sauces.jpeg')
      },
      {
        id: '5',
        title: 'The Extremes of Good',
        price: 10,
        image: require('../assets/images/sauces.jpeg')
      },
      {
        id: '6',
        title: 'The Extremes of Good',
        price: 13,
        image: require('../assets/images/sauces.jpeg')
      }
    ]
  },
];

let _carousel : any = null 

const {width} = Dimensions.get('screen') 
const tabWidth = width / Category.length;

export default function TabOneScreen() {
  const [value, onChangeText] = React.useState('');
  const [active, setActive] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(0);
  const [menu, setMenu] = React.useState(Category[0].menu);
  const [xTabOne, setXTabOne] = React.useState(0);
  const [xTabTwo, setXTabTwo] = React.useState(0);
  const [translateX, setTranslateX] = React.useState(new Animated.Value(0));
  const [selectedIndex, setSelectedIndex] = React.useState(new Animated.Value(null));
  const [activeSegmentPosition, setActiveSegmentPosition] = React.useState(new Animated.Value(null));


  const handleSlide = (key: any) => {
    Animated.spring(translateX, {
      toValue: 0,
      duration: 5000,
    }).start();
    // if (selectedId === 0) {
    //   Animated.parallel([
    //     Animated.spring(translateXTabOne, {
    //       toValue: 0,
    //       duration: 5000,
    //     }).start(),
    //     Animated.spring(translateXTabTwo, {
    //       toValue: 105,
    //       duration: 5000,
    //     }).start(),
    //   ]);
    // } else if (selectedId === 1) {
    //   Animated.parallel([
    //     Animated.spring(translateXTabOne, {
    //       toValue: -210,
    //       duration: 5000,
    //     }).start(),
    //     Animated.spring(translateXTabTwo, {
    //       toValue: 0,
    //       duration: 5000,
    //     }).start(),
    //   ]);
    // }
  };
  const onSegmentSelection = index => {
    const animate = () => {
      Animated.timing(positionAnimationValue, {
        toValue: activeSegmentPosition.x,
        duration: 150,
      }).start(() => this.props.onChange(index))
    }
    handleSlide(item.id);
          setSelectedId(item.id);
          setMenu(item.menu);

    this.setState(
      prevState => ({
        selectedIndex: index,
        activeSegmentPosition: { x: prevState.segmentDimension.width * index  + this.props.offsetHeight, y: prevState.activeSegmentPosition.y }
      }),
      animate
    )
  }
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
        onLayout={(event) => {
          console.warn(event.nativeEvent.layout.width);
        }}
        onPress={() => {
          onSegmentSelection(item.id)
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
    <View style={{
      width: 200,
      height: 250,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 30
    }}>
      <View style={{
        width: 200,
        height: 230,
        backgroundColor: '#eceff1',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 95,
        paddingHorizontal: 25,
      }}>
        <Text style={{fontSize: 18, textAlign: 'center',fontWeight: 'bold', fontFamily: 'Nunito_800ExtraBold'}}>{item.title}</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 18, color: '#e65100', fontFamily: 'Nunito_800ExtraBold'}}>{item.price}€</Text>
      </View>
        <View style={{
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
        }}>
        </View>
        <Image
          style={styles.menuImage}
          source={item.image}
        />
      </View>
  );

  const _renderItem = ({item}) => {
    return (
      <View style={{
        width: 200,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30
      }}>
        <View style={{
          width: 200,
          height: 230,
          backgroundColor: '#eceff1',
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 95,
          paddingHorizontal: 25,
        }}>
          <Text style={{fontSize: 18, textAlign: 'center',fontWeight: 'bold', fontFamily: 'Nunito_800ExtraBold'}}>{item.title}</Text>
          <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 18, color: '#e65100', fontFamily: 'Nunito_800ExtraBold'}}>{item.price}€</Text>
        </View>
          <View style={{
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
          }}>
          </View>
          <Image
            style={styles.menuImage}
            source={item.image}
          />
        </View>
    );
}

  return (
    <ImageBackground style={styles.container} source={require('../assets/images/background1.png')}>
      <View style={{
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <View style={{marginLeft: 50}}> 
          <View style={{backgroundColor: '#212121', width: 28, height: 3, borderRadius:2}}></View> 
          <View style={{backgroundColor: '#212121', width: 18, height: 3, marginVertical: 7, borderRadius:2}}></View> 
          <View style={{backgroundColor: '#212121', width: 28, height: 3, borderRadius:2}}></View>
        </View>
        <Ionicons size={35} name='ios-cart-outline' color='#9e9e9e' style={{marginRight: 50}} />
      </View>
      <View style={{marginLeft: 50, marginTop: 40}}> 
        <Text style={{fontWeight: 'bold', fontSize: 35, color: '#212121', fontFamily: 'Nunito_800ExtraBold'}}>Delicious</Text>
        <Text style={{fontWeight: 'bold', fontSize: 35, color: '#212121', fontFamily: 'Nunito_800ExtraBold'}}>food for you</Text>
      </View>
    
      <View style={{
        marginLeft: 50,
        marginRight: 50,
        marginTop: 30,
        flexDirection: 'row',
        height: 60,
        paddingVertical: 5,
        borderRadius: 50,
        backgroundColor: '#eceff1'
        }}>
        <Ionicons 
          name="ios-search" size={25} 
          color="#212121"
          style={{ marginTop: 10, marginLeft: 25}}
          />
        <TextInput
          placeholder='Search'
          placeholderTextColor="gray"
          selectionColor='gray'
          style={{ 
            height: 50, 
            width: 220, 
            fontSize: 20,
            marginLeft: 8,
            fontFamily: 'Nunito_700Bold',
            color: '#212121'
          }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
      </View>

      <View>
      <FlatList 
        horizontal
        data={Category}
        renderItem={({item}) =>renderCategoryItem(item)}
        keyExtractor={(item) => item.id}
        extraData={active}
        showsHorizontalScrollIndicator={false}
        style={{
          marginLeft: 50,
          marginTop: 50,
          flexGrow: 0
        }}
      />
        <Animated.View
          style={{
            width: 70,
            marginLeft: 70,
            backgroundColor: '#e65100',
            borderBottomWidth: 2,
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderColor: '#e65100',
            transform: [
              {
                translateX,
              },
            ],
          }}
        />
      </View>
      <FlatList 
        horizontal
        data={menu}
        renderItem={({item}) => renderMenuItem(item)}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        style={{
          marginLeft: 50,
          marginTop: 10,
        }}
      />
{
  /**
   <Carousel
        ref={(c) => { _carousel = c; }}
        data={menu}
        layout={'stack'} 
        layoutCardOffset={80}
        renderItem={_renderItem}
        sliderWidth={width }
        itemWidth={250}
      />
   */
}   

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
