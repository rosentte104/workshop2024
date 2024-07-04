<template>
  <div class="container">
    <Navbar />

    <main>
      <div class="booking-container">
        <div class="booking-container-title red title">RÉSERVATION</div>
        <div class="booking-container-form">
          <div class="booking-container-ticket">
            X 1 Billet pour l’Exposition “Des Premiers Pas aux Sommets”
            <br />55€
          </div>
          <div class="booking-container-select-events">
            <div class="booking-container-subtitle title">
              1. PaRTICIPATION AU TIRAGE AU SORT
            </div>
            <div class="booking-container-txt">
              En réservant vos places pour l’exposition, vous participez
              automatiquement à notre tirage au sort exclusif, vous offrant
              l'opportunité unique de rencontrer votre sportif préféré.
              Choisissez votre athlète et la date de votre rencontre pour vivre
              une expérience inoubliable.
            </div>
            <el-form
              :model="selectEvents"
              label-width="auto"
              class="booking-container-form-events"
              status-icon
            >
              <el-form-item label="" prop="selectEvents">
                <el-checkbox-group v-model="selectEvents">
                  <el-checkbox
                    v-for="event in tmpEvents"
                    :key="event.id"
                    :value="event.id"
                    name="selectEvents"
                  >
                    {{ event.athlete }}<br />{{ formatDateTime(event.date) }}
                  </el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-form>
          </div>
          <div class="booking-container-info-participant">
            <div class="booking-container-subtitle title">
              2. iNFORMATIONS pERSONNELLES
            </div>
            <br />
            <el-form
              ref="ruleDevisRef"
              :model="formParticipant"
              :rules="rules"
              label-width="auto"
              label-position="top"
              status-icon
            >
              <el-form-item label="E-mail" prop="email" required>
                <el-input v-model="formParticipant.email" />
              </el-form-item>
              <el-form-item label="Prénom" prop="first_name" required>
                <el-input v-model="formParticipant.first_name" />
              </el-form-item>
              <el-form-item label="NOM" prop="last_name" required>
                <el-input v-model="formParticipant.last_name" />
              </el-form-item>
              <el-form-item label="Phone" prop="phone">
                <el-input v-model="formParticipant.phone" />
              </el-form-item>
              <el-form-item label="Sport(s) préféré(s)" prop="favorite_sport">
                <el-input v-model="formParticipant.favorite_sport" />
              </el-form-item>
              <el-checkbox-group v-model="formParticipant.companion">
                <el-checkbox value="1" name="companion">
                  Compagnon ? </el-checkbox
                ><br /><br />
              </el-checkbox-group>
              <el-form-item label="" prop="checkForm">
                <el-checkbox-group v-model="formParticipant.checkForm">
                  <el-checkbox value="1" name="checkForm">
                    J’accepte les Conditions Générales de vente
                  </el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <br /><br />
              <el-form-item>
                <div class="w-full">
                  <button
                    type="button"
                    class="booking-btn btn"
                    @click="submitForm()"
                  >
                    VALIDER
                  </button>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Booking",
  components: {
    Navbar,
  },
  data() {
    return {
      apiUrl: process.env.VUE_APP_API_BASE_URL,
      rules: {
        first_name: [
          {
            required: true,
            message: "Ce champ est obligatoire",
            trigger: "blur",
          },
        ],
        last_name: [
          {
            required: true,
            message: "Ce champ est obligatoire",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Veuillez saisir une adresse E-mail valide",
            trigger: ["blur", "change"],
          },
        ],
        checkForm: [
          {
            type: "array",
            required: true,
            message: "Veuillez accepter les Conditions Générales de vente",
            trigger: "change",
          },
        ],
      },
      formParticipant: {
        email: "",
        first_name: "",
        last_name: "",
        phone: "",
        favorite_sport: "",
        companion: [],
        checkForm: [],
      },
      selectEvents: [],
      checkForm: [],
      events: [],
      tmpEvents: [
        { athlete: "Laura GALINDO", date: "2024-07-20", id: 1 },
        { athlete: "Laura GALINDO", date: "2024-07-20", id: 2 },
        { athlete: "Laura GALINDO", date: "2024-07-20", id: 3 },
      ],
    };
  },
  async created() {
    await this.getEvents();
  },
  async mounted() {
    await this.getEvents();
  },
  methods: {
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
    async submitForm() {
      if (!this.$refs.ruleDevisRef) return;
      let check = await new Promise((resolve, reject) => {
        this.$refs.ruleDevisRef.validate((valid, fields) => {
          if (valid) {
            console.log("submit!");
            resolve(true);
          } else {
            console.log("error submit:" + reject, fields);
            resolve(false);
          }
        });
      });
      if (!check) return;
      else {
        this.formParticipant["selectedEvents"] = this.selectEvents;
        try {
          const response = await axios.post(this.apiUrl + "/", this.formData);

          console.log("Response from Symfony:", response.data);
          ElNotification({
            title: "Success",
            message: "Paiement effectué.",
            type: "success",
            position: "bottom-right",
            duration: 0,
          });
        } catch (error) {
          console.error("Error sending data:", error);
        }
      }
    },
    formatDateTime(datetimeString) {
      let monthNames = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ];
      let datetime = new Date(datetimeString);

      let day = datetime.getDate();
      let month = monthNames[datetime.getMonth()];
      let hours = datetime.getHours();

      return `${day} ${month} à ${hours}h`;
    },
  },
};
</script>
