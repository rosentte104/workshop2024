<template>
    <div class="container">
        <Navbar />

        <main>
            <div class="events-container-title title red w-full">le programme</div>
            <div class="events-container-banner w-full">
                <img v-lazy="imgBanner" alt='Le programme'>
            </div>
            <div class="events-container w-full">
                <div class="events-container-txt w-full">
                    Explorez les compétitions, expositions, conférences, et ateliers interactifs qui célèbrent la fusion
                    unique du sport traditionnel et de l'e-sport. Restez informé et ne manquez aucune activité grâce à
                    notre programme détaillé.
                    <br><br>
                    Sélectionnez une date pour découvrir les évènements prévus.
                </div>
                <div class="w-full center">
                    <el-calendar class="calendar">
                        <template #date-cell="{ data }">
                            <p :class="data.isSelected ? 'is-selected' : ''">
                                {{ data.day.split('-').slice(1)[1] }}
                                <div class="calendar-day-events">
                                    <div v-if="checkEventType1(data.day)" class="events-point-red"></div>
                                    <div v-if="checkEventType0(data.day)" class="events-point-blue"></div>
                                </div>
                                {{ data.isSelected ? showEventByDay(data.day) : '' }}
                            </p>
                        </template>
                    </el-calendar>
                </div>
                <div class="events-container-types w-full">
                    <div class="events-point-red"></div>
                    <div class="events-container-type">Présentiel</div>
                </div>
                <div class="events-container-types w-full">
                    <div class="events-point-blue"></div>
                    <div class="events-container-type">Distanciel</div>
                </div>
                <div class="events-container-cards w-full">
                    <div v-for="(event, index) in eventsOnDate" :key="index" class="events-container-card">
                        <img v-lazy="imgEvent" alt="Event">
                        <div class="events-container-card-details">
                            <div v-if="!event.type" class="events-point-blue"></div>
                            <div v-if="event.type" class="events-point-red"></div>
                            <div class="events-container-card-details-txt">{{ formatDateTime(event.date) + ' - '}}{{ event.type ? event.location : 'en ligne' }}</div>
                            <div class="events-container-card-details-title">{{ event.athlete }}</div>
                            <div class="events-container-card-details-txt">{{ event.description }}</div>
                            <button v-if="!event.type" class="events-container-btn-twitch">TWITCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
    name: "Events",
    components: {
        Navbar,
    },
    data() {
        return {
            events: [{ date: '2024-07-04', type: true, location:'Paris', description:"ADFLGIJLRldfjslkfjslkdfjsdkfjslkd", athlete:'Laura GALINDO' }, { date: '2024-07-04', type: false, location: '', description:'LKlsdkjflskdddddd', athlete:'Laura GALINDO' }],
            eventsOnDate: [],
            tmpEvents: [],
            imgBanner: require("../assets/images/agnesbaldwin_Can_you_create_an_image_for_the_Coq_Sportif_webs_c8083066-dd4d-4764-9af2-9cb44d547a0a_1 1.png"),
            imgEvent: require("../assets/images/CardMedia.png"),
        };
    },
    async created() {
        await this.getEvents();
    },
    async mounted() {
        await this.getEvents();
    },
    methods: {
        checkEventType0(dateString) {
            const eventsOnDate = this.events.filter(event => event.date === dateString);

            for (const event of eventsOnDate) {
                if (!event.type) {
                    return true;
                }
            }

            return false;
        },
        checkEventType1(dateString) {
            const eventsOnDate = this.events.filter(event => event.date === dateString);

            for (const event of eventsOnDate) {
                if (event.type) {
                    return true;
                }
            }

            return false;
        },
        async getEvents() {
            //       try {
            //         let response = await axios.get(`${this.apiUrl}/back-office`);
            //         this.events = JSON.parse(JSON.stringify(response.data));
            //         this.tmpEvents = JSON.parse(JSON.stringify(response.data));
            // const currentDate = new Date();
            // const upcomingEvents = this.tmpEvents.filter(event => {
            //     const eventDate = new Date(event.date);
            //     return eventDate > currentDate;
            // });
            //       } catch (error) {
            //         console.error("Error results/get:", error);
            //       }
        },
        showEventByDay(dateString){
            this.eventsOnDate = this.events.filter(event => event.date === dateString);
        },
    formatDateTime(datetimeString) {
        let monthNames = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];
    let datetime = new Date(datetimeString);

    let day = datetime.getDate();
    let month = monthNames[datetime.getMonth()];
    let hours = datetime.getHours();

    return `${day} ${month} à ${hours}h`;
}
    }
};
</script>