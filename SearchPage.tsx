
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    Image,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


class SearchPage extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            searchString: 'london',
            isLoading: false,
            message: '',
        };
    }
    _onSearchPressed = () => {
        console.log('this.state.searchString: ', this.state.searchString);
    };

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.description}>Search for houses to buy!</Text>
                <Text style={styles.description}>
                    Search by place-name or postcode.
                </Text>
                <View style={styles.flowRight}>
                    <TextInput
                        style={styles.searchInput}
                        value={this.state.searchString}
                        placeholder="Search via name or postcode"
                    />
                    <Button onPress={this._onSearchPressed} color="#48BBEC" title="Go" testID='iden1' accessibilityLabel='labelTest' accessibilityHint="hint" />
                </View>
                <Image
                    source={require('./Resources/house.png')}
                    style={styles.image}
                />

                <Text style={styles.description}>{this.state.message}</Text>
            </View>
        );
    }
}

const SearchStack = createStackNavigator();

export default function Search() {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="SearchPage" component={SearchPage} options={({ navigation }) => ({
                title: 'Search Page',
                headerLeft: () => (
                    <TouchableOpacity accessibilityLabel="hamburger"
                        style={styles.headerButton}
                        onPress={() => navigation.openDrawer()}>
                        <Icon name="bars" size={20} />
                    </TouchableOpacity>
                ),
            })}
            />
        </SearchStack.Navigator>
    );
}


const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center',
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
    image: {
        width: 217,
        height: 138,
    },
    headerButton: {
        height: 44,
        width: 44,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});