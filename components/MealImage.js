import { View, Text, Image, StyleSheet } from 'react-native';

function MealImage({ imageUrl, title }) {
    return (
        <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 8,
        textAlign: 'center',
        padding: 4,
    },
});

export default MealImage;