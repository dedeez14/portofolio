<form action="{{ route('data_mahasiswa.store') }}" method="post" class="row g-2"  enctype="multipart/form-data">
    @csrf
    <div class="col-md-4">
      <label for="validationServer01" class="form-label">Nama</label>
      <input type="text" class="form-control form-control-sm" id="validationServer01" placeholder='Masukan Nama' max='12' required>
    </div>
    <div class="col-md-4">
      <label for="validationServer01" class="form-label">Email</label>
      <input type="email" class="form-control form-control-sm" id="validationServer01" placeholder='Masukan Email' required>
    </div>
    <div class="col-md-4">
      <label for="validationServer01" class="form-label">Password</label>
      <input type="password" class="form-control form-control-sm" id="validationServer01" placeholder='Masukan Password' required>
    </div>
    <div class="col-md-4">
      <label for="validationServer01" class="form-label">Nomer Hp</label>
      <input type="text" class="form-control form-control-sm" id="validationServer01" placeholder='Masukan No Hp' required>
    </div>
    <div class="col-md-4">
      <label for="validationServer01" class="form-label">Nomer Orang Tua</label>
      <input type="text" class="form-control form-control-sm" id="validationServer01" placeholder='Masukan No Orang tua'>
    </div>
    <div class="col-md-4">
      <label for="validationServer01" class="form-label">Alamat</label>
      <textarea class='form-control form-control-sm' placeholder='Masukan Alamat' required></textarea>
    </div>
    <div class="col-md-4">
        <label for="validationServer01" class="form-label form-label-sm">Pendidikan Terakhir</label>
        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option value="1">DIPLOMAT</option>
            <option value="2">SARJANA</option>
            <option value="3">SMK</option>
          </select>
    </div>
    <div class="col-md-4">
      <label for="validationServer01" class="form-label">Fakultas</label>
      <input type="text" class="form-control form-control-sm" id="validationServer01" placeholder='Masukan Fakultas' required>
    </div>
    <div class="col-md-4">
      <label for="validationServer01" class="form-label">Semester</label>
      <input type="number" min="1" max="11" class="form-control form-control-sm" id="validationServer01" placeholder='Masukan Semester' required>
    </div>
    <div class="col-md-4">
      <label for="validationServer01" class="form-label">Gelar</label>
      <input type="text" class="form-control form-control-sm" id="validationServer01" placeholder='Masukan Gelar' required>
    </div>
    <div class="col-12">
      <button class="btn btn-primary btn-sm" type="submit">Submit Form</button>
    </div>
  </form>
