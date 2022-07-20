import { posts } from "../components/Data";
import { actionsType } from "./actions";

const initState = {
  user: null,
  posts: posts,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionsType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionsType.ADD_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts],
      };
    case actionsType.DELETE_POST:
      const newPosts = [...state.posts];
      newPosts.splice(action.id, 1);
      return {
        ...state,
        posts: newPosts,
      };

    default:
      return state;
  }
};

export { initState };
export default reducer;
