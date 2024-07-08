import { View, Text } from 'react-native'
import React, { useState } from 'react'
import LayoutContainer from '@/components/LayoutContainer'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import StartNewTripCard from '@/components/MyTrips/StartNewTripCard'

const MyTrip = () => {
  const [userTrips, setUserTrips] = useState([])

  return (
    <LayoutContainer>
      <View style={{ padding: 25, paddingTop: 55, backgroundColor: Colors.white, height: '100%' }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
          <Text style={{ fontFamily: 'outfit-bold', fontSize: 35 }}>MyTrip</Text>
          <Ionicons name='add-circle' size={35} color='black' />
        </View>
        {userTrips?.length === 0 ? <StartNewTripCard /> : null}
      </View>
    </LayoutContainer>
  )
}

export default MyTrip