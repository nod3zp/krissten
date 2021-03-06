function str2uni(str) {
    let _output = '';
    for(let x = 0; x < str.length; x++)
    {
        let code = str[x].charCodeAt();
        _output += '\\u' + ('0000' + code.toString(16)).slice(-4);
    }
    return _output;
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

let app = new Vue({
    el: '#app',
    methods: {
        encrypt: function()
        {
            var btn = document.querySelector('#btn');
            var input = document.querySelector('#in');
            var output = document.querySelector('#out');
            
            var a = input.value;
            
            var strings = a.matchAll(/\"(.*?)\"/gi);
            Array.from(strings).forEach((match)=>{
                a = a.replace(`"${match[1]}"`, `"${str2uni(match[1])}"`);
            });

            output.value = a;
        }
    }
});
