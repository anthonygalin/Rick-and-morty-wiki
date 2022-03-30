<template>
  <main>
    <div class="grid grid-cols-1 px-10 pt-12 lg:px-20 md:grid-cols-2 gap-8">
      <!--   Spanish project presentation   -->
      <div class="flex flex-col gap-2">
        <div
          class="grid grid-cols-2 justify-items-center border-b-2 border-primary md:border-0 md:grid-cols-1 md:justify-items-stretch"
        >
          <h1
            class="self-end text-xl md:text-2xl font-medium md:border-b-2 md:border-primary text-center"
          >
            Sobre el Proyecto
          </h1>
          <img
            class="h-24 block md:hidden"
            src="../assets/utils/rick_and_morty_home_second_image.png"
            alt="Home spanish image"
          />
        </div>
        <p class="indent-4 text-justify">
          Bienvenidos a la wiki de
          <span class="text-secondary">"Rick and Morty"</span>, he realizado
          esta pequeña App para practicar la maquetación web en la misma he
          utilizado las siguientes tecnologías:
        </p>
        <ol class="indent-4">
          <li class="text-primary">
            -"Vuex"
            <span class="text-white">Como framework.</span>
          </li>
          <li class="text-secondary">
            -"Tailwind"
            <span class="text-white">Como libreria CSS.</span>
          </li>
          <li class="text-primary">
            -"Material Design Icons"
            <span class="text-white">Para los iconos.</span>
          </li>
          <li class="text-secondary">
            -"Axios"
            <span class="text-white">Para acceder a los datos de la Api.</span>
          </li>
          <li class="text-primary">
            -"API utilizada"
            <a
              href="https://rickandmortyapi.com/"
              class="text-white underline decoration-secondary decoration-2"
              >Link a la api.</a
            >
          </li>
        </ol>
        <p class="indent-4 text-justify">
          El proyecto fue creado de tal manera que es totalmente responsive de
          esa manera no tendrá problemas al visualizarse tanto en equipos
          "Móviles" como en "Desktops".
        </p>
        <address>
          Me pueden contactar con el siguiente correo:
          <span class="text-secondary">"anthonygalin@gmail.com".</span><br />
          Por mi Linkedin:
          <a href="https://www.linkedin.com/in/anthonyrga/" class="text-primary"
            >"Anthony Galindo".</a
          >
        </address>
      </div>
      <!--   Home images   -->
      <img
        class="h-3/4 hidden md:block"
        src="../assets/utils/rick_and_morty_home_second_image.png"
        alt="Home spanish image"
      />
      <img
        class="h-3/4 hidden md:block"
        src="../assets/utils/rick_and_morty_home_main_image.png"
        alt="Home english image"
      />
      <!--   Spanish project presentation   -->
      <div class="flex flex-col gap-2">
        <div
          class="grid grid-cols-2 justify-items-center border-b-2 border-primary md:border-0 md:grid-cols-1 md:justify-items-stretch"
        >
          <img
            class="h-24 block md:hidden"
            src="../assets/utils/rick_and_morty_home_main_image.png"
            alt="Home english image"
          />
          <h1
            class="self-end text-xl md:text-2xl font-medium md:border-b-2 md:border-primary text-center"
          >
            About the project
          </h1>
        </div>
        <p class="indent-4 text-justify">
          Welcome to the
          <span class="text-secondary">"Rick and Morty" wiki</span>, I've done
          this small App to practice Frontend web development, here I have used
          the following technologies:
        </p>
        <ol class="indent-4">
          <li class="text-primary">
            -"Vuex"
            <span class="text-white">Like a framework.</span>
          </li>
          <li class="text-secondary">
            -"Tailwind"
            <span class="text-white">Like a CSS library.</span>
          </li>
          <li class="text-primary">
            -"Material Design Icons"
            <span class="text-white">For use icons designs.</span>
          </li>
          <li class="text-secondary">
            -"Axios"
            <span class="text-white">To access data from the API.</span>
          </li>
          <li class="text-primary">
            -"Used API"
            <a
              href="https://rickandmortyapi.com/"
              class="text-white underline decoration-secondary decoration-2"
              >Go to the API.</a
            >
          </li>
        </ol>
        <p class="indent-4 text-justify">
          The project was created in such a way that it is fully responsive that
          way you will not have problems when viewing both on "Mobile" and
          "Desktops".
        </p>
        <address>
          You can contact me with the following email:
          <span class="text-secondary">"anthonygalin@gmail.com".</span><br />
          On my Linkedin:
          <a href="https://www.linkedin.com/in/anthonyrga/" class="text-primary"
            >"Anthony Galindo".</a
          >
        </address>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
