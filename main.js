const tombolMulai = document.getElementById('mulai')
const quiz        = document.getElementById('Quiz')
const gerbang     = document.getElementById('gerbang')
const soal        = document.getElementById('mulaiSoal')
const Soal        = document.getElementById('soal')


tombolMulai.addEventListener("click", function () {
    gerbang.classList.add("tutup");
    quiz.classList.add("aktif");
    quiz.classList.remove("tutup");
})

const formEmail = document.getElementById('email')
const formName  = document.getElementById('nama')
soal.addEventListener("click", function (e) {
    e.preventDefault();
    
    if (formEmail.value !== "" && formName.value !== "") {
        quiz.classList.add("tutup");
        Soal.classList.remove("tutup")
        kirim.classList.remove("tutup")
        Soal.classList.add("aktif");
        kirim.classList.add("aktif")
    }
});

const kirim = document.getElementById('selesai')
const notif = document.getElementById('akhir')
kirim.addEventListener("click", function () {
    notif.classList.remove("tutup")
    notif.classList.add("aktif")
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbyZNkDHlL0Wjd_NZ3gcz8f2ibj3uVf65nmsoSS8NWPSquY2x4DCABjjxJwHbi-K-50/exec'
const form = document.forms['submit-to-google-sheet']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response =>
        console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
    
    

const kembali = document.getElementById('back')
const kirimLagi = document.getElementById('again')    
kembali.addEventListener("click", function () {
    gerbang.classList.add("aktif")
    gerbang.classList.remove("tutup")
    notif.classList.remove("aktif")
    notif.classList.add("tutup")
    Soal.classList.remove("aktif")
    Soal.classList.add("tutup")
})
kirimLagi.addEventListener("click", function () {
    quiz.classList.add("aktif")
    quiz.classList.remove("tutup")
    notif.classList.remove("aktif")
    notif.classList.add("tutup")
    Soal.classList.remove("aktif")
    Soal.classList.add("tutup")

})
