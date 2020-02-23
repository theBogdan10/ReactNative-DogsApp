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
	const [link, setlink] = useState();
	const [isError, setIsError] = useState(false);


	const getImage = () => {

		try {
			fetch('https://dog.ceo/api/breeds/image/random', { 'cache': 'no-store', headers: { 'Cache-Control': 'no-cache' } })
				.then(response => {
					if (response.ok) {
						return response.json();
					}
					else {
						setIsError(true);
						console.warn('Something went wrong');
					}
				}
				)
				.then(data => {
					if (data.message !== imgUrl && link !== data.message) {
						setImgUrl(data.message);
						setlink(data.message);
						setIsError(false);
					}
					else {
						setIsError(true);
						setImgUrl(undefined);
					}
				})
				.catch((error) => {
					//console.warn(error);
					setIsError(true);
					setImgUrl(data.message);
				});
		} catch (error) {
			console.warn(error);
			setIsError(true);
		}
	};

	useEffect(() => {
		if (link === imgUrl && isError === false) {
			getImage();
		}

		else {
			console.warn('useEf1 err');
		}
	}, []);

	useEffect(() => {
		if (isError === false || imgUrl !== link) {
			const timer = setTimeout(getImage, value * 1000);
			return () => clearTimeout(timer);
		}
		else {
			console.warn('useEf2 err');
		}

	}, [value, imgUrl]);

	useEffect(() => {
		if (isError === true) {
			const timer = setInterval(getImage, value * 1000);
			return () => clearInterval(timer);
		}
	});


	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='always' style={styles.scroll}>
				<View style={styles.componentWidth}>
					<View style={styles.imageView}>
						{isError === true ? <View style={styles.errorView}><Text style={styles.networkError}>{I18n.t('mainScreen.networkError')}</Text></View> : null}
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
						<TouchableOpacity style={styles.exit}
							onPress={() => {
								navigate('Login');
								setImgUrl(undefined);
							}} >
							<Text style={styles.exitText}>{I18n.t('mainScreen.exit')} </Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default MainScreen;