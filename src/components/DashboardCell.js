// ===============================
// AUTHOR     : SOUMYA RANJAN NAYAK
// CREATE DATE     :09/01/2020
// PURPOSE     : Render Dashboard cell item 
// ===============================
// Change History:
//
//==================================

import React from 'react';
import { View, FlatList, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
export default class DashboardCell extends React.PureComponent {
    render() {

        const { name, email, gender, phoneNo, age } = this.props.item;
        return (
            <View style={styles.container}>
                {gender=='male' ?(<Image
                    style={styles.image_style}
                    source={{ uri: 'https://p7.hiclipart.com/preview/304/305/226/web-development-computer-icons-avatar-business-user-profile.jpg' }}
                />):(<Image
                    style={styles.image_style}
                    source={{ uri: 'https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png' }}
                />)}
                <View style={styles.text_container}>
                <Text style={styles.title}>{name}</Text>
                    <Text style={styles.sub_title}>Email   :  {email}</Text>
                    <Text style={styles.sub_title}>Mobile :  {phoneNo}</Text>
                    <Text style={styles.sub_title}>age       :  {age} year</Text>


                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%", height: 100, flexDirection: 'row', marginBottom: 5,borderBottomWidth:0.5,
        padding:10,backgroundColor:'#fff', 
    },
    image_style:
        {  width: "25%", height: "100%", },

    text_container: {
        padding:10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: { color: 'black', fontSize: 20 },
    sub_title:{ color: 'black',}
})