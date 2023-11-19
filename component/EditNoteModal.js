import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import { Modal } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { updateNote } from '../src/redux/actions'

const EditNoteModal = ({ item,visible, onClose, refresh, userId }) => {
    const [node, setNode] = useState(item)
    const [content, setContent] = useState(node.content)
    const dispatch = useDispatch()
    const handleUpdate = () => {
        const note = {
            content: content,
        }
        dispatch(updateNote(userId, node.id, note))
        refresh()
        onClose()
    }
  return (
   //tạo 1 modal
   <Modal
    visible={visible}
    onDismiss={onClose}
    transparent={true}
    
   >
    <View style={styles.modal}>
        <View style={{alignItems: 'center',justifyContent:'center', width:'100%'}}>
            <TouchableOpacity onPress={onClose}>
                <Ionicons name='close-circle' size={34} color={'red'} style={{marginBottom:20}}/>
            </TouchableOpacity>
        </View>
        <Text style={styles.title}>Chỉnh sửa ghi chú</Text>
        <TextInput value={content} onChangeText={setContent} style={styles.input}/>
        <TouchableOpacity onPress={handleUpdate} style={styles.btn}>
            <Text style={{color: 'white', fontSize: 18, fontWeight:'bold'}}>Xong</Text>
        </TouchableOpacity>
    </View>

   </Modal>

  )
}

export default EditNoteModal

const styles = StyleSheet.create({
    modal: {
        margin:'auto',
        width: '90%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 40,
        borderWidth: 3,
        borderColor: 'cyan',
    },
    btn: {
        width: 100,
        height: 50,
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    input: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: 'cyan',
        borderRadius: 20,
        marginVertical: 10,
        paddingHorizontal: 10,
        fontSize: 18,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 20,
    }
})