import { Text, StyleSheet } from 'react-native';

function SubTitle({ children }) {       
    return (
        <Text style={styles.subtitle}>{children}</Text>
    );
}       

const styles = StyleSheet.create({
     subtitle: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 8,
        textAlign: 'center',
        padding: 4,       
        textTransform: 'uppercase',
        borderBottomWidth: 1,
    },
});

export default SubTitle;