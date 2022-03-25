alert(`Selamat datang di game tebak angka
kamu diminta untuk menebak angka 1 - 3
dan kamu akan bermain dalam 5 ronde
player yang berhasil mengumpulkan tebakan terbanyak akan menang
SELAMAT BERMAIN!!`);

let skorP1 = 0;
let skorP2 = 0;
let stop = false;

for(let ronde = 1; ronde <= 5; ronde++) {
    alert(`ronde` + ronde);
    const rangeNumber = [1, 2, 3];
    let p1 = prompt('Player 1 : Masukkan angka');
    let p2 = prompt('Player 2 : Masukkan angka');
    
    while(p1 == p2) {
        alert("tebakan tidak boleh sama");
        stop = false;
    }
    if(p1 > p2) {
        alert("Good Jobs Player 1");
        skorP1++;
    }
    else if(p1 < p2) {
        alert("Good Jobs Player 2");
        skorP2++;
    }
    else if(rangeNumber > 3) {
        alert("angka tidak boleh lebih dari 3");
    }
    
}