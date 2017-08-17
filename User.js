import React, { Component } from "react"
import { View, Text, Image } from "react-native"
import { connect } from "react-redux"
class User extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>
          {this.props.user.name.first} {this.props.user.name.last}
        </Text>

        <Image
          style={{ width: 400, height: 400 }}
          source={{ uri: this.props.user.picture.large }}
        />
      </View>
    )
  }
}
const mapStateToProps = (state, props) => {
  const user = state.users.find(user => user.id.value === props.match.params.id)

  return {
    user
  }
}
export default connect(mapStateToProps)(User)
