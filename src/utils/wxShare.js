import axios from "axios";
import qs from 'qs'


export default function wxShare(params) {

    /* 頧頧修改: 2018-10-13 02:59:23
       新增了code判断，防止二次访问接口进行页面config，注意代码调用
    */
    let strarr = params.url.split('code');
    const host=localStorage.getItem('G_host');
    const instance = axios.create({
        baseURL: host,
        timeout: 5000 // request timeout
    })
    if (typeof (params.url) == "undefined" || typeof (strarr[1]) == 'undefined') {  //增加二次访问接口判断
        console.log('没找到……')
    } else {
        instance.post("/main/Api/WxPageConfig", qs.stringify({ url: params.url })).then(res => {
            // console.log("后端获取wxconfig:" + res.data.data.nonceStr);
            if (res.data.code == "2004") {
                // store.commit(types.LOGOUT);
                /* 頧頧修改: 2018-10-23 07:20:51
                   session认证信息丢失，当前页强制刷新
                */
                Vue.$vux.toast.text('正在重新登陆', 'middle')
                window.location.reload();
                /* 修改结束 */
                return;
            }
            // console.log(wx)
            let appId = res.data.data.appId;
            let nonceStr = res.data.data.nonceStr;
            let timestamp = res.data.data.timestamp;
            let signature = res.data.data.signature;
            wx.config({
                debug: false, // 开启调试模式,
                appId: appId, // 必填，企业号的唯一标识，此处填写企业号corpid
                timestamp: timestamp, // 必填，生成签名的时间戳
                nonceStr: nonceStr, // 必填，生成签名的随机串
                signature: signature,// 必填，签名，见附录1
                jsApiList: ['checkJsApi',
                    'chooseImage',
                    'previewImage',
                    'uploadImage',
                    'downloadImage',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'scanQRCode',
                    'startRecord',
                    'stopRecord',
                    'onVoiceRecordEnd',
                    'playVoice',
                    'pauseVoice',
                    'stopVoice',
                    'onVoicePlayEnd',
                    'uploadVoice',
                    'downloadVoice',
                    'translateVoice'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });

            wx.ready(function () {
                   
                wx.onMenuShareAppMessage({
                    title: params.title, // 分享标题
                    desc: params.desc || '龙游通', // 分享描述
                    link: params.link || params.url || window.location.href, // 分享链接
                    imgUrl: params.imgUrl || 'https://cet.cet0570.com/upload/vuedefault/defaultlogo.gif', // 分享图标,
                    success: function (res) {
                        alert('已分享');
                    }
                });

                wx.onMenuShareTimeline({
                    title: params.desc || '龙游通', // 分享标题，由于分享到朋友圈没有desc，所以这里采用的策略是，指定的朋友圈分享标题优先，其次采用发送给朋友的描述，最后采用默认文案。
                    link: params.link ||params.url || window.location.href, // 分享链接
                    imgUrl: params.imgUrl || 'https://cet.cet0570.com/upload/vuedefault/defaultlogo.gif', // 分享图标,
                    success: function (res) {
                        alert('已分享信息');
                        
                    }
                });

                //注册微信播放录音结束事件【一定要放在wx.ready函数内】
                wx.onVoicePlayEnd({
                    success: function (res) {
                        //stopWave();
                    }
                });
            });
        });
    }
}

