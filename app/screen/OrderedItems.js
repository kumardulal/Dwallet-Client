import React, { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, FlatList, ColorPropType } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import COLORS from '../components/collections/Colors';




//this need to get the props of status id 1 2 or 3 to change the state of the component status
export default function OrderedItems({ navigation }) {
    const deliveryStatus = 2;
    const customerCare = <AntDesign name="customerservice" size={31} color={COLORS.green} />
    const notProcessed = <AntDesign name="close" size={55} color={COLORS.red} />
    const confirmed = <FontAwesome5 name="stamp" size={55} color={COLORS.green} />;
    const onTheWay = <MaterialCommunityIcons name="truck-delivery" size={55} color={COLORS.green} />
    const deliverydone = <AntDesign name="check" size={55} color="green" />

    const [pointerText1, setpointerText1] = useState(notProcessed)
    const [pointerText2, setpointerText2] = useState(notProcessed)
    const [pointerText3, setpointerText3] = useState(notProcessed)


    useEffect(() => {

        if (deliveryStatus === 1) {

            setpointerText1(confirmed)
            setpointerText2(notProcessed)
            setpointerText3(notProcessed)
        }
        else if (deliveryStatus === 2) {
            console.log("i am 2")
            setpointerText1(confirmed)
            setpointerText2(onTheWay)
            setpointerText3(notProcessed)

        }
        else if (deliveryStatus === 3) {
            console.log("i am 3")
            setpointerText1(confirmed)
            setpointerText2(onTheWay)
            setpointerText3(deliverydone)
        }
        else if (deliveryStatus === 0) {

            setpointerText1(notProcessed)
            setpointerText2(notProcessed)
            setpointerText3(notProcessed)
        }
        else {
            alert("Dilivery status cant update-Contact now")
        }
    }, [deliveryStatus])




    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            purchasedDate: '2021-05-06-5:05 AM',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            purchasedDate: '2021-05-06-5:05 AM',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            purchasedDate: '2021-05-06-5:05 AM',
        },
        {
            id: 'bd7acbea-c1b1-46c2-ftrrdff-3ad53abb28ba',
            purchasedDate: '2021-05-06-5:05 AM',
        },
        {
            id: '3ac68afc-c605-48d3-a4ffdsf8-fbd91aa97f63',
            purchasedDate: '2021-05-06-5:05 AM',
        },
        {
            id: '58694a0f-3da1-471f-bdfdsfsd96-145571e29d72',
            purchasedDate: '2021-05-06-5:05 AM',
        },
    ];

    const renderItem = ({ item }) => <Item purchasedDate={item.purchasedDate} />;
    const Item = ({ purchasedDate }) => (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.title}>Order NO.</Text>
            <Text style={styles.title}>{purchasedDate}</Text>

        </TouchableOpacity>
    );




    return (
        <View style={styles.maincont}>
            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "85%",
                marginTop: 50
            }}>
                <Ionicons
                    name="arrow-back-outline"
                    size={40}
                    style={{ marginLeft: 10 }}
                    color="black"
                    onPress={() => navigation.goBack()}
                />
                <Text style={{
                    fontSize: 22,
                    marginRight: 50
                }}>ORDER ACTIVITY</Text>
            </View>
            <View style={{
                display: "flex",
                width: "100%",
                height: 360,
                alignItems: "center",
                marginTop: "20%"
            }}>

                <View style={{
                    height: 150,
                    width: "98%",
                    backgroundColor: COLORS.lightbluebtn,
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <View style={styles.deliverystyle}>

                            <View style={styles.pointerstyle}>{pointerText1}</View>
                            <Text >Confirmed ||👀</Text>

                        </View>

                        <View style={styles.deliverystyle}>
                            <Text style={styles.pointerstyle}>{pointerText2}</Text>
                            <Text >On the Way ||👀</Text>

                        </View>
                        <View style={styles.deliverystyle}>
                            <View style={styles.pointerstyle}>{pointerText3}</View>
                            <Text >Arrived 👋</Text>

                        </View>

                    </View>



                    <View style={{ height: 5, width: "100%", backgroundColor: "green" }}></View>
                    <View style={{ display: "flex", flexDirection: "row", alignSelf: "center" }}>

                        {customerCare}
                        <Text style={{ fontSize: 20, marginLeft: 10 }}>09564692647</Text></View>
                </View>
                <View style={{ width: "98%", backgroundColor: COLORS.lightblue, }}>

                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id} />

                </View>
            </View>


        </View >
    )
}
const styles = StyleSheet.create({
    maincont: {
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: COLORS.lightblue,
        // marginTop: "10%"


    }
    ,
    deliverystyle: {
        // marginLeft: 2,
        backgroundColor: COLORS.primaryWall,
        padding: 10,
        borderTopRightRadius: 100,
        fontWeight: "bold",
        borderTopLeftRadius: 10,


    },
    pointerstyle: {
        position: "absolute",
        alignSelf: "center",
        bottom: 60
    },

    emptyPinter: {
        display: "none"
    },
    item: {
        backgroundColor: COLORS.yellow,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        borderRadius: 10
    },
    title: {
        fontSize: 15,
        textAlign: "center"

    },


})