import { useNavigation } from '@react-navigation/native';


const HandleViewDetails = (pdata, userdata) => {
    const navigation = useNavigation();
    // const pdata = { 'pid': pid, 'pname': pname, 'pdesc': pdesc, 'pprice': pprice, 'pimage': pimage }

    navigation.navigate({
        name: 'ProductDetailScreen',
        params: { userdata: userdata, pdata: pdata },
        merge: true,
    })
}
export default HandleViewDetails;