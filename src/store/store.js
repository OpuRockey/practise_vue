import Vue from 'vue';
import Vuex from 'vuex' ;


Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        changedinputval : ''
    },
    mutations : {
        changeinput : function(state,changedinputval){
            state.changedinputval = changedinputval ;
        }
    },
    getters : {
        getinputval : function(state) {
            return state.changedinputval ;
        }
    }
});