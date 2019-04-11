$(function() {
  if ($("#home").length > 0) {
    new Vue({
      el: '#home',
      data: {
        showHomePage: true,
        showAboutPage: false,
        showJoinPage: false,
        showSchedulePage: false,
        showOurSponsersPage: false,
        showSponsorshipInfoPage: false,
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
        ourSponsorsClick: function() {
          this.setAllPagesToFalse();
          this.showOurSponsersPage = true;
          window.location.hash = '#our-sponsors'
        },
        sponsorshipInfoClick: function() {
          this.setAllPagesToFalse();
          this.showSponsorshipInfoPage = true;
          window.location.hash = '#sponsorship-info'
        },
        setAllPagesToFalse: function() {
          this.showHomePage = false;
          this.showJoinPage = false;
          this.showAboutPage = false;
          this.showSchedulePage = false;
          this.showOurSponsersPage = false;
          this.showSponsorshipInfoPage = false;
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
        } else if (hash == '#our-sponsors') {
          this.ourSponsorsClick();
        } else if (hash == '#sponsorship-info') {
          this.sponsorshipInfoClick();
        }
      }
    });
  }
});