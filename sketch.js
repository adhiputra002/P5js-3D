function setup() {
  // Membuat canvas 3D
  createCanvas(400, 400, WEBGL);
}

function draw() {
  // Mengatur background
  background(135, 206, 250); // Warna langit

  // Menambahkan pencahayaan
  directionalLight(255, 255, 255, 0.5, 1, -0.5);
  ambientLight(100);

  // Mengatur rotasi karakter berdasarkan waktu
  rotateY(frameCount * 0.01);

  // Membuat model karakter Minecraft
  push();
  drawCharacter();
  pop();
}

// Fungsi untuk membuat karakter Minecraft-like
function drawCharacter() {
  // Kepala
  push();
  translate(0, -75, 0);
  fill(255, 224, 189); // Warna kulit
  box(50,50,50); 
  pop();

  // Badan
  push();
  translate(0, 0, 0);
  fill(0, 102, 204); // Warna biru untuk badan
  box(70, 100, 40); 
  pop();

  // Lengan kiri
  push();
  translate(-50, 0, 0); // Geser ke kiri
  fill(0, 102, 204); 
  box(20, 80, 20); 
  pop();

  // Lengan kanan
  push();
  translate(50, 0, 0); // Geser ke kanan
  fill(0, 102, 204); // Warna biru
  box(20, 80, 20); 
  pop();

  // Kaki kiri
  push();
  translate(-20, 75, 0); // Geser ke bawah dan kiri
  fill(102, 51, 0); // Warna coklat untuk celana
  box(20, 80, 20); 
  pop();

  // Kaki kanan
  push();
  translate(20, 75, 0); // Geser ke bawah dan kanan
  fill(102, 51, 0); // Warna coklat untuk celana
  box(20, 80, 20); 
  pop();
}
