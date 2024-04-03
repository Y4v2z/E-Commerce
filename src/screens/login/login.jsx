//import liraries
import React, {useContext, useState} from 'react';
import {View, ScrollView, Image} from 'react-native';
import {Input, Button} from '@ui-kitten/components';
import {screenStyle} from '../../styles/secreenStyle';
import {width} from '../../utils/constant';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {AppColors} from '../../theme/color';
import StoreContext from '../../context/context';
import {postRequest} from '../../service/verbs';
import {LOGİN_URL} from '../../service/url';

// create a component
const Login = ({navigation}) => {
  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');
  const [requireUsername, setRequireUsername] = useState(true);
  const [requirePassword, setRequirePassword] = useState(true);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [disabledButton, setDisabledButton] = useState(false);
  const {setLogin} = useContext(StoreContext);

  const login = () => {
    const form = {
      username: null,
      password: null,
    };
    if (username) {
      form.username = username;
      setRequireUsername(true);
    } else setRequireUsername(false);
    if (password) {
      form.password = password;
      setRequirePassword(true);
    } else setRequirePassword(false);
    if (username && password) {
      postRequest(LOGİN_URL, form)
        .then(response => {
          console.log(response.data);
          setLogin(true);
          navigation.goBack();
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => setDisabledButton(false));
    }
  };

  return (
    <View style={screenStyle.container}>
      <ScrollView>
        <View style={{padding: 20}}>
          <Image
            style={{
              width: width * 0.3,
              height: width * 0.2,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
            source={require('../../assets/icons/logo.png')}
          />
        </View>
        <View>
          <Input
            size="large"
            value={username}
            label="Username"
            status={requireUsername ? 'basic' : 'danger'}
            caption={!requireUsername ? 'Kullanıcı alanı zorunlu.' : null}
            placeholder="Place your E-mail"
            onChangeText={nextValue => setUsername(nextValue)}
            style={{marginVertical: 10}}
          />
          <Input
            size="large"
            value={password}
            label="Password"
            status={requirePassword ? 'basic' : 'danger'}
            caption={!requirePassword ? 'Şifre alanı zorunlu.' : null}
            placeholder="Place your password"
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setPassword(nextValue)}
            style={{marginVertical: 10}}
            accessoryRight={() =>
              secureTextEntry ? (
                <EyeSlash
                  size={24}
                  color={AppColors.BLACK}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              ) : (
                <Eye
                  size={24}
                  color={AppColors.BLACK}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              )
            }
          />
        </View>
        <View style={{marginVertical: 20}}>
          <Button
            style={{marginVertical: 10}}
            status="success"
            onPress={login}
            disabled={disabledButton}>
            LOGIN
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default Login;
