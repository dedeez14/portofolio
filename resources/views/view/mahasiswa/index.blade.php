@extends('layouts.app')

@section('content')
<a href="{{ route('data_mahasiswa.create') }}"><button type="button" class="btn btn-success btn-sm mb-2">Tambah Mahasiswa</button></a>
@if (Session::get('sukses'))
<div class="alert alert-success" role="alert">
    Data Berhasil Disimpan !
</div>
@endif
    <div class="card mb-4 table-responsive">
            <table class="table-primary table-bordered text-center">
                <thead>
                    <tr>
                        <td>Nama</td>
                        <td>Pendidikan</td>
                        <td>Semester</td>
                        <td>Gelar</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($dataMhs as $item)
                    <tr>
                        <td>{{ $item['nama'] }}</td>
                        <td>{{ $item['pendidikan_terakhir'] }}</td>
                        <td>{{ $item['semester'] }}</td>
                        <td>{{ $item['gelar'] }}</td>
                        <td>
                            <button type="button" class="btn btn-info btn-sm">Read</button>
                            <button type="button" class="btn btn-primary btn-sm">Update</button>
                            <button type="button" class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>

    </div>
@endsection
