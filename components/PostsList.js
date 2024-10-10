import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../api/api';
import { setPosts, setSelectedPost } from '../redux/store';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';

const PostsList = ({ navigation }) => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.list);

    useEffect(() => {
        const getPosts = async () => {
            const data = await fetchPosts();
            dispatch(setPosts(data));
        };
        getPosts();
    }, [dispatch]);

    const handlePostPress = (post) => {
        dispatch(setSelectedPost(post));
        navigation.navigate('PostDetail');
    };

    return (
        <FlatList
            style={styles.container}
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.postContainer} onPress={() => handlePostPress(item)}>
                    <View>
                        <Text style={styles.postText}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#9faec7',
    },
    postContainer: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
    },
    postText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});

export default PostsList;
