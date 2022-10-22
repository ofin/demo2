import { Breadcrumbs, Container, Link, Typography, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react'

function handleClick(event) {
    event.preventDefault();
    // console.info('You clicked a breadcrumb.');
}

const MyBreadcrumbs = ({ breadcrumbItem, title }) => {
    const theme = useTheme();
    const itemslen = Object.keys(breadcrumbItem).length;

    return (
        <div role="presentation" onClick={handleClick}>
            <Container sx={{ pt: 12, pb: 5, background: theme.palette.breadcrumbsBg }} maxWidth="xxl">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="#fff">
                    {title}
                </Typography>
                <Breadcrumbs separator="›" aria-label="breadcrumb" color="#fff">
                    {Object.keys(breadcrumbItem).map((item, index) => {
                        if (index + 1 === itemslen) {
                            return (
                                <Typography key={item} color="breadcrumbsColor">{breadcrumbItem[item]}</Typography>
                            )
                        } else {
                            return (
                                <Link
                                    underline="none"
                                    key={item}
                                    color={itemslen === index + 1 ? "breadcrumbsColor" : "inherit"}
                                    component={RouterLink}
                                    to={item}
                                    aria-current={itemslen === index + 1 ? "page" : ""}
                                >
                                    {breadcrumbItem[item]}
                                </Link>
                            )
                        }
                    })}
                </Breadcrumbs>
            </Container>
        </div>
    )
}

export default MyBreadcrumbs