const initialState = {
    mangComment: [
        {username:"user123",avatar: "https://i.pravatar.cc/?15",comment:"ahihihih"},
        {username:"user234",avatar: "https://i.pravatar.cc/?16",comment:"ahihihih"}
    ]
}

export const fakeBookReducer = (state = initialState, action) => {
  switch (action.type) {

  default:
    return state
  }
}
