import React, { Component } from "react"
import { View, Text, TouchableHighlight, FlatList } from "react-native"
import { push } from "react-router-redux"
import { connect } from "react-redux"
import styles from "./Styles"
import UserDetail from "./UserDetail"

class Home extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.fetchUsers = this.fetchUsers.bind(this)
  }
  handleClick() {
    this.props.dispatch(push("/about"))
  }
  fetchUsers() {
    fetch("http://randomuser.me/api?results=50")
      .then(r => r.json())
      .then(json => {
        this.props.dispatch({ type: "RECEIVE_USERS", users: json.results })
      })
  }
  render() {
    console.log(this.props.users)
    return (
      <View>
        <Text>HI JOSH</Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <TouchableHighlight style={styles.button} onPress={this.handleClick}>
            <Text style={styles.buttonText}>Visit About</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.button} onPress={this.fetchUsers}>
            <Text style={styles.buttonText}>Fetch Users</Text>
          </TouchableHighlight>
        </View>

        <FlatList
          data={this.props.users}
          renderItem={({ item }) => {
            return <UserDetail user={item} key={item.id.value} />
          }}
        />
      </View>
    )
  }
}

const mapStateToProps = props => {
  return {
    users: props.users
  }
}

export default connect(mapStateToProps)(Home)
