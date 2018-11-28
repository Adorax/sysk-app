import React from 'react';
import { StyleSheet, Alert, Picker } from 'react-native';
import { MapView } from 'expo';

const key = AIzaSyANGZYjfaUs1PuIxpD2AHIh_9bFBANui_M;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {rates:[], address:'', region: {
      latitude:0,
      longitude:0,
      latitudeDelta:0.0322,
      longitudeDelta:0.0221,
    }, result:''};
  }

  var rad = function(x) {
    return x * Math.PI / 180;
  };

  const getDistance = function(p1, p2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(p2.latitude - p1.latitude;
    var dLong = rad(p2.longitude - p1.longitude);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(p1.latitude)) * Math.cos(rad(p2.latitude)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d; // returns the distance in meter
  };

  showMaps = () => {
    const url = 'https://api.mapfit.com/v2/geocode?street_address=' +this.state.address+ '&api_key=591dccc4e499ca0001a4c6a4811f5c99db1844bea564e995e836b3d1';
    console.log(url);
    fetch(url).then((response) =>  response.json()).then((responseJson) =>  {
      if (responseJson[0].response_type !== 3) {
        let region = {...this.state.region};
        region.latitude = responseJson[0].location.lat;
        region.longitude= responseJson[0].location.lon;
        this.setState({region: region});
      } else { console.log("Can't locate");}
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{result}km from you<Text>

        <MapView
          style={{ flex:1 }}
          region={this.state.region}>
          <MapView.Marker
          coordinate={{
            latitude:60.201373,
            longitude: 24.934041
          }} title='Haaga-Helia'/>
        </MapView>
        <TextInput style={styles.inputR} value={this.state.address} onChangeText={(address) => this.setState({address})}/>
        <Button title="Show" onPress={this.showMaps}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer:{
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
