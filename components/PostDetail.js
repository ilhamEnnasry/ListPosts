import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const PostDetail = () => {
    const selectedPost = useSelector(state => state.posts.selectedPost);

    return (
    <View style={styles.container}>
        <View style={styles.detailBox}>
            <Text style={styles.id} >ID: {selectedPost.id}</Text>
            <Text style={styles.title} >Title: {selectedPost.title}</Text>
        </View>
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    detailBox: {
        width: '80%',
        borderWidth: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bcb8d1',
    },
    id: {
        fontSize: 18,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default PostDetail;
