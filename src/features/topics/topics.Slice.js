import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {
        topics: {
            name: '',
            subject: '',
        },
        favoriteTopics: {

        },
        excludeTopics: {

        }
    }
}

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, acton) => {
            //Might need to deconstruct this to make it easier to understand what is going on
            // state.topics.topics.push(action.payload);
            //6.3-6.4 bullets
        }
    }
})

export const { addTopic } = topicsSlice.actions;

export const selectTopics = (state) => state.topics.topics;


// export const { changeName, addCharacter, removeCharacter } = usernameSlice.actions;

// export const selectUsername = (state) => state.username.name;

// export default usernameSlice.reducer;