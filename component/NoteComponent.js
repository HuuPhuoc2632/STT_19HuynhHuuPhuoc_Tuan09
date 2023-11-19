import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-web'
import { Ionicons } from '@expo/vector-icons'
import EditNoteModal from './EditNoteModal'
import { useDispatch } from 'react-redux'
import { deleteNote } from '../src/redux/actions'

const NoteComponent = (props) => {
  const { item, refresh, userId } = props
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const dispatch = useDispatch()
  const handleDelete = async (noteId) => {
    if (confirm('Bạn có chắc chắn muốn xóa ghi chú này không?')) {
        dispatch(deleteNote(userId, item.id));
    };
    refresh()
  }
  const checkColor =(item)=>{
    if(item.status=='easy'){
      return 'pink'
    }else if(item.status=='medium'){
      return 'green'
    }else{
      return 'red'
    }
  }
  return (
    <View>
      <View style={[styles.container, { backgroundColor: `${checkColor(item)}` }]}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginLeft: 10 }}>{item.content}</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', marginLeft: 10 }}>{item.time}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={showModal}>
            <Ionicons name='pencil-outline' size={30} color={'white'} style={{ margin: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete}>
            <Ionicons name='remove-circle-sharp' size={30} color={'white'} style={{ margin: 10 }} />
          </TouchableOpacity>
        </View>
      </View>
      <EditNoteModal item={item} visible={visible} onClose={hideModal} refresh={refresh} userId={userId} />
    </View>
  )
}

export default NoteComponent

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    marginVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})