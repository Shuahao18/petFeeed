import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from '../assets/constants/colors'; 

const Button = (props) => {
    const filledBgColor = props.color || COLORS.primary;
    const outlineColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor : outlineColor;
    const textColor = props.filled ? COLORS.white : COLORS.primary;

    return (
        <TouchableOpacity  
            style={[styles.button, { backgroundColor: bgColor }, props.style]}  
            onPress={props.onPress}
        >
            <Text style={{ fontSize: 18, color: textColor }}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 12
    }
});
