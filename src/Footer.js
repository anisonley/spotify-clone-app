import React from 'react';
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

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <img className='footer_albumLogo' 
          src='https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/30/51/af/3051afca-a867-4394-4f27-af04b0437577/628810846375.png/400x400cc.jpg' alt='My Baby by Sinmidele' />
        <div className='footer_songInfo'>
          <h4>My Baby </h4>
          <p>Sinmidele</p>
        </div>
      </div>

      <div className='footer_center'>
        <RepeatIcon className='footer_black' />
        <SkipPreviousIcon className='footer_icon' />
        <PlayCircleFilledWhiteIcon fontSize='large' className='footer_icon' />
        <SkipNextIcon className='footer_icon'/>
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
}

export default Footer
