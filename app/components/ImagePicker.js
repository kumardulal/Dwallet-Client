import React, { useState, useEffect } from 'react';
import { Image, View, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Imagepicker({ setupdateimage }) {
    const [image, setImage] = useState(null);


    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);


    const pickImage = async () => {
        try {

            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });


            if (!result.cancelled) {
                setImage(result.uri);
                setupdateimage(result.uri);

            }
        } catch (error) {
            Alert.alert('Failed to process the Image')

        }


    }


    return (

        <View style={styles.imagecontainer}>
            <TouchableOpacity
                onPress={pickImage} >
                <Image style={styles.imageupload}
                    source={require("../assets/profile.png")} />

            </TouchableOpacity>

            <View style={styles.imagecontainer}>
                {image && <Image source={{ uri: image }}
                    style={styles.uploadedimageview} />}
            </View>
        </View>




    );
}
const styles = StyleSheet.create({
    imageupload: {
        marginTop: 10,
        height: 120,
        width: 300,

    },
    imagecontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
    uploadedimageview: {
        width: 200,
        height: 210,
        borderRadius: 25,
        bottom: 25,
    }
})

