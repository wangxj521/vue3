export default function previewImage(nowurl, nexturls) {
    console.log(nowurl)
    wx.ready(function () {
        wx.previewImage({
            current: nowurl, // 当前显示图片的http链接
            urls: nexturls // 需要预览的图片http链接列表
        });
    });
}