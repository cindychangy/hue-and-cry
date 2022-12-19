'use client';
import React from 'react';

import Link from 'next/link';
export default function Home() {
  return (
    // <Grid
    //   container
    //   height="100vh"
    //   alignItems="center"
    //   justifyContent="center"
    //   direction="column"
    // >
    //   <h1>Using Material UI with Next.js 13</h1>
    //   <Stack direction="row" columnGap={1}>
    //     <Button variant="text">Text</Button>
    //     <Button variant="contained">Contained</Button>
    //     <Button variant="outlined">Outlined</Button>
    //   </Stack>
    // </Grid>
    <Link href="/dashboard">Dashboard</Link>
  );
}
