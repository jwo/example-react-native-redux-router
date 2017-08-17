import React from "react"
import { StyleSheet, Text, View } from "react-native"
import About from "./About"
import { Route, Link } from "react-router-native"
import { Provider } from "react-redux"
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import createHistory from "history/createMemoryHistory"
import Home from "./Home"
import User from "./User"
import styles from "./Styles"
const users = (state = [], action) => {
  if (action.type === "RECEIVE_USERS") {
    return action.users.filter(u => u.id.value)
  }
  return state
}

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    users,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <View>
            <View style={styles.navbar}>
              <Link to="/">
                <Text>Home</Text>
              </Link>
              <Link to="/about">
                <Text>About</Text>
              </Link>
            </View>

            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users/:id" component={User} />
          </View>
        </ConnectedRouter>
      </Provider>
    )
  }
}
