import React, { Component } from "react"
import { View, Image, Text, TouchableHighlight } from "react-native"
import { push } from "react-router-redux"
import { connect } from "react-redux"

class UserDetail extends Component {
  constructor(props) {
    super(props)
    this.visitUser = this.visitUser.bind(this)
  }
  visitUser() {
    const { user } = this.props
    // this.props.dispatch({ type: "VISIT_USER", user })
    this.props.dispatch(push(`/users/${user.id.value}`))
  }
  render() {
    const user = this.props.user
    return (
      <TouchableHighlight key={user.id.value} onPress={this.visitUser}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginRight: 30
            }}
            source={{ uri: user.picture.thumbnail }}
          />
          <Text>
            {user.name.last} {user.name.first}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default connect()(UserDetail)
