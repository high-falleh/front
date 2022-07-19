import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    camera: {
        flex: 1,
        width:'100%',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    medias: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 10
    },
    media: {
        width: 80,
        height: 80,
        marginHorizontal: 2
    },
    buttons: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20
    }
})