import {View, Text, StyleSheet, Platform, Image} from "react-native";

export default function PokemonCard(
    {
        name, image, type, hp, move, weakness
    }
){
    return (
        <View style={styles.card}>
           <View>
               <Text>{name}</Text>
               <Text>{hp}</Text>
           </View>
            <Image source={image} accessibilityLable={`${name} pokemon`} style={{width: 250, height: 300}}/>
            <View>
                <Text>{type}</Text>
            </View>
            <View>
                <Text>{ move.join(", ")}</Text>
            </View>
            <View>
                <Text>{ weakness.join(", ")}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: {width: 2, height: 2},
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4
            },
            android: {
                elevation: 5,
            }
        })
    },
});