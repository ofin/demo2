import { Card, CardContent, CardHeader, Container, CssBaseline, Grid, IconButton, LinearProgress, linearProgressClasses, Paper, Stack, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MyBreadcrumbs from '../../component/MyBreadcrumbs';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styled from '@emotion/styled';
import { ArrowBack, Delete, Edit, Info } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

function createData(name, ketua, no_hp, target, tercapai) {
    return { name, ketua, no_hp, target, tercapai };
}

function createTim(name, nik, phone, adress, jabatan) {
    return { name, nik, phone, adress, jabatan }
}

const kabupatens =  [
    createData('Kabupaten A', 'si A', '08xxxxxxx', 159, 35),
    createData('Kabupaten B', 'si B', '08xxxxxxx', 237, 64),
    createData('Kabupaten C', 'si C', '08xxxxxxx', 198, 12),
    createData('Kabupaten D', 'si D', '08xxxxxxx', 206, 43),
    createData('Kabupaten E', 'si E', '08xxxxxxx', 147, 76),
];

const kecamatans = [
    createData('Kecamatan A', 'si A', '08xxxxxxxxxxx', 75, 57),
    createData('Kecamatan B', 'si B', '08xxxxxxxxxxx', 87, 44),
    createData('Kecamatan C', 'si C', '08xxxxxxxxxxx', 69, 32),
    createData('Kecamatan D', 'si D', '08xxxxxxxxxxx', 56, 43),
    createData('Kecamatan E', 'si E', '08xxxxxxxxxxx', 74, 37),
];

const keldesas = [
    createData('Desa A', 'si A', '08xxxxxxxxxxx', 75, 57),
    createData('Desa B', 'si B', '08xxxxxxxxxxx', 87, 44),
    createData('Desa C', 'si C', '08xxxxxxxxxxx', 69, 32),
    createData('Desa D', 'si D', '08xxxxxxxxxxx', 56, 43),
    createData('Desa E', 'si E', '08xxxxxxxxxxx', 74, 37),
];

const timDesa = [
    createTim('Andri', "1234", '08xxxx', 'Jl. xxxxx', 'Anggota'),
    createTim('Fandi', "1234", '08xxxx', 'Jl. xxxxx', 'Anggota'),
    createTim('Rudi', "1234", '08xxxx', 'Jl. xxxxx', 'Anggota'),
    createTim('Iwan', "1234", '08xxxx', 'Jl. xxxxx', 'Anggota'),
    createTim('Yasir', "1234", '08xxxx', 'Jl. xxxxx', 'Anggota'),
    createTim('Ririn', "1234", '08xxxx', 'Jl. xxxxx', 'Anggota'),
    createTim('Asis', "1234", '08xxxx', 'Jl. xxxxx', 'Anggota'),
    createTim('Abdul', "1234", '08xxxx', 'Jl. xxxxx', 'Anggota'),
    createTim('Burhan', "1234", '08xxxx', 'Jl. xxxxx', 'Anggota'),
]

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#292E49",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 1,
    },
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 400 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

const Data = ({ lokasi, setLokasi, setKetuaTim, setBreadCrumbItem }) => {
    const [data, setData] = useState([])
    const [renderTim, setRenderTim] = useState([])
    const urlLocation = useLocation();

    useEffect(() => {
        const randomItems = [];
        let xxx = timDesa.slice();
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * xxx.length);
            const randomItem = xxx.splice(randomIndex, 1)[0];
            randomItems.push(randomItem);
        }
        setRenderTim(randomItems)

        if (lokasi === "detail") {
            setData(keldesas)
            setKetuaTim("Ketua Tim Desa : " + randomItems[0].name)
        }
        else if (lokasi === "keldesa") {
            setData(keldesas)
            setKetuaTim("Ketua Tim Kecamatan : " + randomItems[0].name)
        }
        else if (lokasi === "kecamatan") {
            setData(kecamatans)
            setKetuaTim("Ketua Tim Kabupaten : " + randomItems[0].name)
        }
        else {
            setData(kabupatens)
            setKetuaTim("Ketua Tim Provinsi : " + randomItems[0].name)
            console.log(data);
        }
        console.log(lokasi);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lokasi])

    useEffect(() => {
        setLokasi("kabupaten");
        setBreadCrumbItem({})
        console.log(urlLocation.pathname);
        if (urlLocation.pathname === '/partai') {
            setBreadCrumbItem({ '/': 'Home', "": 'Partai' })
        }
        else if (urlLocation.pathname === '/pemenangan_a') {
            setBreadCrumbItem({ '/': 'Home', "": 'Pemenangan A' })
        }
        else if (urlLocation.pathname === '/pemenangan_b') {
            setBreadCrumbItem({ '/': 'Home', "": 'Pemenangan B' })
        }
        else if (urlLocation.pathname === '/relawan_tps') {
            setBreadCrumbItem({ '/': 'Home', "": 'Relawan TPS' })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [urlLocation])

    const handleDetailClick = () => {
        if (lokasi === "kabupaten") {
            setLokasi("kecamatan")
        }
        else if (lokasi === "kecamatan") {
            setLokasi("keldesa")
        }
        else if (lokasi === "keldesa") {
            setLokasi("detail")
        }

    }

    const handleBackClick = () => {
        if (lokasi === 'detail') {
            setLokasi("keldesa")
        }
        else if (lokasi === "keldesa") {
            setLokasi("kecamatan")
        }
        else if (lokasi === "kecamatan") {
            setLokasi("kabupaten")
        }
    }

    return (
        <Card>
            <CardHeader
                title={
                    <Typography variant='h6' color="#292E49">Data Tim</Typography>
                }
                avatar={
                    lokasi !== "kabupaten" &&
                    <Tooltip title="Kembali">
                        <IconButton variant="outlined" onClick={
                            handleBackClick
                        } color="error"><ArrowBack /></IconButton>
                    </Tooltip>
                }
                action={
                    <Tooltip title="Tambah Data">
                        <IconButton variant="outlined"
                            color="primary"><AddCircleIcon /></IconButton>
                    </Tooltip>
                }
            />
            <CardContent>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" size="small">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell sx={{ width: 120, textAlign: "center" }}>Action</StyledTableCell>
                                <StyledTableCell>Nama</StyledTableCell>
                                <StyledTableCell>NIK</StyledTableCell>
                                <StyledTableCell>No. HP</StyledTableCell>
                                <StyledTableCell>Alamat</StyledTableCell>
                                <StyledTableCell>Jabatan</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                renderTim.map((row) => (
                                    <StyledTableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <StyledTableCell>
                                            <Stack direction="row" spacing={1} justifyContent="center">
                                                <Tooltip title="Edit Data">
                                                    <IconButton variant="outlined" color="primary">
                                                        <Edit />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Hapus Data">
                                                    <IconButton variant="outlined" color="error">
                                                        <Delete />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Detail Data">
                                                    <IconButton variant="outlined" color="success">
                                                        <Info />
                                                    </IconButton>
                                                </Tooltip>
                                            </Stack>
                                        </StyledTableCell>
                                        <StyledTableCell scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell>{row.nik}</StyledTableCell>
                                        <StyledTableCell>{row.phone}</StyledTableCell>
                                        <StyledTableCell>{row.adress}</StyledTableCell>
                                        <StyledTableCell>{row.jabatan}</StyledTableCell>
                                    </StyledTableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                {
                    lokasi === "detail" ?
                        ""
                        :
                        <>
                            <Typography mt={6} mb={2} variant="h6">Daftar Wilayah</Typography>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <>
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell sx={{ width: 70 }}>Action</StyledTableCell>
                                                <StyledTableCell>{lokasi === "keldesa" ? "Desa / Kelurahan" : lokasi === "kecamatan" ? "Kecamatan" : "Kabupaten"}</StyledTableCell>
                                                <StyledTableCell>Ketua Tim</StyledTableCell>
                                                <StyledTableCell>Nomor HP</StyledTableCell>
                                                <StyledTableCell>Target</StyledTableCell>
                                                <StyledTableCell>Tercapai</StyledTableCell>
                                                <StyledTableCell>Progres</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                data.map((row) => (
                                                    <StyledTableRow
                                                        key={row.ketua}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <StyledTableCell>
                                                            <Tooltip title="Detail Data">
                                                                <IconButton variant="outlined" color="success" onClick={handleDetailClick}>
                                                                    <Info />
                                                                </IconButton>
                                                            </Tooltip>
                                                        </StyledTableCell>
                                                        <StyledTableCell scope="row">
                                                            {row.name}
                                                        </StyledTableCell>
                                                        <StyledTableCell>{row.ketua}</StyledTableCell>
                                                        <StyledTableCell>{row.no_hp}</StyledTableCell>
                                                        <StyledTableCell>{row.target}</StyledTableCell>
                                                        <StyledTableCell>{row.tercapai}</StyledTableCell>
                                                        <StyledTableCell><BorderLinearProgress variant="determinate" value={(row.tercapai / row.target) * 100} />{((row.tercapai / row.target) * 100).toFixed(2)}%</StyledTableCell>
                                                    </StyledTableRow>
                                                ))
                                            }
                                        </TableBody>
                                    </>
                                </Table>
                            </TableContainer>
                        </>
                }
            </CardContent>
        </Card>
    );
}

const Partai = () => {
    const [lokasi, setLokasi] = useState("kabupaten");
    const [ketuaTim, setKetuaTim] = useState("")
    const [breadCrumbItem, setBreadCrumbItem] = useState({})

    return (
        <>
            <CssBaseline />
            <MyBreadcrumbs breadcrumbItem={breadCrumbItem} title="ADMIN" />
            <Container sx={{ pt: 2 }} maxWidth="xxl">
                <Grid container spacing={2} direction="row"
                    justifyContent="center"
                >
                    <Grid item xs={12} md={12}>
                        <Typography variant='h5' my={4} color="#292E49">{ketuaTim}</Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Data lokasi={lokasi} setLokasi={setLokasi} setKetuaTim={setKetuaTim} setBreadCrumbItem={setBreadCrumbItem} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Partai