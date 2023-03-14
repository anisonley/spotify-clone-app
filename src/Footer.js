import React, { useEffect } from 'react';
import './Footer.css';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import { useDataLayerValue } from './DataLayer';

function Footer({ spotify }) {
  const [{ item, playing }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify,  dispatch]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  return (
    <div className='footer'>
      <div className='footer_left'>
        <img className='footer_albumLogo' 
          src={item?.album.images[0].url}
          alt={item?.name} />
          {item ? (
        <div className='footer_songInfo'>
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
        </div>
        ) : (
          <div className="footer__songInfo">
          <h4>No song is playing</h4>
          <p>...</p>
        </div>
      )}
      </div>

      <div className='footer_center'>
        <RepeatIcon className='footer_black' />
        <SkipPreviousIcon onClick={skipNext} className='footer_icon' />
        {playing ? ( 
        <PlayCircleFilledWhiteIcon 
          fontSize='large'   
          onClick={handlePlayPause} 
          className='footer_icon' />
        ) : (
          <PlayCircleFilledWhiteIcon 
          fontSize='large'   
          onClick={handlePlayPause} 
          className='footer_icon' />
        )}
        <SkipNextIcon onClick={skipPrevious} className='footer_icon'/>
        <ShuffleIcon className='footer_black' />
        </div>

        <div className='footer_right'>
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon/>
            </Grid>
            <Grid item >
              <VolumeDownIcon/>
            </Grid>
            <Grid item xs={6}>
              <Slider aria-labelledby="continuous-slider"/>
            </Grid>
          </Grid> 

        </div>
    </div>
  )
};

export default Footer;
