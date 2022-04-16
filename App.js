import * as React from 'react';
import { Text, View, Button, ActivityIndicator, TextInput, ScrollView,StyleSheet, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Styles.js';

class HomeScreen extends React.Component {
  state = {
    notes : ["note1", "note2", "note3", "note4", "note5"]
  }
  createAlert = () =>
    Alert.alert(
      "Note already exists",
      "Please enter a different note",
    );

  render() {
    const NoteList = () => {
      return (
        <SafeAreaView>
          <ScrollView>
            {this.state.notes.map((note, index) => {
              return (
                <View key={index}>
                  <Text>{note}</Text>
                </View>
              );
            }
            )}
          </ScrollView>
        </SafeAreaView>
    
      );
    };

    return (
      <SafeAreaView>
        <ScrollView>
        <View style={styles.homescreenview}>
        <View style={{ flex: 1,  flexDirection: 'column', alignItems: 'stretch'  }}>
        <View style={{ flex: 1, backgroundColor: '#e3e3e3'}}>
          <NoteList />
          </View>
          <TextInput
            onChangeText={(text) => this.setState({ text })}
          />
          <View style = {styles.button}>
          <Button
            title="Add Note"
            onPress={() => { if (this.state.notes.includes(this.state.text)){
              this.createAlert();
            }
            else{
                this.setState({
                  notes: [...this.state.notes, this.state.text],
                }
                );
              }
            }
            }
          />
          </View>
          </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );

  }
}

  const Stack = createStackNavigator();
  const App  = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Notes" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      

  );
};

export default App;