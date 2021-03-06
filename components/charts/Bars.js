import React, { PureComponent } from 'react';
import { Animated, View, Text } from 'react-native';

import AnimateNumber from 'react-native-animate-number';
import { defaultAnimationTime, screenWidth } from './../../assets/css/general';

class Bars extends PureComponent{

  constructor(props){
    super(props);
    this.chartWidth = screenWidth - 15;
    this.percentajeToWidth = ((this.chartWidth * props.percentaje) / 100);
    this.primaryColor = props.primaryColor != '' ? props.primaryColor : '#FCBD24';
    this.dynamicWidth = new Animated.Value(0);
    this.dynamicPercentaje = new Animated.Value(0);
  }

  componentDidMount(){
    this.increaseBarWidth();
  }

  increaseBarWidth = () => {
    Animated.timing(
      this.dynamicWidth,
      {
        toValue: this.percentajeToWidth,
        delay: this.props.startAt,
        duration: defaultAnimationTime
      }
    ).start();
  }

  render(){
    return (
      <View style={{width: this.chartWidth, flexDirection: 'column', marginTop: 5}}>
        <View style={{width: this.chartWidth, borderRadius: 5}}>
          <Text style={{fontFamily: 'CocoGothic-Bold', marginLeft: 5}}>
            {this.props.name}
          </Text>
        </View>
        <View style={{width: this.chartWidth, backgroundColor: 'lightblue', borderRadius: 5}}>
          <View style={{height: 20, width: this.chartWidth, backgroundColor: this.primaryColor, borderRadius: 5, opacity: 0.3}}>
          </View>
          <Animated.View style={{alignItems: 'center', position: 'absolute', height: 20, width: this.dynamicWidth, backgroundColor: this.primaryColor, borderRadius: 5}}>
            <Text style={{position: 'absolute', color: '#000', fontFamily: 'CenturyGothic-Bold'}}>
              <AnimateNumber value={this.props.percentaje} countBy={3} timing="linear" />%
            </Text>
          </Animated.View>
        </View>
      </View>
    );
  }
}

export default Bars;
