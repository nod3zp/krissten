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
    data() {
        return {
            disallowed: ['$', '.', ',', ':', ';', '?', '{', '}', '(', ')', '[', ']', '-', '+', '=', '/', '*', "'", '"', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' ']
        }
    },
    methods: {
        encrypt: function()
        {
            var btn = document.querySelector('#btn');
            var input = document.querySelector('#in');
            var output = document.querySelector('#out');
            var disCodes = [];
            this.disallowed.forEach((i)=>{ disCodes.push(i.charCodeAt()) });
            
            var a = input.value;
            var out = "";
            
            for(let x = 0; x < a.length; x++)
            {
                var code = a[x].charCodeAt();
                console.log(code);
                if(!disCodes.includes(code))
                {
                    out += str2uni(code.toString());
                } else {
                    out += ` ${a[x]} `;
                }
            }

            output.value = out;
        }
    }
});
