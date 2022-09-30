
var desc = ['de', 'en', 'tr', 'us'];
async function arrayOfApi () {
    for( var item of desc){
        console.log(item + ' - from the array');
        var reqUrl = `https://api.publicapis.org/entries?title=${item}`;
        console.log('making url request: '+ reqUrl);
        let resposne = await axios.get(reqUrl);
        console.log(resposne.data);
    }
}

arrayOfApi();

