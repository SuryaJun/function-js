alert(`Selamat datang di game tebak angka
kamu diminta untuk menebak angka 1 - 3
dan kamu akan bermain dalam 5 ronde
player yang berhasil mengumpulkan tebakan terbanyak akan menang
SELAMAT BERMAIN!!`);

let skorP1 = 0;
let skorP2 = 0;
let stop = false;


function inputPlayer(player) {
    const rangeNumber = [1, 2, 3];
    let angka = prompt(`player ${player} : Masukkan angka`);
    while ((rangeNumber.includes(angka))) {
        alert("angka yang dimasukkan hanya 1-3");
        angka = prompt(`Player ${player} : masukkan angka`);
    }
    return angka;
}

for(let ronde = 1; ronde <= 5; ronde++) {
    alert(`ronde ${ronde}`);
    let angkaBenar = Math.floor(Math.random() * 3) + 1;
    let p1 = inputPlayer(1);
    let p2 = inputPlayer(2);    


    while (p1 == p2) {
        alert("tebakan tidak boleh sama");
        p1 = inputPlayer(1);
        p2 = inputPlayer(2); 
    }

    if(p1 == angkaBenar) {
        alert("Good Jobs Player 1");
        skorP1++;
    }
    else if (p2 == angkaBenar) {
        alert("Good Jobs Player 2");
        skorP2++;
    }
    else {
        alert("semua tebakan salah");
    }
    
}

if (skorP1 > skorP2) {
    alert(`Player 1 menang dengan skor ${skorP1}-${skorP2}`);
}else if (skorP2 > skorP1) {
    alert(`Player 2 menang dengan skor ${skorP1}-${skorP2}`);
}else {
    alert(`Pertandingan SERI dengan skor ${skorP1}-${skorP2}`);
}