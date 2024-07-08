import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const LayoutContainer = ({ children }: {children: React.ReactNode}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}

export default LayoutContainer