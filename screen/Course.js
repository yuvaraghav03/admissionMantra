import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Course = () => {
    return (
        <View style={styles.main}>
            <View style={styles.top}>
                <View style={styles.left}><Text style={styles.course}>  COURSES</Text></View>
                <View style={styles.right}>
                    <Image
                        source={require('../assets/course.jpg')}
                        style={styles.topImg}
                    />
                </View>
            </View>
            <View style={styles.list}>
                <View><Text style={styles.category}>Medical & Dental UG</Text></View>
                <View style={styles.stream}>

                    <TouchableOpacity style={styles.itm1}>
                        <LinearGradient
                            colors={['#3BA9FE', '#3BA9FE']}
                            style={styles.btn1}
                            start={[0, 0]}
                            end={[1, 1]}
                        >
                            <Text style={styles.btntxt}>MBBS</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itm2}>
                        <LinearGradient
                            colors={['#2BB7BA', '#5AE5E7']}
                            style={styles.btn2}
                            start={[0, 0]}
                            end={[1, 1]}
                        ><Text style={styles.btntxt}>BDS</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    main: {},
    top: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    course: { fontSize: 26 },
    topImg: { width: 212, height: 230 },
    btntxt: { backgroundColor: 'transparent', fontSize: 15, color: '#fff', },
    btn1: { width: 150, margin: "5%", padding: 7, alignItems: 'center', borderRadius: 6 },
    btn2: { width: 150, margin: "5%", padding: 7, alignItems: 'center', borderRadius: 6 },
    category: { fontSize: 18, marginLeft: 5 },
    stream: { flexDirection: "row", justifyContent: "space-between" },
    list: { marginTop: 20 }
});

export default Course