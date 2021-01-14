import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


 const SignInScreen = ({navigation}) =>{

    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if( val.length != 0 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,              
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        });
    }

    const handleConfirmPasswordChange = (val) => {
      setData({
          ...data,
          confirm_password: val,
      });
  }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
      setData({
          ...data,
          confirm_secureTextEntry: !data.confirm_secureTextEntry
      });
  }

    const textInputChange2 = (val) => {
      if( val.length == 10 ) {
          setData({
              ...data,
              telefono: val,
              check_textInputChange: true,
          });
      } else {
          setData({
              ...data,
              email: val,
              check_textInputChange: false,              
          });
      }
  }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#496EF9" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Crear Cuenta</Text>
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Correo Electrónico"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=>textInputChange(val)}
                    />
                    {data.check_textInputChange ? 
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                        />
                    </Animatable.View>                   
                    : null}
                </View>
                
                <Text style={[styles.text_footer, {marginTop: 27}]}>Contraseña</Text>
                <View style={styles.action}>
                    <Feather 
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Contraseña"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=>handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                        :
                        <Feather
                            name="eye"
                            color="grey"
                            size={20}
                        />
                        }
                    </TouchableOpacity>                 
                </View>

                <Text style={[styles.text_footer, {marginTop: 27}]}>Confirma Tu Contraseña</Text>
                <View style={styles.action}>
                    <Feather 
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Confirmar Contraseña"
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=>handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                        :
                        <Feather
                            name="eye"
                            color="grey"
                            size={20}
                        />
                        }
                    </TouchableOpacity>                 
                </View>

                <Text style={[styles.text_footer,{
                    marginTop: 27
                }]}>Telefono</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="phone"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Número Telefono"
                        style={styles.textInput}
                        keyboardType='numeric'
                        maxLength={10} 
                        onChangeText={(val)=>textInputChange2(val)}
                    />
                    {data.check_textInputChange ? 
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                        />
                    </Animatable.View>                   
                    : null}
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate('MainTabScreen')}
                        style={[ styles.signIn, {
                            borderColor: '#496EF9',
                            borderWidth: 1,
                            marginTop: 15
                        } ]} >
                        <LinearGradient
                            colors={[ '#9963F2', '#63CFF2' ]}
                              style={styles.signIn}
                        >
                            <Text style={[ styles.textSign, {
                                color: '#fff'
                            } ]}>Registrarse</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                  
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn,{
                            borderColor: '#496EF9',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign,{
                            color: '#496EF9'
                        }]}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
          </View>
        );
      };

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#496EF9'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        
        fontWeight: 'bold'
    }
  });