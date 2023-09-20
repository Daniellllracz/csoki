let allapot = {
    csokik: [
        {
            nev: "Étcsoki",
            ara: 2500,
            raktaron: true
        },
        {
            nev: "Fehér csoki",
            ara: 3500,
            raktaron: false
        },
        {
            nev: "Lyukas csoki",
            ara: 1500,
            raktaron: true
        }

    ]
};

// Termékek aktualizálása, kiolvasása
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
function ujtermek() {
    document.getElementById("uj-csoki").onsubmit ;
    let nev = event.target.elements.nev.value;
    console.log(nev);
    let ar = event.target.elements.ar.value;
    console.log(ar);
    let megtart = event.target.elements.megtart.value;
    console.log(megtart);
    document.getElementById("ujcucc").innerHTML  = `
    <h2>Új csoki hozzáadása</h2>
                
    </div>
</div>
<form id="uj-csoki" class="p-5">
    <label class="w-100">

    <p>Termék neve: </p><input type="text" id="nev" class="form-control" placeholder="Csoki nevét"> 
</label>

<label class="w-100">
    <p>Termék ára: </p><input type="text" id="ar" class="form-control" placeholder="Árát (Szám)">
</label>

<label class="w-100">
    <p>

  Van-e készleten: <input type="checkbox" class="form-control" id="megtart">
    </p>  
</label>
    <button class="btn btn-primary" type="submit" id="">Mentés</button>
</form>
    `

    
    
    
}
