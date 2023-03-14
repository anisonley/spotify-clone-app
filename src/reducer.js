export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
};

const reducer = (state, action) => {
console.log(action);

  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };

    case 'SET_TOKEN':
      return{
        ...state,
        token: action.token
      }


    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
      
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
      default:
        return state;
};
};

export default reducer;