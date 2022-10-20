import { Container, Grid } from '@mui/material'
import React from 'react'

const Partai = () => {
    return (
        <Container sx={{ pt: 10 }} maxWidth="xxl">
                <Grid container spacing={2} direction="row"
                    justifyContent="center"
                >
                    <Grid item xs={12} md={12}>
                        Partai
                    </Grid>

                    <Grid item xs={12} md={12}>
                        {/* <PDFViewer> */}
                        {/* <Pdf /> */}
                        {/* </PDFViewer> */}
                    </Grid>
                </Grid>
            </Container>
    )
}

export default Partai