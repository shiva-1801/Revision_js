const one=document.getElementById("iner")
        const tw=document.getElementById("two")
        const api_url = "https://api.quotable.io/random";
        async function hero(url) {
            const response = await fetch(url);
            var data = await response.json();
            console.log(data);
            one.innerHTML=data.content;
            tw.innerHTML=data.author;

        }
         hero(api_url);