const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) =>
  res.send('<center><h1>Akses lewat POSTMAN ya!</h1></center>')
);

app.get('/siswa/:nama', (req, res) => {
  let namaSiswa = req.params.nama;
  res.end('Nama siswa tertampil: ', namaSiswa);
});

app.post('/siswa', (req, res) => {
  let namaSiswa = req.body.nama;
  let alamat = req.body.alamat;
  res.end('Siswa tertampil ialah ', namaSiswa, ' yang berada di ', alamat);
});

app.delete('/siswa/:id', (req, res) => {
  let id = req.params.id;
  let namaSiswa = req.body.nama;
  res.end('ID ', id, 'telah dihapus, dengan siswa a.n. ', namaSiswa);
});

app.put('/siswa/:id', (req, res) => {
  let id = req.params.id;
  let namaSiswa = req.body.nama;
  let alamat = req.body.alamat;
  res.end('Nama siswa dengan ID: ', id, ' telah diperbarui');
});

//4 lagi

app.get('/guru/:nama', (req, res) => {
  let namaGuru = req.params.nama;
  res.end('Nama guru tertampil: ', namaGuru);
});

app.post('/guru', (req, res) => {
  let namaGuru = req.body.nama;
  let alamat = req.body.alamat;
  res.end('Guru tertampil ialah ', namaGuru, ' yang berada di ', alamat);
});

app.delete('/guru/:id', (req, res) => {
  let id = req.params.id;
  let namaGuru = req.body.nama;
  res.end('ID ', id, 'telah dihapus, dengan guru a.n. ', namaGuru);
});

app.put('/guru/:id', (req, res) => {
  let id = req.params.id;
  let namaGuru = req.body.nama;
  let alamat = req.body.alamat;
  res.end('Nama guru dengan ID: ', id, ' telah diperbarui');
});

//4 lagi

app.get('/cs/:nama', (req, res) => {
  let namaCS = req.params.nama;
  res.end('Nama siswa tertampil: ', namaSiswa);
});

app.post('/cs', (req, res) => {
  let namaCS = req.body.nama;
  let alamat = req.body.alamat;
  res.end('CS tertampil ialah ', namaSiswa, ' yang berada di ', alamat);
});

app.delete('/cs/:id', (req, res) => {
  let id = req.params.id;
  let namaCS = req.body.nama;
  res.end('ID ', id, 'telah dihapus, dengan CS a.n. ', namaGuru);
});

app.put('/cs/:id', (req, res) => {
  let id = req.params.id;
  let namaCS = req.body.nama;
  let alamat = req.body.alamat;
  res.end('Nama CS dengan ID: ', id, ' telah diperbarui');
});

//port
app.listen(port, () => console.log('Terkoneksi!'));
