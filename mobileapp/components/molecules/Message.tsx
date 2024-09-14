import React from 'react';
import { View, Image } from 'react-native';

import ProfileImage from "@/components/atoms/Image"
import Name from "@/components/atoms/Name"
import Bio from "@/components/atoms/Bio"


export default function Message() {
    return (
        <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Name nameText={"Green Slime"} />
            <ProfileImage />
        </View>
        <Bio bioText={"Bio:\nLikes: Lime, Cacti, Green Things in general.\nDislikes: Anything that is Magenta"} />
    </View>
    );
}

