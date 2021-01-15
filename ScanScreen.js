import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import {Permissions} from 'expo-permissions';

export default class ScanScreen extends React.Component{
    constructor(){
        super();
       thies.state={
         hasCamraPermissions:null,
         scanned:false,
         scannedData:'',
         buttonState:'normal'
       }
    }    
        getCameraPermissions=async()=>{
            const{status}=await Permissions.askAsync(Permissions.CAMERA)
             this.setState({hasCamraPermissions:status==='Granted'})
        }
          handleBarCodeScanned=async({type,data})=>{
            this.setState({scanned:true , scannedData:data, buttonState:'normal'});
          }
        
          render(){
             const hasCamraPermissions=this.state.hasCamraPermissions
             const scanned=this.state.scanned
             const buttonState=this.state.buttonState

        if(buttonState==="clicked" && hasCamraPermissions){
            return(
                <BarCodeScanner onBarCodeScanned={
                    scanned? undefined :this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}/> );} 
                
            else if(buttonState==="normal"){



             return(
           <View style={styles.container}>
               
               <TouchableOpacity onPress={this.getCameraPermissions}
          style={styles.scanButton}>
              <Image source={require("./assets/dlf.pt-bar-code-png-150305.png")}
                     style={{width:40,height:40}}/>
           <Text style={styles.buttonText}>Scan QR Code</Text>
          </TouchableOpacity>
               
           </View>





             )







            }
                
                
                
                
                
                
                
                }
  








}
const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      allignItems:'center'

    },
     displayText:{
       fontSize: 15 ,
       textDecorationLine: 'underline'
     },
     scanButton:{
       backgroundColor:'#2196f3',
       padding:10,
       margin:10
      },
      buttonText:{
        fontSiz:20
      }
 })
 
 
