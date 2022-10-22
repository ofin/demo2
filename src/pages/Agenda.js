import { Card, CardContent, Container, CssBaseline, Grid, Typography } from '@mui/material'
import MyBreadcrumbs from '../component/MyBreadcrumbs'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const Agenda = () => {
    const breadCrumbItem = { '/': 'Home', "": 'Agenda' }

    let eventGuid = 0
    let todayStr = new Date().toISOString().replace(/T.*$/, '')

    console.log(todayStr);

    const createEventId = () => {
        return String(eventGuid++)
    }

    const INITIAL_EVENTS = [
        {
            id: createEventId(),
            title: 'Kegiatan Ibu PKK',
            start: todayStr
        },
        {
            id: createEventId(),
            title: 'Blusukan',
            start: "2022-10-23"
        },
        {
            id: createEventId(),
            title: 'Seminar UMKM',
            start: "2022-10-25"
        },
        {
            id: createEventId(),
            title: 'Blusukan',
            start: "2022-10-29"
        },
    ]

    const handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar

        calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            })
        }
    }

    const handleEventClick = (clickInfo) => {
        console.log(clickInfo);
    }

    const handleEvents = (events) => {
        console.log(events);
    }

    const renderEventContent = (eventInfo) => {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
        )
    }

    return (
        <>
            <CssBaseline />
            <MyBreadcrumbs breadcrumbItem={breadCrumbItem} title="ADMIN" />
            <Container sx={{ py: 2 }} maxWidth="xxl">
                <Grid container spacing={2} direction="row"
                    justifyContent="center"
                >
                    <Grid item xs={12} md={12}>
                        <Typography variant='h5' my={4} color="#292E49">Agenda Kegiatan</Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Card>
                            {/* <CardHeader
                                title={
                                    <Typography variant='h6' color="#292E49">Agenda Kegiatan</Typography>
                                }
                            /> */}
                            <CardContent>
                                <FullCalendar
                                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                    headerToolbar={{
                                        left: 'prev,next today',
                                        center: 'title',
                                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                                    }}
                                    initialView='dayGridMonth'
                                    editable={true}
                                    selectable={true}
                                    selectMirror={true}
                                    dayMaxEvents={true}
                                    weekends="true"
                                    initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                                    select={handleDateSelect}
                                    eventContent={renderEventContent} // custom render function
                                    eventClick={handleEventClick}
                                    eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                                /* you can update a remote database when these fire:
                                eventAdd={function(){}}
                                eventChange={function(){}}
                                eventRemove={function(){}}
                                */
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Agenda