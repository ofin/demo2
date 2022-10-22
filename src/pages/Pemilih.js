import { Card, CardContent, CardHeader, Container, CssBaseline, Grid, Typography } from '@mui/material'
import MyBreadcrumbs from '../component/MyBreadcrumbs'

const Pemilih = () => {
    const breadCrumbItem = { '/': 'Home', "": 'Data Pemilih' }

    return (
        <>
            <CssBaseline />
            <MyBreadcrumbs breadcrumbItem={breadCrumbItem} title="ADMIN" />
            <Container sx={{ py: 2 }} maxWidth="xxl">
                <Grid container spacing={2} direction="row"
                    justifyContent="center"
                >
                    <Grid item xs={12} md={12}>
                        <Typography variant='h5' my={4} color="#292E49">Data Pemilih</Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Card>
                            <CardHeader
                                title={
                                    <Typography variant='h6' color="#292E49">Agenda Kegiatan</Typography>
                                }
                            />
                            <CardContent>
                                bdbd
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Pemilih