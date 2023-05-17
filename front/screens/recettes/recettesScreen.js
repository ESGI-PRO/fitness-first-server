import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const RecettesScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
          <Text style={{paddingTop: 50}}>Mes Recettes</Text>
      </View>
    </SafeAreaView>
  )
}






export default RecettesScreen