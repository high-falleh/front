import { StyleSheet } from 'react-native'

// import { theme } from '../theme'
// import colors from '../constants/colors'
// const gris=colors.gris
// const blue=colors.blue
// const beige=colors.beige
const styles = StyleSheet.create({
    container: {
        paddingTop:10,        
        flex: 1,
        margin:1,
        height:1500,
    },
    header:{
        justifyContent:"space-between",
        backgroundColor:"",
        flexDirection:"row",
        padding:20,
        borderWidth:1,
        borderRadius:20,
        
    },
    title:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold",
        padding:20,
    },
    body:{
        flexDirection:"row",
        // alignContent:"center",
        padding:30,
        flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    },

    button:{
        padding:0,
        margin:8,
        height:140,
        width:100,
        borderWidth:1,
        borderRadius:30,
        borderColor:"grey"
    },
    tileTitle:{
        textAlign:"center",
        fontSize:17,
        fontWeight:"bold",
    },
    disconnectButton:{
       backgroundColor:"black",
       borderRadius:10,
    //    left:250,
       width:120,
    //    marginTop:160,
    //    marginLeft:240,
    },
    profilIcon:{
        width:40,
        height:40

    },
    //search
    search: {
        // backgroundColor: gris,
        borderRadius: 10,
        height: 30,
        margin: 10,
        flexDirection: 'row'
    },
    inputSearch: {
        height: '100%',
        width: '100%'
    },
    //icons
    icon: {
        margin:10,
         alignSelf:"center", 
         width:80, 
         height:80 
        },
    //header Screen
    headerContainer: {
        
        flexDirection: 'row',
        height: 60,
        width: '100%',
        justifyContent: 'space-between',
        // backgroundColor: blue,
        padding: 10

    },
    titleHeader: {
        fontSize: 25,
        fontWeight: '500',
        lineHeight: 25,
        
    },
    logo: {
        width: '30%',
        height: 25,
        margin: 10
    },
    //info profile
    flex: {
        flexDirection: 'row',
    },
    imageProfile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 1,
    },

    textNumber: {
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 50,
    },
    pressableNumber: {
        margin: 10,
        alignItems: 'center'
    },
    //Posts Home
    //Card 
    imageCard: {
        width: '100%',
        height: 300
    },
    justify: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    textPostUsername: {
        fontSize: 20,
        fontWeight: '500',
        margin: 10
    },
    textDescription: {
        fontSize: 16,
        lineHeight: 30,
        margin: 10
    },
    //miniCard 
    miniCard: {
        width: '33%',
        height: 120
    },
    //Posts Profile
    posts: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    //messages
    pressableAllMessages: {
        // backgroundColor: beige,
        height: 80,
        padding: 10,
        margin: 10,
        borderColor: 'black',       
        borderRadius: 20,

    },
    imageMessage: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    //messages
    messageEnvoyeContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    messageEnvoye: {
        minHeight: 40,
        maxWidth: '80%',
        margin:10,       
        padding:10,        
        borderRadius:25,
        // backgroundColor:beige,        
    },
    messageRecuContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-start'  
    },
    messageRecu: {
        minHeight: 40,
        maxWidth: '80%',
        margin:10,       
        padding:10,        
        borderRadius:25,
        // backgroundColor:blue
    },
    textMessage:{
        fontSize:18,  
    },
    send: {
        height: 40,
        width: '100%',
        paddingLeft: 20,
        paddingRight: 10,
        // backgroundColor: gris,
        borderRadius: 25,
        // position: 'fixed',
        // bottom: 0
    },
    inputSend: {
        height: '100%',
        width: '100%',
        fontSize:18,
    },
    //New Post
    //Camera screen
    // container: {
	// 	flex: 1,
	// 	// backgroundColor: theme.colors.black
	// }

})
export default styles;
