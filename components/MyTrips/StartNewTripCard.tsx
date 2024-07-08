import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

const StartNewTripCard = () => {
    return (
        <View style={{ padding: 20, marginTop: 50, display: 'flex', alignItems: 'center', gap: 25 }}>
            <Ionicons name='location-sharp' size={30} color='black' />
            <Text style={{ fontSize: 25, fontFamily: 'outfit-medium' }}>No Trips planned yet</Text>
            <Text style={{ fontSize: 20, fontFamily: 'outfit', textAlign: 'center', color: Colors.gray }}>Looks like its time to plan a new travel experience! Get Started Below</Text>
            <TouchableOpacity style={{ padding: 10, backgroundColor: Colors.primary, borderRadius: 15, paddingHorizontal: 30}}>
                <Text style={{ color: Colors.white, fontFamily: 'outfit-medium', fontSize: 20}}>Start a new Trip</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StartNewTripCard