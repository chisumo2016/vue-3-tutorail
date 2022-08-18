<template>
<!--template<Greet  name="Brue" hero-name="Tanzania"/>-->
<!--<Greet  name="Dian" hero-name="Uganda"/>-->
<!--<Greet  name="Bos"  hero-name="Kenya"/>-->
<!--<Greet  :name="name"  :hero-namee="channel"/>-->
  <h3>App Component username {{ name}}</h3>
  <ComponentC />

  <Article id="my-article" title="Article Title" :likes="50" :isPublished="true"/>
  <button @click="showPopup=true">Show Popup</button>
  <Popup v-show="showPopup" @close="closePopup"/>
  <br>
  <input type="text" v-model="myName" placeholder=" custom components">

  <Input v-model="myName"/>

<!--  <Card content="Card content 1"/>-->
<!--  <Card content="Card content 2"/>-->
  <Card></Card>
  <Card>Card Content</Card>
  <Card><h2>Card Content</h2></Card>
  <Card>
    <img src="https://picsum.photos/200" alt="">
  </Card>

  <Card>
     <template v-slot:header>
        <h3>Header</h3>
     </template>
    <template v-slot:default>
      <img src="https://picsum.photos/200" alt="">
    </template>
    <template v-slot:footer>
      <button>Views Details</button>
    </template>
  </Card>
  <NameList>
     <template v-slot:default="slotProps">
       {{ slotProps.firstName}} {{ slotProps.lastName}}
     </template>
  </NameList>
  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.firstName}} {{ slotProps.lastName}}
    </template>
  </NameList>

  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.firstName}}
    </template>
  </NameList>
  <br>
  <h4>App Component Txt</h4>
  <ChildStyles>ChildStyles Component</ChildStyles>
  <button @click="activeTab = 'TabA'">Tab A</button>
  <button @click="activeTab = 'TabB'">Tab B</button>
  <button @click="activeTab = 'TabC'">Tab C</button>
  <!---- NOT BEST IDEA ,ESP YOU HAVE MANY TABS
  <TabA v-if="activeTab === 'TabA'"/>
  <TabB v-if="activeTab === 'TabB'"/>
  <TabC v-if="activeTab === 'TabC'"/>-->
  <keep-alive>
      <component :is="activeTab" />
  </keep-alive>

  <teleport to="#portal-root">
    <Portal />
  </teleport>
</template>

<script>

//import Greet from "./components/Greet";
import Article from "./components/Article";
import ComponentC from "./components/ComponentC";
import Popup from "./components/Popup";
import Input from "./components/Input";
import Card from "./components/Card";
import NameList from "./components/NameList";
import ChildStyles from "./components/ChildStyles";
import TabA from "./components/TabA";
import TabB from "./components/TabB";
import TabC from "./components/TabC";
import Portal from "./components/Portal";

export default {
  name: 'App',
  components: {  //object
    ComponentC,
    //Greet, //key and value
    Article,
    Popup,
    Input,
    Card,
    NameList,
    ChildStyles,
    TabA,
    TabB,
    TabC,
    Portal,

  },
  data(){ //data properties
     return{
       name: 'Chisumo',
       channel: 'Codevolution',
       showPopup: false,
       myName:'',
       activeTab:'Tab A'
     }
  },
  methods:{
    closePopup(name){
      this.showPopup = false
      console.log('name', name)
    }
  },
  provide() {  //function w/c return an object
   return{
     username: this.name
   }
    //username: 'Chisumo'
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h4{
  color: orange
}
</style>
