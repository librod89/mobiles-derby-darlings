$(function() {
  if ($("#home").length > 0) {
    new Vue({
      el: '#home',
      data: {
        showHomePage: true,
        showAboutPage: false,
        showJoinPage: false,
        showSchedulePage: false
      },
      methods: {
        aboutBtnClick: function(event) {
          this.setAllPagesToFalse();
          this.showAboutPage = true;
          window.location.hash = '#about'
        },
        scheduleBtnClick: function() {
          this.setAllPagesToFalse();
          this.showSchedulePage = true;
          window.location.hash = '#schedule'
        },
        joinBtnClick: function() {
          this.setAllPagesToFalse();
          this.showJoinPage = true;
          window.location.hash = '#join'
        },
        setAllPagesToFalse: function() {
          this.showHomePage = false;
          this.showAboutPage = false;
        }
      },
      created: function() {
        var hash = window.location.hash;
        if (hash == '#join') {
          this.joinBtnClick();
        } else if (hash == '#about') {
          this.aboutBtnClick();
        } else if (hash == '#schedule') {
          this.scheduleBtnClick();
        }
      }
    });
  }
});