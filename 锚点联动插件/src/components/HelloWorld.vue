<template>
  <div>
    <div class="left_">
      <ul class="left_ul">
        <li v-for="(it,i) in center_" class="left_li" @click="dianji(i)">{{it}}</li>
      </ul>
    </div>
    <div class="center_">
      <ul>
        <li class="center_li">1</li>
        <li class="center_li">2</li>
        <li class="center_li">3</li>
        <li class="center_li">4</li>
        <li class="center_li">5</li>
        <li class="center_li">6</li>
        <li class="center_li">7</li>
        <li class="center_li">8</li>
        <li class="center_li">9</li>
        <li class="center_li">10</li>
        <li class="center_li">11</li>
        <li class="center_li">12</li>
        <li class="center_li">13</li>
        <li class="center_li">14</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center_: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14"
      ],
      index_num: 0,
      topArr: []
    };
  },
  mounted() {
    $(".left_").css("height", $(window).height() + "px");
    window.addEventListener("scroll", this.handleScroll, true); // 监听滚动时间
    var center_li = $(".center_li"); // 获取中心内容li类集合
    for (let i = 0; i < center_li.length; i++) {
      //循环获取中心内容每个li距离文档顶部的距离 push到数组
      this.topArr.push(center_li[i].offsetTop);
    }
  },
  methods: {
    dianji(i) {
      // document.documentElement.scrollTop = this.topArr[i];
      // document.body.scrollTop = this.topArr[i];
      $("html,body").animate({ scrollTop: this.topArr[i] + "px" }, 0);
    },
    handleScroll(e) {
      // 滚动联动代码
      var left_li = $(".left_li"); //左侧li类集合
      var scrollTop =
        e.target.documentElement.scrollTop || e.target.body.scrollTop; //获取页面混动的距离
      //循环中心内容每个li距离文档顶部的距离数组
      for (let i = 0; i < this.topArr.length; i++) {
        if (scrollTop <= this.topArr[i]) {
          //当页面滚动的距离小于等于循环到当前中心内容li距离文档顶部的距离时，执行，并跳出循环
          this.index_num = i;
          break;
        }
      }
      for (let j = 0; j < left_li.length; j++) {
        left_li[j].className = "left_li";
      }
      left_li[this.index_num].className = "left_li active_";

      // 左侧定位代码
      var that = this;
      // 总高度
      var z_h = $(".left_li").height() * this.topArr.length;
      // 可视窗口的高度
      var w_h = $(window).height();
      // 向上滚动高度
      var g_h = $(".left_li").height() * that.index_num;
      if (z_h - g_h <= w_h) {
        $(".left_ul").css({ "margin-top": -(z_h - w_h) + "px" });
      } else {
        $(".left_ul").animate(
          {
            "margin-top": -that.index_num * $(".left_li").height() + "px",
            bottom: "auto"
          },
          0
        );
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.left_ {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 50px;
  background: #333;
  .left_ul {
    .left_li {
      color: white;
      height: 80px;
      line-height: 80px;
      font-size: 20px;
      text-align: center;
    }
    .active_ {
      color: #333;
      background: white;
    }
  }
}
.center_ {
  .center_li {
    height: 500px;
    text-align: center;
  }
}
</style>
