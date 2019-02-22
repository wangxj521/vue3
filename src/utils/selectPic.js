export default function selectPic(){
    wx.ready(function() {
        wx.chooseImage({
          count: 1,
          sizeType: ["original", "compressed"],
          sourceType: ["album", "camera"],
          success: function(res) {
            let localids = res.localIds;
            wx.uploadImage({
              localId: localids[0], // 需要上传的图片的本地ID，由chooseImage接口获得
              isShowProgressTips: 1, // 默认为1，显示进度提示
              success: function(result) {
                let serverId = result.serverId; // 返回图片的服务器端ID
                return serverId
              }
            })
          },
          fail: function() {},
          complete: function() {}
        });
    });
}



// addpic() {
//     let self = this;
//     wx.ready(function() {
//       wx.chooseImage({
//         count: 1,
//         sizeType: ["original", "compressed"],
//         sourceType: ["album", "camera"],
//         success: function(res) {
//           let localids = res.localIds;
//           wx.uploadImage({
//             localId: localids[0], // 需要上传的图片的本地ID，由chooseImage接口获得
//             isShowProgressTips: 1, // 默认为1，显示进度提示
//             success: function(result) {
//               let serverId = result.serverId; // 返回图片的服务器端ID
//               let data = self.$qs.stringify({
//                 serverId: serverId
//               });
//               self.$axios.post("/api/index/global_downPic", data)
//                 .then(res => {
//                   if (res.data.code == 200) {
//                     let src = res.data.data.path;
//                     let msg = res.data.data.msg;
//                     alert(src);
//                     self.pic1.push(src);
//                     self.paif = false;
//                     self.$vux.toast.text(msg, "middle");
//                     self.$axios
//                       .post("/Pan_Czsb/api/czf_sfzsb", data)
//                       .then(res => {
//                         if (res.data.code == 200) {
//                           self.name = res.data.data.nm;
//                           self.value1 = res.data.data.sex;
//                           self.minzu = res.data.data.nation;
//                           self.address = res.data.data.address;
//                           self.idcode = res.data.data.sfzid;
//                         } else {
//                           self.$vux.toast.text("读取失败", "middle");
//                         }
//                       });
//                   } else {
//                   //   self.$vux.toast.text("上传失败", "middle");
//                   self.$vux.toast.text(msg, "middle");
//                   }
//                 });
//             }
//           });
//         },
//         fail: function() {},
//         complete: function() {}
//       });
//     });
//   }