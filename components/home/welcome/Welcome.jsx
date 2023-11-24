import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'

import styles from './welcome.style'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants'

const Welcome = () => {
  const router = useRouter()

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Nirmal</Text>
        <Text style={styles.welcomeMessage}>Find your future job here</Text>
      </View>

      <View styles={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => { }}
            placeholder="What are you looking for?"
          />
        </View>
      </View>
    </View>
  )
}

export default Welcome