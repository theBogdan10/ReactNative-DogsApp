/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, Image, View, ScrollView, Slider } from 'react-native';
import I18n from './i18';
import PropTypes from 'prop-types';
import styles from './mainScreenStyle';


const MainScreen = (props) => {

	MainScreen.propTypes = {
		navigation: PropTypes.object,
	};

	const [value, setValue] = useState(3);
	const [imgUrl, setImgUrl] = useState();
	const { navigate } = props.navigation;

	useEffect(() => {
		const valueCopy = value;
		const timer = setInterval(() => {
			fetch('https://dog.ceo/api/breeds/image/random')
				.then(responce => responce.json())
				.then(data => {
					setImgUrl(data.message);
				});
		}, valueCopy * 1000);

		return () => clearInterval(timer);
	});

	return (
		<View style={styles.container}>
			<View style={styles.componentWidth}>
				<ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='always'>
					<View style={styles.imageView}>
						<Image style={styles.img} source={{ uri: `${imgUrl}` }} />
					</View>
					<Text style={styles.updateText}>{I18n.t('mainScreen.updateTime')}</Text>
					<View style={styles.updateView}>
						<Text style={styles.valueText}>{value}</Text>
						<Slider
							style={styles.slider}
							step={1}
							minimumValue={1}
							maximumValue={60}
							minimumTrackTintColor='#d23366'
							maximumTrackTintColor='white'
							value={value}
							onValueChange={(sliderValue) => setValue(sliderValue)}
						/>
					</View>
					<View >
						<TouchableOpacity style={styles.exit} onPress={() => navigate('Login')} >
							<Text style={styles.exitText}>{I18n.t('mainScreen.exit')} </Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default MainScreen;