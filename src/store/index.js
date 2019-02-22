
import Vue from 'vue'
import Vuex from 'vuex'
import grzxmodule from './modules/grzxmodule/index'

Vue.use(Vuex)

export default new Vuex.Store({    
    modules: {
        grzxmodule: grzxmodule
    }
})