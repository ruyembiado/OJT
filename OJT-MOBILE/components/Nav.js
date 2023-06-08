import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./Style";

class MyComponent extends Component {
  state = {
    showMenu: false,
  };

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <View style={styles.card}>
        <TouchableOpacity style={styles.fabars} onPress={this.toggleMenu}>
          <Icon name="bars" style={styles.baricon}size={20} />
        </TouchableOpacity>

        {this.state.showMenu && (
          <View style={styles.ul}>
            <Text style={styles.li}>About</Text>
            <Text style={styles.li}>Home</Text>
            <Text style={styles.li}>Login</Text>
          </View>
        )}
      </View>
    );
  }
}

export default MyComponent;
