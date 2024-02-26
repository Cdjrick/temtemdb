import React from 'react'
import TemCard from '../components/temCard'
import Grid from '@mui/joy/Grid';

import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';

function TemCardsListView({ tems }) {

  const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
  }));

  return (
    <div className='temDB'>
      <Grid container spacing={1} textAlign={'center'} justifyContent={'center'} sx={{ flexGrow: 1 }}>
        {/* {console.log(tems)} */}
        {tems.map((tem) =>
          <Grid key={tem.name}>
            <Item>
              <TemCard tem={tem} />
            </Item>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default TemCardsListView