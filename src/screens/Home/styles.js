import { StyleSheet } from "react-native";
import { Colors } from "../../common/styles/color";
import { FontFamily } from "../../common/styles/font";

export const styles = StyleSheet.create({
    mainBox: { flex: 1, backgroundColor: Colors.semiGray },
    box: { paddingHorizontal: 10, marginTop: 40 },
    eventBox: { width: "100%", backgroundColor: Colors.white, borderRadius: 12, paddingBottom: 10, paddingLeft: 10, marginBottom: 10 },
    eventSemiBox: { marginTop: 10, marginRight: 10, flex: 1, flexDirection: "row" },
    image: { height: 80, width: 80, borderRadius: 8, overflow: "hidden" },
    eventDetailsBox: { marginLeft: 10, flex: 1 },
    title: { fontSize: 16, fontFamily: FontFamily.GothicA1SemiBold, color: Colors.black },
    descriptionBox: { flexDirection: "row" },
    date: { fontSize: 12, fontFamily: FontFamily.GothicA1Medium, color: Colors.green, flex: 1 },
    city: { fontSize: 11, fontFamily: FontFamily.GothicA1Medium, color: Colors.gray },
    price: { fontSize: 11, fontFamily: FontFamily.GothicA1Medium, color: Colors.gray },
    container: {flexDirection: "row", marginTop: 5},
    flatlist: {flex:1},
    optionBox: {paddingVertical: 4, paddingHorizontal: 8, backgroundColor: Colors.semiWhite, borderRadius: 25},
    option: {color: Colors.semiBlack},
    icon: {height: 24, width: 24},
    ml5: {marginLeft: 5},
    arrowIcon: { height: 14, width: 14, position: "absolute", top: 3, right: 5 }
})