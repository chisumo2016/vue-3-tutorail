<template>
  <Data />
  <DemoOne />
  <DemoTwo />
  <Methods />
  <Vmodel/>
  <Computed />
  <Watch/>

  <ProvideInject />
  <TemplateRef />
  <Person/>
  <ClickCounter/>

  <br><br>
</template>

<script>

import Data from "./components/Data";
import DemoOne from "./components/DemoOne";
import DemoTwo from "./components/DemoTwo";
import Methods from "./components/Methods";
import Vmodel from "./components/Vmodel";
import Computed from "./components/Computed";
import Watch from "./components/Watch";
import ProvideInject from "./components/ProvideInject";
import TemplateRef from "./components/TemplateRef";
import Person from "./components/Person";
import ClickCounter from "./components/ClickCounter";

export default {
  name: 'App',
  components: {

    Data,
    DemoOne,
    DemoTwo,
    Methods,
    Vmodel,
    Computed,
    Watch,
    ProvideInject,
    TemplateRef,
    Person,
    ClickCounter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
