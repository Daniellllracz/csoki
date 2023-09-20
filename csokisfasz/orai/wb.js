let allapot = {
    csokik:[
        {
            nev: "Étcsoki",
            ara: 2500,
            raktaron:true
        },
        {
            nev: "Fehér csoki",
            ara: 3500,
            raktaron:false
        },
        {
            nev: "Lyukas csoki",
            ara: 1500,
            raktaron:true
        }

    ]
};
window.onload = function rendelCsokik() {
    let csokiHTML = "";
    for (const csoki of allapot.csokik) {
        console.log(csoki.nev)
        console.log(csoki.raktaron)
        if (csoki.raktaron) {
            csokiHTML +=
                `<div class="card m-2 p-3 text center bg-success text-white">
                <p><b>${csoki.nev} </b>   </p>
                <p>${csoki.ara} Ft</p>
            </div>`
        }
        else {
            csokiHTML +=
            `<div class="card m-2 p-3 text center bg-danger text-white">
            <p><b>${csoki.nev} </b>   </p>
            <p>${csoki.ara} Ft</p>
            </div>`
        }

        document.getElementById("csoki-lista").innerHTML = csokiHTML;
    }
}

// Termékek aktualizálása, kiolvasása

// űrlap
function ujtermek() {
    document.getElementById("uj-csoki").onsubmit = function(event){
        event.preventDefault();    
        let nev = event.target.elements.nev.value;
        console.log(nev);
        let ar = event.target.elements.ar.value;
        console.log(ar);
        let megtart = event.target.elements.megtart.value;
        console.log(megtart);
        document.getElementById("ujcucc").innerHTML  =  `
        <h4>Új csoki hozzáadása</h4>
        <form id="uj-csoki" class="p-5">
        <label class="w-100">
        <h5>Termék neve:</h5>
        <input type="text" name="nev" class="form-control">
        </label>
        
        <label class="w-100">
        <h5>Termék ára:</h5>
        <input type="number" name="ara" class="form-control">
        </label>
        
        <label class="w-100">
        <h5>Van-e raktáron?</h5>
        <input type="checkbox" name="raktaron" class="form-control">
        </label>
        
        <button class="btn btn-primary" type="submit">Felvitel</button>
        
        </form>
        `;}
    } ;