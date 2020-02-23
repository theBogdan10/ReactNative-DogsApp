/* eslint-disable no-undef */
import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Image, ScrollView, KeyboardAvoidingView, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { UserForm } from './src/UserForm';
import I18n from './src/i18';
import PropTypes from 'prop-types';
import styles from './loginScreenStyle';


const LoginScreen = (props) => {

	LoginScreen.propTypes = {
		navigation: PropTypes.object,
	};

	const { height, width } = Dimensions.get('window');
	const [parametrs, setParametrs] = useState({ langValue: 'en', isConnected: true });

	const onChangeLang = (data) => {
		switch (data.lang) {
		case 'en': {
			setParametrs({ langValue: 'en' });
			I18n.locale = 'en';
		}
			break;
		case 'ar': {
			setParametrs({ langValue: 'ar' });
			I18n.locale = 'ar';
		}
			break;
		case 'ru': {
			setParametrs({ langValue: 'ru' });
			I18n.locale = 'ru';
		}
			break;
		}
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='always' style={styles.scroll} 	>
					<View style={styles.componentWidth}>
						<KeyboardAvoidingView behavior='position' keyboardVerticalOffset={-height / 5} >
							<View style={styles.logoView} >
								<Image style={styles.logo} accessible={true} source={require('./img/Dog.png')} />
							</View>
							<UserForm navigation={props.navigation} lang={parametrs.langValue} />
							<View style={styles.skipRegistrView}>
								<TouchableOpacity style={styles.skipRegistrTouchOp}>
									<Text style={styles.skipRegistrText} >{I18n.t('loginScreen.skipRegistr')} </Text>
								</TouchableOpacity>
							</View>
							<View style={styles.langChoise}>
								<TouchableOpacity style={styles.englishTouchOp} onPress={() => { onChangeLang({ lang: 'en' }); }} >
									<Text style={[styles.english, parametrs.langValue !== 'en' ? styles.langOpacity : null]}>English </Text>
								</TouchableOpacity>
								<Text style={styles.separator}> — </Text>
								<TouchableOpacity style={styles.arabicTouchOp} onPress={() => { onChangeLang({ lang: 'ar' }); }}   >
									<Text style={[styles.arabic, parametrs.langValue !== 'ar' ? styles.langOpacity : null]}>عربي</Text>
								</TouchableOpacity>
								<Text style={styles.separator}> — </Text>
								<TouchableOpacity style={styles.russianTouchOp} onPress={() => { onChangeLang({ lang: 'ru' }); }}   >
									<Text style={[styles.russian, parametrs.langValue !== 'ru' ? styles.langOpacity : null]}>Русский</Text>
								</TouchableOpacity>
							</View>
						</KeyboardAvoidingView>
					</View>
				</ScrollView>
			</View>
		</TouchableWithoutFeedback>


	);
};

export default LoginScreen;

