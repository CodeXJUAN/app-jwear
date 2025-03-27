import React from 'react';
import { TouchableOpacity, StyleSheet , Image} from 'react-native';

const Links = () => {
  return (
    <TouchableOpacity 
      style={styles.container}>
      <Image style={styles.icon} source={require("@/assets/images/icons/menu.png")}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 30,
  },
  icon: {
    width: 24,
    height: 24,
  }
});

export default Links;