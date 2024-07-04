<template>
  <div class="home">
    <Navbar />

    <main>
      <div class="home-container">
        <div>
          <img v-lazy="imgBanner" alt="LE MOIS DES SPORTIFS" />
          <div>
            <div class="red home-container-banner-title w-full title">
              CE MOIS-CI,
            </div>
            <div class="home-container-banner-sub-title w-full title">
              célébrons L'UNION DES SPORTS
            </div>
            <div class="home-container-banner-date w-full">
              Du 1er au 30 Juillet 2024
            </div>
            <div class="home-container-banner-text w-full">
              Parce que le sport fait vibrer le cœur de chacun, Le Coq Sportif
              vous invite à découvrir un événement inédit qui réconcilie le
              sport traditionnel et l'e-sport : le Mois des Champions !
              <br /><br />
              Joignez-vous à nous pour célébrer l'inclusion et l'unité de toutes
              les disciplines sportives.
              <br /><br />
              Ensemble, redéfinissons ce que signifie être un champion !
            </div>
            <button class="home-btn-black-white w-full btn">
              <a href="/events">Découvrir Le Programme</a>
            </button>
          </div>
        </div>

        <div>
          <div class="home-container-sportifs-title red title w-full">
            nos sportifs
          </div>
          <el-carousel :interval="4000" type="card" height="450px">
            <el-carousel-item v-for="sportif in sportifs" :key="sportif">
              <img v-lazy="sportif.url" alt="sportif" />
              <div class="home-container-sportif-name">{{ sportif.name }}</div>
              <div class="home-container-sportif-cat">{{ sportif.cat }}</div>
            </el-carousel-item>
          </el-carousel>
        </div>

        <div>
          <div class="home-container-sportifs-title red title w-full">
            nos e-sportifs
          </div>
          <el-carousel :interval="4000" type="card" height="450px">
            <el-carousel-item v-for="eSportif in eSportifs" :key="eSportif">
              <img v-lazy="eSportif.url" alt="sportif" />
              <div class="home-container-sportif-name">{{ eSportif.name }}</div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div>
          <div class="home-slogan">
            "Du terrain au clavier : une passion, des performances."
          </div>
        </div>
        <div class="home-twitch-container">
          <div class="home-twitch-container-bgtxt">TWITCH</div>
          <div class="home-twitch-container-details-left">
            <img v-lazy="imgTwitch" alt="Twitch" />
          </div>
          <div class="home-twitch-container-details-right">
            <div class="home-twitch-container-txt">
              Pour suivre l'ensemble des événements Twitch avec nos streamers !
            </div>
            <button class="home-btn-white-red">
              <a href="/events">Découvrir</a>
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {
      imgBanner: require("../assets/images/LE MOIS DES SPORTIFS 1.png"),
      imgTwitch: require("../assets/images/nikita-kachanovsky-FJFPuE1MAOM-unsplash-removebg-preview 1.png"),
      sportifs: [
        {
          name: "Didier Deschamps",
          url: "https://supgirondins.com/wp-content/uploads/2024/06/iconsport_231598_0608-1.jpg?w=1024",
          cat: "Football",
        },
        {
          name: "Thierry Henry",
          url: "https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/sport/football-thierry-henry-nomme-selectionneur-de-lequipe-de-france-espoirs-4199474/60499311-1-fre-FR/Football-Thierry-Henry-nomme-selectionneur-de-l-equipe-de-France-Espoirs.jpg",
          cat: "Football",
        },
        {
          name: "Griezman",
          url: "https://i.pinimg.com/originals/65/06/9c/65069ce6b7364abfd8d410ce7dae44ac.jpg",
          cat: "Football",
        },
        {
          name: "Tony Parker",
          url: "https://cdn.prod.website-files.com/653feb0813eca8550f9f8ec2/65cb3422b679cbb672f41d4d_tony-parker-investisseur.webp",
          cat: "Basket",
        },
        {
          name: "Teddy Riner",
          url: "https://img.20mn.fr/3hltFautS5S-b6FKrlVMtyk/1444x920_teddy-riner-a-declare-se-sentir-en-forme-avant-les-jo-de-paris-2024-ce-qui-promet-de-nouvelles-medailles-pour-cette-legende-du-judo",
          cat: "Judo",
        },
        {
          name: "Clarisse Agbegnenou",
          url: "https://www.lejdd.fr/lmnr/var/jdd/public/media/image/2022/07/22/16/la-judokate-clarisse-agbegnenou-le-dimanche-on-danse-on-chante-on-rigole-et-surtout-on-mange.jpg?VersionId=VWUyngAkVOnr3ZGr0rV_5L7DjA3gOP_i",
          cat: "Judo",
        },
        {
          name: "Gaël Monfils",
          url: "https://media.gqmagazine.fr/photos/6475d14e8e8457689a904245/master/pass/DOCKERS_Gael-Monfils-11.jpg",
          cat: "Tennis",
        },
        {
          name: "Emmanuelle Morch",
          url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.laprovence.com%2Farticle%2Fregion%2F1789364448533616%2Ftennis-emmanuelle-moerch-se-prepare-aux-jeux-paralympiques-de-paris-2024&psig=AOvVaw3GtJ0_Zw3eqowa8iMcGBmk&ust=1720125890564000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDd57vei4cDFQAAAAAdAAAAABAE",
          cat: "Tennis",
        },
        {
          name: "Jessy Trémoulière",
          url: "https://equipe-france.s3.eu-west-3.amazonaws.com/img/personne/rugby-jessy-tremouliere-1.jpg",
          cat: "Rugby",
        },
        {
          name: "Sébastien Chabal",
          url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2W_ahC-TMdDHQHZ8njhV3J9Z2LzjGwkORfqxGUF97GL4iaAP_",
          cat: "Rugby",
        },
        {
          name: "Alexandre Léauté",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAdNXgDIqYyPXsmWldUSM5QnF6h_o_dHG8YQ&s",
          cat: "Cyclisme",
        },
        {
          name: "Pauline Ferrand-Prévot",
          url: "https://www.vojomag.com/app/uploads/2021/01/pfp-bmc.jpg",
          cat: "Cyclisme",
        },
      ],
      eSportifs: [
        {
          name: "Gotaga",
          url: "https://lvdneng.rosselcdn.net/sites/default/files/dpistyles/vdn_864w/node_646759/40882948/public/afp/2019/10/4/9/7791bafceec0e249ffe7a770f0319cddba4bd081.jpg?itok=mqYg_N2s1570182302",
        },
        {
          name: "Kameto",
          url: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2023/3/12/cn2fwwvzlzu2d8c960sp/kameto-commentateur-esport",
        },
        {
          name: "Locklear",
          url: "https://vainkeurz.com/wp-content/uploads/2023/05/3-3.png",
        },
        {
          name: "Teeqzy",
          url: "https://actustream.fr/img/streamers/teeqzy.jpg",
        },
        {
          name: "Squeezie",
          url: " https://cdn-s-www.lalsace.fr/images/50EE43B2-24F2-4ECC-8974-37E3C646F414/MF_contenu/apres-quatre-mois-de-pause-squeezie-revient-sur-youtube-le-18-mai-1715513377.jpg",
        },
      ],
    };
  },
};
</script>
