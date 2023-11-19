import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import NoteComponent from '../../component/NoteComponent';
import AddNoteModal from '../../component/AddNoteModal';
import { useDispatch } from 'react-redux';
import { noteList } from '../redux/actions';
import { useSelector } from 'react-redux';

const HomeScreen = (props) => {
    const dispatch = useDispatch()
    const { user } = props.route.params
    const [notes, setNotes] = useState([])
    const note = useSelector(state => state.notes);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setNotes(note)
        console.log(notes);
      }, [note]);
    const addNewNodeModal = () => {
        setVisible(true);
    }
    const hideModal = () => {
        setVisible(false);
    
    }
    useEffect(() => {
        refresh()
    }, [])
    const refresh = () => {
        dispatch(noteList(user.id))
    }
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Note App</Text>
                <TouchableOpacity onPress={addNewNodeModal}>
                    <Ionicons name='add-circle-outline' size={45}
                        style={{ margin: 10, color: 'blue' }} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={{width:'100%'}}>
                    <FlatList
                        data={notes}
                        renderItem={({ item }) => <NoteComponent item={item} refresh={refresh} userId={user.id} />}
                        numColumns={1}
                        style={{ marginHorizontal: 10 }}
                    />
                </View>
            </View>
            <AddNoteModal visible={visible} onClose={hideModal} userId={user.id} refresh={refresh}/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 20,
    },
    body: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})