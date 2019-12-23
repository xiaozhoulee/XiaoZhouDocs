<template>
  <div id="app">
    <h1>
      <router-link to="/" class="m">{{Student_Manage}}</router-link>
    </h1>
    <div id="nav">
      <el-button type="success" plain class="btn btn1">
        <router-link to="/Clazz_List">{{Clazz_List}}</router-link>
      </el-button>
      <el-button type="warning" plain class="btn">
         <router-link to="/Student_List">{{Student_List}}</router-link>
      </el-button>
        
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      Student_Manage: "学生管理",
      Clazz_List: "班级列表",
      Student_List: "学生列表",
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app h1 {
  text-align: center;
  margin-bottom: 3%;
  margin-top: 1%;
  font-size: 40px;
}
#app .m {
  text-decoration: none;
  color: blue;
}
#app #nav {
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 2%;
}
#app #nav .btn{
  width: 200px;
}
#app #nav .btn1{
  margin-left: 35%;
}
#app #nav a {
  text-decoration: none;
  color:#606266;
  font-size: 20px;
  line-height: 35px;
  display: block;
  text-align: center;
  font-family: '楷体',
}
#app #nav a:hover {
  color: white;
}


</style>
