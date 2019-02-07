import Vue from 'vue';
import Vuex from 'vuex' ;


Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        changedinputval : '',
        addtext : ''
    },
    mutations : {
        changeinput : function(state,changedinputval){
            state.changedinputval = changedinputval ;
        },
        addtextcontext : function(state,val){
            console.log('Called through action -> mutation ', val);
            state.addtext = val ;
        }
    },
    getters : {
        getinputval : function(state) {
            return state.changedinputval ;
        },
        getprevtext : function(state){
            return state.addtext ;
        }
    },
    actions : {
        dispatchaction : function(context,val){
            context.commit('addtextcontext' , val);
        }
    }
});