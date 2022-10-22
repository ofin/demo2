import { Container, CssBaseline, Grid } from '@mui/material'
import React from 'react'
import MyBreadcrumbs from '../component/MyBreadcrumbs'

const breadcrumbItem = { '/admin': 'Home' };

const Home = () => {
    return (
        <>
            <CssBaseline />
            <MyBreadcrumbs breadcrumbItem={breadcrumbItem} title="ADMIN" />
            <Container sx={{ pt: 2 }} maxWidth="xxl">
                <Grid container spacing={2} direction="row"
                    justifyContent="center"
                >
                    <Grid item xs={12} md={12}>
                        Home
                    </Grid>

                    <Grid item xs={12} md={12}>
                        {/* <PDFViewer> */}
                        {/* <Pdf /> */}
                        {/* </PDFViewer> */}
                    </Grid>
                </Grid>
            </Container>

        </>
    )
}

export default Home