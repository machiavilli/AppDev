import react {useState} from 'react';
import { touchableOpacity, Text, Alert, View } from 'react-native';

export default function CustomClickButton(){
    const [clicked, setclicked] = useState(false); 
    const handlePress = () => {
        Alert.alert("ah daddi");
        setclicked(true);

    };
    <touchableOpacity onPress={handlePress} activeOpacity={0}>


    
    </touchableOpacity>

};