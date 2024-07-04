<template>
  <div class="home">
    <Navbar />

    <main>
      <div class="about-container w-full">
        <div class="about-container-title">LE COQ SPORTIF</div>
        <div class="about-container-details">
          <div class="about-container-subtitle title red">
            Le Coq sportif<br />
            votre équipementier pour tous vos sports
          </div>
          <div class="about-container-txt-1">
            Le Coq Sportif est l'équipementier français par excellence pour tous
            vos sports. Du rugby au cyclisme en passant par le football, nos
            équipements conçus et fabriqués en France sont là pour accompagner
            toutes vos séances sportives.
            <br /><br />
            Fier de ses origines françaises, Le Coq Sportif a été créé pour les
            Français et habille de nombreux athlètes représentant la France.
          </div>
          <div class="about-container-subtitle title red">notre vision</div>
          <div class="about-container-vision w-full">
            <div class="about-container-vision-card">Détermination</div>
            <div class="about-container-vision-card">Inclusivité</div>
            <div class="about-container-vision-card">Progrès</div>
          </div>
          <div>
            <div class="about-container-txt-2">
              Aujourd'hui, toutes les disciplines sportives ne sont pas toujours
              représentées ou légitimisées. Chez Le Coq Sportif, nous sommes
              convaincus que le sport traditionnel et l'e-sport partagent des
              valeurs fondamentales communes telles que la détermination,
              l'inclusivité et la compétition. Ces valeurs les unissent et
              méritent d'être célébrées ensemble, plutôt que séparément. En
              unissant ces deux univers, notre objectif est d'inspirer et de
              rapprocher les communautés de sportifs et de gamers, en mettant en
              lumière ce qui les unit.
            </div>
            <div class="about-container-txt-3">
              <span class="red"
                >Nous croyons fermement que l'e-sport, tout comme le sport
                traditionnel, doit être pratiqué dans un esprit d'inclusivité et
                de respect.</span
              >
              C'est pourquoi nous nous engageons à promouvoir ces valeurs à
              travers tous nos événements. En célébrant la diversité et en
              encourageant un environnement où chaque participant, qu'il soit
              athlète ou gamer, se sent valorisé et respecté. C’est pourquoi
              nous espérons construire un pont solide entre ces deux mondes.
              <br /><br />
              <span class="red"
                >Le Mois des Champions est bien plus qu'un simple événement
                :</span
              >
              c'est une célébration de l'esprit sportif sous toutes ses formes.
              En mettant en avant des histoires inspirantes, des défis
              captivants et des innovations technologiques, nous souhaitons
              montrer que l'excellence sportive ne connaît pas de frontières,
              qu'elles soient physiques ou virtuelles. Ensemble, nous pouvons
              créer un futur où le sport et l'e-sport coexistent
              harmonieusement, enrichissant nos vies et nos communautés.
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
  name: "About",
  components: {
    Navbar,
  },
};
</script>
