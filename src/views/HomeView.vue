<template>
  <main>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center place-items-end px-10 py-4 lg:px-40"
    >
      <!--   Spanish project presentation   -->
      <div class="pb-8">
        <div class="grid grid-cols-1 pb-2">
          <img
            class="h-24 block md:hidden place-self-end"
            src="../assets/utils/rick_and_morty_home_second_image.png"
            alt="Home spanish image"
          />
          <h1
            class="self-end text-base md:text-2xl font-medium border-b-2 border-primary text-center"
          >
            Sobre el Proyecto
          </h1>
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
        class="w-64 hidden md:block"
        src="../assets/utils/rick_and_morty_home_second_image.png"
        alt="Home spanish image"
      />
      <img
        class="w-64 hidden md:block"
        src="../assets/utils/rick_and_morty_home_main_image.png"
        alt="Home english image"
      />
      <!--   English project presentation   -->
      <div>
        <div class="grid grid-cols-1 pb-2">
          <img
            class="h-24 block md:hidden"
            src="../assets/utils/rick_and_morty_home_main_image.png"
            alt="Home english image"
          />
          <h1
            class="self-end text-base md:text-2xl font-medium border-b-2 border-primary text-center"
          >
            About the project
          </h1>
        </div>
        <p class="indent-4 text-justify">
          Welcome to the
          <span class="text-secondary">"Rick and Morty"</span>wiki, I've done
          this small App to practice Frontend web development, here I used this
          technologies:
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
            <span class="text-white">Icons designs.</span>
          </li>
          <li class="text-secondary">
            -"Axios"
            <span class="text-white">Manage API.</span>
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
          The project was created in a way that it's fully responsive that way
          you will not have problems when you are viewing both "Mobile" and
          "Desktop".
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
