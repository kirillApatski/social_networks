import {addPostActionCreator, deletePostAC, PostsType, profileReducer} from "./profileReducer";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you", likeCount: 15},
        {id: 2, message: "It's my first post", likeCount: 20},
    ] as Array<PostsType>,
    profile: null,
    status: ''
}

it('length of posts should be incremented', () => {
    let action = addPostActionCreator("Hi, my name Kirill")
    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(3)
})

it('new post should be added', () => {
    let action = addPostActionCreator("Hi, my name Kirill")
    let newState = profileReducer(initialState, action)

    expect(newState.posts[2].message).toBe('Hi, my name Kirill')
})
it('length of posts should be decremented', () => {
    let action = deletePostAC(1)
    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(1)
})