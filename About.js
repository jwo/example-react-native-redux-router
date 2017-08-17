import React, { Component } from "React"
import { View, Text } from "react-native"
import { Link } from "react-router-native"
class About extends Component {
  render() {
    return (
      <View>
        <Text>About Us</Text>

        <Link to="/">
          <Text>Visit Home with just a React Link</Text>
        </Link>
      </View>
    )
  }
}

export default About
