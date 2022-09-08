import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container : {
        height:1500,
        // margin:10,
        paddingTop:30,
        backgroundColor:"#fff",
        alignItems:"center",
    },

    header:{
        // paddingLeft:60,
        // paddingRight:60,
       
        // backgroundColor:"#caffbf",
        // borderBottomLeftRadius:40,
        // alignSelf:"center",
        // backgroundColor:"blue"
    },

    addButton:{
        backgroundColor:"black",
        align:"center",
        padding:12,
        borderRadius:8,
        marginLeft:190,
        borderWidth:1,
        borderColor:""
    },

    backButton:{
        margin:20,
        
    },

    body:{
        paddingTop:20,
        flexDirection:"column",

    },
    
    box:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        position:"relative",
        width:380,
        backgroundColor:"#38a3a5",
        borderRadius:10,
        borderWidth:1,
        borderColor:"#359bbd",
        margin:20,
    },
    callButton:{
        margin:10
    },

    
})


export default styles; 