<template>
  <div class="telemetry-application-main">
    <h1>Telemetry<span v-html="line_break"></span>Application</h1>
    <h2>Skyrocket your racing skills</h2>

    <h4>About us</h4>
    <p>We are a small team of three people and we are developing a application to view the telemetry data of your favourite racing games.
      If you want to help us with our project feel free to join our discord server or visit our website</p>
    <h4>Goals for our application</h4>
    <p>Our application will have offline as well as online features.
      You will be able to track your full telemetry from your favourite racing game as well as saving that data offline on your computer.
      You can also connect your application with an account and upload all of your telemetry data to our server so you can compare with other people and try to get as high on the leaderboard as possible.
      Different charts with the most important data are live updated while you're driving so you can use the application on a second monitor to have a quick look on your data while trying to get the fastest laps in.
      You will also be able to display essential things like the amount of fuel remaining as well as the number of laps you can finish with this amount of fuel.</p>

  </div>
</template>

<script>
export default {
  name: 'TelemetryApplicationMain',
  props: {
  },
  data() {
    return {
      line_break: " ",
    };
  },
  mounted() {
    if(window.innerHeight > window.innerWidth) {
      this.line_break = "</br>";
    } else {
      this.line_break = " ";
    }
    
    window.addEventListener("resize", this.resizeHandler);
  },
  unmounted() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    resizeHandler() {
      if(window.innerHeight > window.innerWidth) {
      this.line_break = "</br>";
    } else {
      this.line_break = " ";
    }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  * {
    color: $text_color;
  }

  h1 {
    font-size: 300%;
    text-shadow: 1px 1px #00000077;
  }

  h4 {
    text-decoration: underline;
    font-weight: normal;
    text-align: start;
    padding-left: 2ch;
    color: $medium_blue;
  }

  p {
    padding-left: 2ch;
    text-align: left;
    line-height: 1.5em;
    color: $washed_blue;
  }
</style>
