//https://developer.spotify.com/documentation/web-api/

// the end point. 
//Spotify takes care of the authertication 
// then redirect to home page after autorization
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId= "116870fc95bf47dd97c5e2c397fb2501";

// scopes would basically give functionality to the app
// see it a permission set up
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let part = item.split('=');
      initial[part[0]] = decodeURIComponent(part[1]);

      return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;