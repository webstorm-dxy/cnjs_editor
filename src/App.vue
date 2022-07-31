<template>
  <div id="app">
    <h3 class="aline cent">CNJS代码编辑器</h3>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-submenu index="1">
        <template slot="title">文件</template>
        <el-menu-item index="1-1">新建</el-menu-item>
        <el-menu-item index="1-2">打开</el-menu-item>
        <el-menu-item index="1-3">保存</el-menu-item>
        <el-menu-item index="1-4">另存为</el-menu-item>
        <el-menu-item index="1-5">设置</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">编辑</template>
        <el-menu-item index="2-1">撤回</el-menu-item>
        <el-menu-item index="2-2">重做</el-menu-item>
        <el-menu-item index="2-3">全选</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">运行</template>
        <el-menu-item index="3-1">翻译</el-menu-item>
        <el-menu-item index="3-2">运行</el-menu-item>
      </el-submenu>
    </el-menu>
    <el-collapse v-model="activeNames" @change="handleChange" class="block">
      <el-collapse-item title="终端(console)" name="1">
        <div>
          <span class="codeblock-class">终端</span>
          <br>
          <span class="codeblock-func">.日志(<span class="codeblock-args">输出内容</span>)</span>
        </div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
      <el-collapse-item title="可控 Controllability" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>
    <div class="code-edit">
      <code-editor
          ref="addcodeform"
          v-model:value="cmadd.value"
          v-model:id="cmadd.id"
          @update:value="cmadd.value = $event"
      ></code-editor>
    </div>

  </div>
</template>

<script>
import CodeEditor from "@/components/CodeEditor";
import {ref} from "vue";
let ConsoleModelIsClick = false;

export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      Text: "",

    };
  },
  components:{CodeEditor},
  setup(){
    const cmadd=ref({value:"",id:0});
    return{cmadd}
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    consoleModel() {
      ConsoleModelIsClick = true;
    },
    ReturnConsoleModel() {
      return ConsoleModelIsClick;
    },

  }
}
</script>

<style>
.aline {
  display: inline;
}

.cent {
  text-align: center;
}

.block {
  width: 200px;
  height: auto;
  float: left;
}

.fl-left {
  float: left;
}

.codeblock-func {
  color: #00c4ff;
  background-color: rgba(0, 196, 255, 0.24);
  border-radius: 5px;
}

.codeblock-class {
  color: #ff8800;
  background-color: rgba(255, 136, 0, 0.15);
  border-radius: 5px;
}

.codeblock-args {
  color: #288802;
  background-color: rgba(47, 255, 0, 0.15);
  border-radius: 5px;
}

.code-edit {
  float: left;
}

.ace-container {
  position: relative;
}

.ace-editor {
  width: 500px;
  height: 200px;
}
</style>
