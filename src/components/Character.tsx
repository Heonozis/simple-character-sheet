import * as React from 'react';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Checkbox, Divider, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import { AccessTime, AccountCircle, Add, Casino, Delete, DirectionsRun, Favorite, FavoriteBorder, KeyboardDoubleArrowUp, PaidRounded, Shield, TrackChanges, VisibilityOff } from '@mui/icons-material';
import Item from './Item';
import { Input, InputLeft, InputRight } from './Input';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacter, set, updateCharacter } from '../redux/slice';
import { AppDispatch } from '../redux/store';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Character() {
  const dispatch = useDispatch<AppDispatch>()
  const { character } = useSelector((state: any) => state.character)
  const { register, handleSubmit, unregister, formState: { errors } } = useForm();
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchCharacter({ id }))
  }, [])

  const onSubmit = (data: any) => {
    dispatch(updateCharacter({ id: character.id, data }))
  };

  const addItem = () => {
    const data = { ...character }
    if (data.items) {
      data.items = [...data.items, { name: "", description: "" }];
    } else {
      data.items = [{ name: "", description: "" }];
    }
    dispatch(updateCharacter({ id: character.id, data }))
  }

  const removeItem = (index: number) => {
    unregister(`items[${index}]`)
    const data = { ...character }
    data.items = data.items.filter((item: any, i: number) => {
      return i !== index;
    });
    dispatch(updateCharacter({ id: character.id, data }))
  }

  const addInventoryItem = () => {
    const data = { ...character }
    if (data.inventory) {
      data.inventory = [...data.inventory, { name: "", count: "" }];
    } else {
      data.inventory = [{ name: "", count: "" }];
    }
    dispatch(updateCharacter({ id: character.id, data }))
  }

  const removeInvetoryItem = (index: number) => {
    unregister(`inventory[${index}]`)
    const data = { ...character }
    data.inventory = data.inventory.filter((item: any, i: number) => {
      return i !== index;
    });
    dispatch(updateCharacter({ id: character.id, data }))
  }

  const addSpell = () => {
    const data = { ...character }
    if (data.spells) {
      data.spells = [...data.spells, { name: "", level: "" }];
    } else {
      data.spells = [{ name: "", level: "" }];
    }
    dispatch(updateCharacter({ id: character.id, data }))
  }

  const removeSpell = (index: number) => {
    unregister(`spells[${index}]`)
    const data = { ...character }
    data.spells = data.spells.filter((item: any, i: number) => {
      return i !== index;
    });
    dispatch(updateCharacter({ id: character.id, data }))
  }

  return (
    <Box>
      {character.id && (
        <form onBlur={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid xs={9} sx={{ textAlign: "left" }}>
              <Input
                label="Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                {...register("name")}
                defaultValue={character.name}
                variant="outlined"
              />
            </Grid>
            <Grid xs={3}>
              <Input
                label="Level"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyboardDoubleArrowUp />
                    </InputAdornment>
                  ),
                }}
                {...register("level")}
                defaultValue={character.level}
                variant="outlined"
              />
            </Grid>
            <Grid xs={6}>
              <Input
                label="Race"
                variant="outlined"
                {...register("race")}
                defaultValue={character.race}
              />
            </Grid>
            <Grid xs={6}>
              <Input
                label="Class"
                variant="outlined"
                {...register("class")}
                defaultValue={character.class}
              />
            </Grid>
            <Grid xs={2} sx={{ paddingRight: 0 }}>
              <InputLeft
                label={<FavoriteBorder />}
                variant="outlined"
                {...register("hpCurrent")}
                defaultValue={character.hpCurrent}
              />
            </Grid>
            <Grid xs={2} sx={{ paddingLeft: 0 }}>
              <InputRight
                label={<Favorite />}
                variant="outlined"
                {...register("hpMax")}
                defaultValue={character.hpMax}
              />
            </Grid>
            <Grid xs={4}>
              <Input
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Shield />
                    </InputAdornment>
                  ),
                }}
                {...register("ac")}
                defaultValue={character.ac}
                variant="outlined"
              />
            </Grid>
            <Grid xs={2} sx={{ paddingRight: 0 }}>
              <InputLeft
                label={<Add />}
                variant="outlined"
                {...register("proficiencyBonus")}
                defaultValue={character.proficiencyBonus}
              />
            </Grid>
            <Grid xs={2} sx={{ paddingLeft: 0 }}>
              <InputRight
                label={<DirectionsRun />}
                variant="outlined"
                {...register("speed")}
                defaultValue={character.speed}
              />
            </Grid>
            <Grid xs={3}>
              <Input
                label={<AccessTime />}
                variant="outlined"
                {...register("initiative")}
                defaultValue={character.initiative}
              />
            </Grid>
            <Grid xs={3}>
              <Input
                label={<TrackChanges />}
                variant="outlined"
                {...register("passivePerception")}
                defaultValue={character.passivePerception}
              />
            </Grid>
            <Grid xs={3}>
              <Input
                label={<VisibilityOff />}
                variant="outlined"
                {...register("darkvision")}
                defaultValue={character.darkvision}
              />
            </Grid>
            <Grid xs={3}>
              <Input
                label={<Casino />}
                variant="outlined"
                {...register("inspiration")}
                defaultValue={character.inspiration}
              />
            </Grid>
          </Grid>

          <Divider textAlign="left" sx={{ margin: 1 }}>Params</Divider>
          <Grid container spacing={1}>
            <Grid xs={2}>
              <Item>
                <Typography fontSize={24}>
                  {Math.floor((Number(character.str) - 10) / 2)}
                </Typography>
              </Item>
            </Grid>
            <Grid xs={2}>
              <Item>
                <Typography fontSize={24}>
                  {Math.floor((Number(character.dex) - 10) / 2)}
                </Typography>
              </Item>
            </Grid>
            <Grid xs={2}>
              <Item>
                <Typography fontSize={24}>
                  {Math.floor((Number(character.con) - 10) / 2)}
                </Typography>
              </Item>
            </Grid>
            <Grid xs={2}>
              <Item>
                <Typography fontSize={24}>
                  {Math.floor((Number(character.int) - 10) / 2)}
                </Typography>
              </Item>
            </Grid>
            <Grid xs={2}>
              <Item>
                <Typography fontSize={24}>
                  {Math.floor((Number(character.wis) - 10) / 2)}
                </Typography>
              </Item>
            </Grid>
            <Grid xs={2}>
              <Item>
                <Typography fontSize={24}>
                  {Math.floor((Number(character.cha) - 10) / 2)}
                </Typography>
              </Item>
            </Grid>
            <Grid xs={2}>
              <Input
                size='small'
                variant="outlined"
                label="STR"
                InputLabelProps={{
                  style: {
                    maxWidth: 'calc(133% - 10px)',
                  }
                }}
                defaultValue={character.str}
                {...register("str")}
              />
            </Grid>
            <Grid xs={2}>
              <Input
                size='small'
                variant="outlined"
                label="DEX"
                InputLabelProps={{
                  style: {
                    maxWidth: 'calc(133% - 10px)',
                  }
                }}
                defaultValue={character.dex}
                {...register("dex")}
              />
            </Grid>
            <Grid xs={2}>
              <Input
                size='small'
                variant="outlined"
                label="CON"
                InputLabelProps={{
                  style: {
                    maxWidth: 'calc(133% - 10px)',
                  }
                }}
                defaultValue={character.con}
                {...register("con")}
              />
            </Grid>
            <Grid xs={2}>
              <Input
                size='small'
                variant="outlined"
                label="INT"
                InputLabelProps={{
                  style: {
                    maxWidth: 'calc(133% - 10px)',
                  }
                }}
                defaultValue={character.int}
                {...register("int")}
              />
            </Grid>
            <Grid xs={2}>
              <Input
                size='small'
                variant="outlined"
                label="WIS"
                InputLabelProps={{
                  style: {
                    maxWidth: 'calc(133% - 10px)',
                  }
                }}
                defaultValue={character.wis}
                {...register("wis")}
              />
            </Grid>
            <Grid xs={2}>
              <Input
                size='small'
                variant="outlined"
                label="CHA"
                InputLabelProps={{
                  style: {
                    maxWidth: 'calc(133% - 10px)',
                  }
                }}
                defaultValue={character.cha}
                {...register("cha")}
              />
            </Grid>
          </Grid>

          <Divider textAlign="left" sx={{ margin: 1 }}>Saving Throws</Divider>
          <Grid container spacing={1}>
            {character.savingThrows?.map((st: any, i: number) => {
              const fieldName = `savingThrows[${i}]`;
              return (
                <Grid xs={4} key={fieldName}>
                  <Stack direction="row">
                    <input type="hidden" value={st.name} {...register(`${fieldName}.name`)} />
                    <Input
                      size='small'
                      label={st.name}
                      variant="outlined"
                      InputLabelProps={{
                        style: {
                          maxWidth: 'calc(133% - 10px)',
                        }
                      }}
                      defaultValue={st.value}
                      {...register(`${fieldName}.value`)}
                    />
                    <Checkbox
                      {...label}
                      {...register(`${fieldName}.proficient`)}
                      defaultChecked={st.proficient}
                      icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  </Stack>
                </Grid>
              )
            })}
          </Grid>

          <Divider textAlign="left" sx={{ margin: 1 }}>Items</Divider>
          <Grid container spacing={1}>
            {character?.items?.map((item: any, i: number) => {
              const fieldName = `items[${i}]`;
              return (
                <Grid container key={fieldName}>
                  <Grid xs={5}>
                    <Input
                      size='small'
                      label="Name"
                      variant="outlined"
                      defaultValue={item.name}
                      {...register(`${fieldName}.name`)}
                    />
                  </Grid>
                  <Grid xs={7}>
                    <Stack direction="row">
                      <Input
                        size='small'
                        label="Description"
                        variant="outlined"
                        defaultValue={item.description}
                        {...register(`${fieldName}.description`)}
                      />
                      <IconButton onClick={() => removeItem(i)}><Delete />
                      </IconButton>
                    </Stack>
                  </Grid>
                </Grid>
              )
            })}
            <Grid xs={12}>
              <Button variant="outlined" onClick={addItem} startIcon={<Add />} sx={{ width: '100%' }}>
                Add Item
              </Button>
            </Grid>
          </Grid>

          <Divider textAlign="left" sx={{ margin: 1 }}>Skills</Divider>
          <Grid container spacing={1}>
            {character?.skills?.map((skill: any, i: number) => {
              const fieldName = `skills[${i}]`;
              return (
                <Grid xs={4} key={fieldName}>
                  <Stack direction="row">
                    <input type="hidden" value={skill.name} {...register(`${fieldName}.name`)} />
                    <Input
                      size='small'
                      label={skill.name}
                      InputLabelProps={{
                        style: {
                          maxWidth: 'calc(133% - 10px)',
                        }
                      }}
                      defaultValue={skill.value}
                      variant="outlined"

                      {...register(`${fieldName}.value`)}
                    />
                    <Checkbox {...label} {...register(`${fieldName}.proficient`)} defaultChecked={skill.proficient} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  </Stack>
                </Grid>
              )
            })}
          </Grid>

          <Divider textAlign="left" sx={{ margin: 1 }}>Inventory</Divider>
          <Grid container spacing={1}>
            <Grid xs={3}>
              <Input
                label="Platinum"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PaidRounded fontSize='small' sx={{ color: "#7DF9FF" }} />
                    </InputAdornment>
                  ),
                }}
                defaultValue={character.platinum}
                {...register('platinum')}
                variant="outlined"
              />
            </Grid>
            <Grid xs={3}>
              <Input
                label="Gold"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PaidRounded fontSize='small' sx={{ color: "#ffd700" }} />
                    </InputAdornment>
                  ),
                }}
                defaultValue={character.gold}
                {...register('gold')}
                variant="outlined"
              />
            </Grid>
            <Grid xs={3}>
              <Input
                label="Silver"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PaidRounded fontSize='small' sx={{ color: "#C0C0C0" }} />
                    </InputAdornment>
                  ),
                }}
                defaultValue={character.silver}
                {...register('silver')}
                variant="outlined"
              />
            </Grid>
            <Grid xs={3}>
              <Input
                label="Copper"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PaidRounded fontSize='small' sx={{ color: "#B87333" }} />
                    </InputAdornment>
                  ),
                }}
                defaultValue={character.copper}
                {...register('copper')}
                variant="outlined"
              />
            </Grid>
            <Grid container spacing={1}>
              {character?.inventory?.map((item: any, i: number) => {
                const fieldName = `inventory[${i}]`;
                return (
                  <Grid container key={fieldName}>
                    <Grid xs={9}>
                      <Input
                        size='small'
                        label="Name"
                        variant="outlined"
                        defaultValue={item.name}
                        {...register(`${fieldName}.name`)}
                      />
                    </Grid>
                    <Grid xs={3}>
                      <Stack direction="row">
                        <Input
                          size='small'
                          label="Count"
                          variant="outlined"
                          defaultValue={item.count}
                          {...register(`${fieldName}.count`)}
                        />
                        <IconButton onClick={() => removeInvetoryItem(i)}><Delete />
                        </IconButton>
                      </Stack>
                    </Grid>
                  </Grid>
                )
              })}
            </Grid>
            <Grid xs={12}>
              <Button variant="outlined" onClick={addInventoryItem} startIcon={<Add />} sx={{ width: '100%' }}>
                Add Item
              </Button>
            </Grid>
          </Grid>

          <Divider textAlign="left" sx={{ margin: 1 }}>Spellcasting</Divider>
          <Grid container spacing={1}>
            {character?.spellSlots?.map((spellSlot: any, i: number) => {
              const fieldName = `spellSlots[${i}]`;
              return (
                <Grid container xs={3} key={fieldName}>
                  <Grid xs={6} sx={{ paddingRight: 0 }}>
                    <input type="hidden" value={spellSlot.level} {...register(`${fieldName}.level`)} />
                    <InputLeft
                      label={spellSlot.level}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      size="small"
                      defaultValue={spellSlot.count}
                      {...register(`${fieldName}.count`)}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid xs={6} sx={{ paddingLeft: 0 }}>
                    <InputRight
                      size="small"
                      variant="outlined"
                      defaultValue={spellSlot.countMax}
                      {...register(`${fieldName}.countMax`)}
                    />
                  </Grid>
                </Grid>
              )
            })}
            <Grid container>
              {character?.spells?.map((spell: any, i: number) => {
                const fieldName = `spells[${i}]`;
                return (
                  <Grid container key={fieldName}>
                    <Grid xs={2}>
                      <Input
                        size='small'
                        label="lvl"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        defaultValue={spell.level}
                        {...register(`${fieldName}.level`)}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid xs={10}>
                      <Stack direction="row">
                        <Input
                          size='small'
                          label="Name"
                          variant="outlined"
                          defaultValue={spell.name}
                          {...register(`${fieldName}.name`)}
                        />
                        <Checkbox {...register(`${fieldName}.memorized`)} defaultChecked={spell.memorized}
                          {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        <IconButton onClick={() => removeSpell(i)}><Delete />
                        </IconButton>

                      </Stack>
                    </Grid>
                  </Grid>
                )
              })}
            </Grid>
            <Grid xs={12}>
              <Button variant="outlined" onClick={addSpell} startIcon={<Add />} sx={{ width: '100%' }}>
                Add Spell
              </Button>
            </Grid>
          </Grid>

          <Divider textAlign="left" sx={{ margin: 1 }}>Notes</Divider>
          <Grid container spacing={1}>
            <Grid xs={12}>
              <Input multiline
                maxRows={12}
                variant="outlined"
                defaultValue={character.notes}
                {...register(`notes`)}
              />
            </Grid>
          </Grid>
        </form >
      )}
    </Box >
  );
}
