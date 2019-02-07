export const exampleMixin = {
    created : function(){
        console.log(' hello world. The world is really great');
    },
    methods : {
        getCalcData : function(){
            console.log('Called from getCalcData');
            return 'Called from getCalcData Text' ;
        }
    }
}