<template>
    <header class="header" id="header">
      <a @click="openMenu()" class="btn open-menu" href="#" role="button" style="background-color: #92dde4;color: #fff;">
        <i class='bx bx-menu'></i>
      </a>
    </header>
    <!-- Sidebar -->
    <nav class="sidebar light">
        
        <!-- close sidebar menu -->
        <div class="dismiss" @click="dismissOverlay()">
          <i class='bx bx-menu'></i>
        </div>
        
        <div class="logo">
            <img style="width: 70px;height: 70px;" src="../public/img/lidiaacawhite.png"/>
        </div>
        
        <ul class="list-unstyled menu-elements">
            <li>
                <a href="#otherSections1" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" @click="dropDownToggle" role="button" aria-controls="otherSections1">
                    <i class=""></i>Gestion
                </a>
                <ul class="collapse list-unstyled submenu" id="otherSections1">
                    <li>
                      <router-link to="/"  class="scroll-link">Panel de contratos</router-link>
                    </li>
                    <li>
                      <router-link to="/propertys" class="scroll-link">Propiedades</router-link>
                    </li>
                </ul>
            </li>
        </ul>
        
        
        <div class="dark-light-buttons">
            <a class="btn btn-primary btn-customized-4 btn-customized-dark" href="#" role="button">Dark</a>
            <a class="btn btn-primary btn-customized-4 btn-customized-light" href="#" role="button">Light</a>
        </div>
        
    </nav>
    <router-view/>
</template>


<script>
import $ from 'jquery'

export default {
  methods: {
    openMenu(){
      $('.sidebar').addClass('active');
      $('.overlay').addClass('active');
      // close opened sub-menus
      $('.collapse.show').toggleClass('show');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    },
    dismissOverlay(){
      $('.sidebar').removeClass('active');
      $('.overlay').removeClass('active');
    },
    dropDownToggle(event){
      $(event.target).attr('aria-controls')
      $('ul.submenu').removeClass('show')
      $('ul.submenu').addClass('collapse')
      $(`#${$(event.target).attr('aria-controls')}`).removeClass('collapse')
      $(`#${$(event.target).attr('aria-controls')}`).addClass('show')
    }
  }
}
</script>

<style lang="scss">
@import "../public/css/globals.css";
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "../public/css/side-bar.min.css";
@import "../public/css/menu.css";
</style>
