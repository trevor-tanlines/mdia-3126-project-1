import React from 'react';
import { View, Image } from 'react-native';

export default function ProfileImage() {
    return (
        <View>
            <Image
                source={require('@/components/importedImages/greenSlime.png')}
                style={{
                    width: 200,
                    height: 200,
                    resizeMode: 'cover',
                    borderRadius: 20,
                    borderColor: '#000',
                    borderWidth: 2,
                    margin:20,
                }}
            />
            
        </View>
    );
}
