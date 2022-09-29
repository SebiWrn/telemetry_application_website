<template>
  <a :href="href">
    <div class="bubble">
      <img :src="img_require" :alt="alt" ref="image">
      <h3 :style="{color: text_color}">{{text}}</h3>
    </div>
  </a>
</template>

<script>
export default {
  name: 'LinkBubble',
  props: {
    img_require: String,
    href: String,
    alt: {
      default: "",
      type: String
    },
    text: String,
    text_color: String
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  a {
    text-decoration: none;
    background-color: #00000017;
    border-style: solid;
    border-color: #00000049;
    border-radius: 10%;
    color: $text_color;
    padding: 5px;
    height: fit-content;
    padding-bottom: 3em;
  }

  .bubble {
    width: 10vw;
    height: 10vw;

    img {
      width: 80%;
      height: 80%;
    }

    @media screen and (orientation: portrait) {
      width: 30vw;
      height: 30vw;
    }

    h3 {
      color: $text_color;
      font-size: 2em;
      margin-top: .5em;
    }
  }
</style>
