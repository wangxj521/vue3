import * as types from './mutation_type'
// import {Toast} from 'vux'


export default {
    [types.SETCOUNT](state,data){
        state.tscount = data
    },
    [types.URSERNICK](state,data){
        state.nickname = data
    },
    [types.USERHEADIMG](state,data){
        state.headimg = data;
    },
    [types.ADDLIST](state,data){
        state.list.push(data)
    },
    [types.CHANGEALLOW](state,data){
        if(state.homelist){
            for(let i=0;i<state.homelist.length;i++){
                state.homelist[i]['show']= data
            }
        }
        if(state.dyxflist){
            for(let j=0;j<state.dyxflist.length;j++){
                state.dyxflist[j]['show']= data
            }
        }
        if(state.firstlist){
            for(let i=0;i<state.firstlist.length;i++){
                state.firstlist[i]['show']= data
            }
        }
        if(state.xczxlist){
            for(let j=0;j<state.xczxlist.length;j++){
                state.xczxlist[j]['show']= data
            }
        }
        if(state.pajslist){
            for(let i=0;i<state.pajslist.length;i++){
                state.pajslist[i]['show']= data
            }
        }
        if(state.grzxlist){
            for(let j=0;j<state.grzxlist.length;j++){
                state.grzxlist[j]['show']= data
            }
        }
        if(state.qtlist){
            for(let j=0;j<state.qtlist.length;j++){
                state.qtlist[j]['show']= data
            }
        }
    },
    [types.CHANGESTATE](state,data){
            state.homelist[data]['isfirst'] = "false";
            switch(state.homelist[data]['lmid']){
                case "2":
                state.firstlist.push(state.homelist[data]);
                break;
                case "3":
                state.dyxflist.push(state.homelist[data]);
                break;
                case "4":
                state.xczxlist.push(state.homelist[data]);
                break;
                case "5":
                state.pajslist.push(state.homelist[data]);
                break;
                case "6":
                state.grzxlist.push(state.homelist[data]);
                break;
                case "11":
                state.qtlist.push(state.homelist[data]);
                break;
            }
            state.homelist.splice(data,1);
    },
    [types.CHANGESTATED](state,data){
            if(state.homelist.length<7){
                state.dyxflist[data]['isfirst']= "true";
                if(!state.homelist){
                    state.homelist =[];
                }
                state.homelist.push(state.dyxflist[data]);
                state.dyxflist.splice(data,1);
            }else{
                // Vue.$vux.toast.text('只允许七个图标','middle')
                // alert('只允许七个图标')
            }    
    },
    [types.CHANGEFIRST](state,data){
        if(state.homelist.length<7){
            state.firstlist[data]['isfirst']= "true";
            if(!state.homelist){
                state.homelist =[];
            }
            state.homelist.push(state.firstlist[data]);
            state.firstlist.splice(data,1);
        }else{
            // Vue.$vux.toast.text('只允许七个图标','middle')
        }    
    },
    [types.CHANGEXCZX](state,data){
        if(state.homelist.length<7){
            state.xczxlist[data]['isfirst']= "true";
            if(!state.homelist){
                state.homelist =[];
            }
            state.homelist.push(state.xczxlist[data]);
            state.xczxlist.splice(data,1);
        }else{
            // Vue.$vux.toast.text('只允许七个图标','middle')
        }    
    },
    [types.CHANGEPAJS](state,data){
        if(state.homelist.length<7){
            state.pajslist[data]['isfirst']= "true";
            if(!state.homelist){
                state.homelist =[];
            }
            state.homelist.push(state.pajslist[data]);
            state.pajslist.splice(data,1);
        }else{
            // Vue.$vux.toast.text('只允许七个图标','middle')
        }    
    },
    [types.CHANGEGRZX](state,data){
        if(state.homelist.length<7){
            state.grzxlist[data]['isfirst']= "true";
            if(!state.homelist){
                state.homelist =[];
            }
            state.homelist.push(state.grzxlist[data]);
            state.grzxlist.splice(data,1);
        }else{
            // Vue.$vux.toast.text('只允许七个图标','middle')
        }    
    },
    [types.CHANGEQT](state,data){
        if(state.homelist.length<7){
            state.qtlist[data]['isfirst']= "true";
            if(!state.homelist){
                state.homelist =[];
            }
            state.homelist.push(state.qtlist[data]);
            state.qtlist.splice(data,1);
        }else{
            // Vue.$vux.toast.text('只允许七个图标','middle')
        }    
    },
    [types.GETLISTDATA](state,data){
        state.homelist = data
    },
    [types.GETLISTDATAS](state,data){
        state.dyxflist = data
    },
    [types.GETFIRSTLIST](state,data){
        state.firstlist = data
    },
    [types.GETXCZXLIST](state,data){
        state.xczxlist = data
    },
    [types.GETPAJSLIST](state,data){
        state.pajslist = data
    },
    [types.GETGRZXLIST](state,data){
        state.grzxlist = data
    },
    [types.GETQTLIST](state,data){
        state.qtlist = data
    },

    [types.GETSTART](state,data){
        state.xj = data
    },
    [types.SETMYD](state,data){
        state.myd = data
    },
    [types.TUZHI](state,data){
        state.tuzhi = data
    },
    [types.TUZHINM](state,data){
        state.tuzhinm = data
    },
    [types.XUANZY](state,data){
        state.zylist = data
    },
    [types.XUANZZ](state,data){
        state.zzlist = data
    },
}