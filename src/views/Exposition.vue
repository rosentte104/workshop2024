<template>
  <div class="home">
    <Navbar />

    <main>
      <div class="expo-container w-full">
        <div class="expo-container-title w-full">
          Exposition “Des Premiers Pas aux Sommets”
        </div>
        <div class="expo-container-txt w-full">
          Dans le cadre du Mois des Champions, Le Coq Sportif est fier de vous
          présenter une exposition unique en son genre, dédiée à l'évolution des
          équipements sportifs traditionnels et des setups d'esport. Cette
          exposition célèbre les pionniers de nos générations et retrace les
          innovations marquantes pour créer un pont entre le sport traditionnel
          et l'esport. Nous avons tous commencé quelque part, que ce soit sur
          une piste d'athlétisme ou devant un écran. Découvrez comment les
          premiers pas de vos sportifs et e-sportifs favoris, ainsi que
          l’évolution de leurs premiers équipements, rappelant que la passion et
          la persévérance sont les véritables moteurs de la réussite.
        </div>
        <div class="expo-container-row w-full">
          <div
            class="expo-container-row-img"
            v-for="(item, index) in imgList"
            :key="index"
          >
            <img v-lazy="item" />
          </div>
        </div>
        <button class="expo-btn btn">
          <a href="/booking">Réserver ma visite</a>
        </button>
        <div class="expo-container-subtitle title w-full">
          Ce qui vous attend
        </div>
        <div class="expo-container-txt w-full">
          Plongez dans une expérience immersive et captivante lors de
          l'exposition "Des Premiers Pas aux Sommets". <br /><br />Découvrez ou
          re-découvrez les success stories de vos sportifs et e-sportifs favoris
          en revivant les moments vibrants de leur carrière, à travers des
          interviews et des vidéos exclusives, puis partez à l’exploration des
          équipements historiques qui ont fait leur carrière. Laissez-vous
          inspirer par les histoires des athlètes et des gamers qui ont surmonté
          des obstacles pour atteindre les sommets de leurs disciplines
          respectives. <br /><br />Raquettes, sneakers, set-ups, ballons de tous
          genres, uniformes... Découvrez comment ces équipements ont évolué au
          fil de leurs débuts modestes jusque leurs carrières à succès.
          <br /><br />Remontez le temps en mettant au jour les avancées
          technologiques qui ont permis de faire évoluer la carrière des
          pionniers du sport traditionnel et de l’e-sportifs. <br /><br />Vibrez
          en participant à nos expériences interactives où vous pourrez essayer
          des équipements innovants et découvrir les nouvelles technologies
          sportives, et assistez à leurs démonstrations en direct.
          <br /><br />Cette exposition est l’occasion de réveiller le sportif
          qui sommeille en vous !
        </div>
        <div class="expo-container-subtitle title w-full">ACCÈS</div>
        <div class="expo-container-txt w-full">
          Transports en Commun : <br />
          · Métro : Ligne 8, Station "Olympisme" <br />
          · Bus : Lignes 32, 45, Arrêt "Centre d'Exposition" <br />
          · Tramway : Ligne T3, Arrêt "Olympisme" <br />Parking : <br />
          · Parking disponible sur place, entrée Rue de l'Olympisme.
        </div>
        <div class="expo-container-map w-full">
          <iframe
            class="expo-container-map-card w-full"
            src="https://www.openstreetmap.org/export/embed.html?bbox=2.3530161380767827%2C48.92516397771102%2C2.355883419513703%2C48.92667074707273&amp;layer=mapnik"
          ></iframe
          ><br /><small
            ><a
              href="https://www.openstreetmap.org/#map=19/48.92592/2.35445&amp;layers=N"
              >Grandir la map</a
            ></small
          >
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Exposition",
  components: {
    Navbar,
  },
  data() {
    return {
      imgList: [
        require("../assets/images/Rectangle 15.png"),
        require("../assets/images/Rectangle 16.png"),
        require("../assets/images/Rectangle 17.png"),
        require("../assets/images/Rectangle 19.png"),
        require("../assets/images/Rectangle 18.png"),
        require("../assets/images/Rectangle 20.png"),
      ],
      mapUrl: "https://www.openstreetmap.org/#map=19/48.92592/2.35445&layers=N",
    };
  },
};
</script>
