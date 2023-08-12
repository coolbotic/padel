import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Card, IconButton, MD3Colors, Text } from 'react-native-paper';
import Animated, { EasingNode } from "react-native-reanimated";

interface SensorCarouselItem {
    id: number;
    title: string;
    description: string;
    source: any; // Please refine the type based on your data
}

interface SensorCardProps {
    data: SensorCarouselItem;
    currentIndex: Number | null;
}

const cardBoarderWidth = 3.5;

function SensorCard({ data, currentIndex }: SensorCardProps) {
    const cardFadeAnimation = useRef(new Animated.Value(currentIndex === data.id ? 1 : 0)).current;
    const boarderWidthAnimation = useRef(new Animated.Value(currentIndex === data.id ? cardBoarderWidth : 0)).current;
    const checkmarkFadeScaleAnimation = useRef(new Animated.Value(currentIndex === data.id ? 1 : 0)).current;

    useEffect(() => {
        Animated.timing(
            cardFadeAnimation,
            {
                toValue: currentIndex === data.id ? 1 : 0.6,
                duration: 400,
                easing: EasingNode.inOut(EasingNode.ease)
            }
        ).start();

        Animated.timing(
            boarderWidthAnimation,
            {
                toValue: currentIndex === data.id ? 3.5 : 0,
                duration: 400,
                easing: EasingNode.inOut(EasingNode.ease)
            }
        ).start();

        Animated.timing(
            checkmarkFadeScaleAnimation,
            {
                toValue: currentIndex === data.id ? 1 : 0,
                duration: 400,
                easing: EasingNode.inOut(EasingNode.ease)
            }
        ).start();
    
    }, [currentIndex]);


    return (
        <View style={styles.mainContainerStyle}>
           
            <View>
                {/* ---- Sensor Card Start ----  */}
                <Animated.View style={{ ...styles.borderStyle, opacity: cardFadeAnimation, borderWidth: boarderWidthAnimation }}>
                    <Card>
                        <ImageBackground imageStyle={styles.cardImageBackgroundStyle} source={require('../assets/wickedbackground1.png')} resizeMode="cover">
                            <Card.Cover style={styles.cardCoverStyle} resizeMode={'contain'} source={data.source} />
                            <Card.Content style={styles.cardContentStyle}>
                                <Text style={styles.cardTextStyle} variant="titleLarge">{data.title}</Text>
                                <Text style={styles.cardTextStyle} variant="bodyMedium">{data.description}</Text>
                            </Card.Content>
                        </ImageBackground>
                    </Card>
                </Animated.View>
                {/* ----- Sensor Card End ----- */}

                {/* ---- Information Button Start ---- */}
                <IconButton style={styles.informationButtonStyle} iconColor={MD3Colors.primary60} size={25} icon="information" onPress={() => console.log('Pressed')} />
                {/* ----- Information Button End ----- */}


                {/* ---- Checkmark Start ---- */}
                <Animated.View style={{...styles.checkmarkAnimationViewStyle, opacity: checkmarkFadeScaleAnimation, transform: [{ scale: checkmarkFadeScaleAnimation }] }}>
                    <IconButton style={{ backgroundColor: 'while' }} iconColor={MD3Colors.primary60} size={45} icon="check-circle" onPress={() => console.log('Pressed')} />
                </Animated.View>
                {/* ----- Checkmark End ----- */}

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    borderStyle: {
        // borderWidth: 3.5,
        borderRadius: 12.5,
        borderColor: MD3Colors.primary50,
    },
    checkmarkAnimationViewStyle: {
        zIndex: 2, 
        position: 'absolute', 
        top: -10, 
        left: -10, 
        width: 30, 
        height: 30, 
        borderRadius: 35 / 2, 
        backgroundColor: 'white', 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    informationButtonStyle: {
        zIndex: 2, 
        position: 'absolute', 
        top: 5, 
        right: 5
    },
    mainContainerStyle: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    cardCoverStyle: {
        backgroundColor: 'rgba(59, 79, 96, 0.05)', 
        borderBottomEndRadius: 0
    },
    cardContentStyle: {
        padding: 10
    },
    cardImageBackgroundStyle: {
        borderRadius: 10, 
        opacity: 0.7
    },
    cardTextStyle: {
        paddingVertical: 3
    }
});

export default SensorCard;
