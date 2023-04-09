import * as React from 'react';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Checkbox, Divider, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import { AccessTime, AccountCircle, Add, Casino, Delete, DirectionsRun, Favorite, FavoriteBorder, KeyboardDoubleArrowUp, PaidRounded, Shield, TrackChanges, VisibilityOff } from '@mui/icons-material';
import Item from './Item';
import { Input, InputLeft, InputRight } from './Input';
import { useDispatch, useSelector } from 'react-redux';
import { createCharacter } from '../redux/slice';
import { AppDispatch } from '../redux/store';
import defaultCharacter from '../character'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { set } from '../redux/slice';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function New() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { character } = useSelector((state: any) => state.character)

  const addCharacter = () => {
    if (!character.id) {
      dispatch(createCharacter({ data: character }))
    }
  }

  useEffect(() => {
    dispatch(set(defaultCharacter))
  }, [])

  useEffect(() => {
    if (character.id) {
      navigate(`/character/${character.id}`)
    }
  }, [character])

  return (
    <Box>
      <Button variant="outlined" onClick={addCharacter} startIcon={<Add />} sx={{ width: '100%' }}>
        Add Character
      </Button>
    </Box >
  );
}
