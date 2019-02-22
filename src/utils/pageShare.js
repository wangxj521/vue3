import wxShare from '@/utils/wxShare'

export default function pageShare(router) {
    router.afterEach((to, from) => {
        let hrefUrl = window.location.href;
        hrefUrl = hrefUrl.split('/cet_');
        let wxUrl = hrefUrl[0] + to.path;
        let link = wxUrl+'share';
        wxShare({ title: to.meta.title, desc: to.meta.desc, link: link, imgUrl: to.meta.imgurl, url: wxUrl })
    })
}
