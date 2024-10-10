import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PostDetail from './PostDetail';

const mockStore = configureStore([]);

describe('PostDetail Component', () => {
    it('should display the selected post details', () => {
        const initialState = {
        posts: {
            selectedPost: { id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
        },
        };

        const store = mockStore(initialState);

        const { getByText } = render(
        <Provider store={store}>
            <PostDetail />
        </Provider>
        );

        expect(getByText('ID: 1')).toBeTruthy();
        expect(getByText('Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit')).toBeTruthy();
    });
});
