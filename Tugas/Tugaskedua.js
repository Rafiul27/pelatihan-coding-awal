const readline = require('readline')


const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Masukkan Nama anda ? ", (nama) => {
    rl.question("Masukkan Nomor Handphone anda ? ", (handphone) => {
        rl.question("Masukkan Email anda ? ", (email) => {
            console.log(`Nama saya adalah ${nama}, ` + `nomor telepon saya ${handphone}, `  + `dan email saya adalah ${email}, Thank You!!`,);
            rl.close();
        })
    })
});