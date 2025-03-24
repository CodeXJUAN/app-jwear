import Contact from '@/app/screens/about/contact';
import Home from '@/app/screens/home/Home';
import AboutUs from '@/app/screens/about/aboutus';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;