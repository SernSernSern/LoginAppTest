import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
  Image,
} from 'react-native';
import {loginAction} from '../actions/loginAction';
import {useSelector, connect} from 'react-redux';
import {
  passwordRequired,
  emailRequired,
  validatePassword,
  validateEmail,
} from '../validation/Validations';
import {Field, reduxForm} from 'redux-form';
import {compose} from 'redux';

const renderInput = ({
  keyboardType,
  meta: {touched, error, warning},
  input,
  ...restInput
}) => {
  return (
    <View>
      <TextInput
        {...input}
        keyboardType={keyboardType}
        style={styles.input}
        {...restInput}
      />
      {touched &&
        ((error && <Text style={{color: 'red'}}>{error}</Text>) ||
          (warning && <Text style={{color: 'orange'}}>{warning}</Text>))}
    </View>
  );
};

const LoginPage = props => {
  const showModal = useSelector(state => state.login.showModal);
  const response = useSelector(state => state.login.user);
  return (
    <View style={styles.root}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Logging was {response?.status}{' '}
            </Text>
            <Pressable
              style={[styles.buttonModal, styles.buttonClose]}
              onPress={() => props.showYesNoModal()}>
              <Text>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Image source={require('../assets/Logo.png')} style={styles.image} />
      <Text style={styles.titleText}>Sign In</Text>
      <View style={styles.inputs}>
        <Field
          name="email"
          keyboardType={'email-address'}
          placeholder={'Email: '}
          component={renderInput}
          validate={[emailRequired, validateEmail]}
        />
        <Field
          name="password"
          secureTextEntry={true}
          placeholder="Password: "
          validate={[passwordRequired, validatePassword]}
          component={renderInput}
        />
      </View>
      <TouchableOpacity
        type={'submit'}
        style={styles.button}
        disabled={showModal}
        onPress={props.handleSubmit(props.onSubmit)}>
        <Text style={styles.text}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    padding: 8,
    marginBottom: 8,
    borderColor: 'red',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
  },
  buttonModal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  flexOne: {
    flex: 1,
  },
  button: {
    flex: 1,
    maxHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 28,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  text: {
    color: 'white',
  },
  titleText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 32,
    fontSize: 24,
    lineHeight: 34,
  },
  inputs: {
    marginBottom: 201,
  },
  image: {
    width: 147,
    height: 48,
    alignSelf: 'center',
    marginBottom: 100,
  },
});

const mapDispatchToProps = dispatch => ({
  showYesNoModal: () => dispatch({type: 'CLOSE_MODAL'}),
  onSubmit: value => dispatch(loginAction(value)),
});

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({form: 'login-form'}),
)(LoginPage);
