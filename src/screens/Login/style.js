import { StyleSheet } from "react-native";
import { FontFamily } from "../../common/styles/font";
import { Colors } from "../../common/styles/color";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      loginButton: {
        width: '90%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: "skyblue",
        alignSelf: "center"
      },
      loginTitle: {
        fontWeight: 'bold',
        lineHeight: 24,
        color: Colors.white,
        fontFamily: FontFamily.RobotoRegular,
      },
})