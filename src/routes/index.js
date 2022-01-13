import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Movies } from '../pages/Movies'
import StackRoutes from './stackRoutes'

const Drawer = createDrawerNavigator()

export default function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#141a29',
          paddingTop: 20
        },

        drawerActiveBackgroundColor: '#E72F49',
        drawerActiveTintColor: '#FFF',
        drawerInactiveTintColor: '#FFF'
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={StackRoutes}
        options={{
          title: 'Filmes',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? 'movie-open' : 'movie-outline'}
              size={size}
              color={color}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Movies"
        component={Movies}
        options={{
          title: 'Minha Lista',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? 'archive' : 'archive-outline'}
              size={size}
              color={color}
            />
          )
        }}
      />
    </Drawer.Navigator>
  )
}
