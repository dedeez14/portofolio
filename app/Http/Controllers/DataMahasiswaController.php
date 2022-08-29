<?php

namespace App\Http\Controllers;

use App\Models\DataMahasiswa;
use Illuminate\Http\Request;

class DataMahasiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dataMhs = DataMahasiswa::all();
        $dataMhs = $dataMhs->toArray();

        return view('view.mahasiswa.index', compact('dataMhs'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // compact('pddkn');
        return view('view.mahasiswa.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $model = new DataMahasiswa;
        // dd($request);exit;
        $request->validate([
            'nama' => 'required',
            'email' => 'required',
            'password' => 'required',
            'no_hp' => 'required',
            'alamat' => 'required',
            'pendidikan_terakhir' => 'required',
            'fakultas' => 'required',
            'semester' => 'required',
            'gelar' => 'required',
        ]);
        // dd($request);exit;
        echo "<pre>";
        print_r($request);
        echo "<pre>";
        $model->nama = $request->nama;
        $model->email = $request->email;
        $model->password = $request->password;
        $model->no_hp = $request->no_hp;
        $model->no_hp_orangtua = $request->no_hp_orangtua;
        $model->alamat = $request->alamat;
        $model->pendidikan_terakhir = $request->pendidikan_terakhir;
        $model->fakultas = $request->fakultas;
        $model->semester = $request->semester;
        $model->gelar = $request->gelar;
        $model->created_at = date();
        $model->updated_at = date();
        $model->save();
        
        return back()->with('sukses','data Mahasiswa Berhasil di Tambahkan !!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DataMahasiswa  $dataMahasiswa
     * @return \Illuminate\Http\Response
     */
    public function show(DataMahasiswa $dataMahasiswa)
    {
        return view('view.mahasiswa.show', compact('dataMahasiswa'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DataMahasiswa  $dataMahasiswa
     * @return \Illuminate\Http\Response
     */
    public function edit(DataMahasiswa $dataMahasiswa)
    {
        return view('view.mahasiswa.edit', compact('dataMahasiswa'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DataMahasiswa  $dataMahasiswa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $model = DataMahasiswa::find($id);

        $request->validate([
            'nama' => 'required',
            'email' => 'required',
            'password' => 'required',
            'no_hp' => 'required',
            'alamat' => 'required',
            'pendidikan_terakhir' => 'required',
            'fakultas' => 'required',
            'semester' => 'required',
            'gelar' => 'required',
        ]);

        $model->nama = $request->nama;
        $model->nama = $request->nama;
        $model->email = $request->email;
        $model->password = $request->password;
        $model->no_hp = $request->no_hp;
        $model->no_hp_orangtua = $request->no_hp_orangtua;
        $model->alamat = $request->alamat;
        $model->pendidikan_terakhir = $request->pendidikan_terakhir;
        $model->fakultas = $request->fakultas;
        $model->semester = $request->semester;
        $model->gelar = $request->gelar;
        $model->created_at = date();
        $model->updated_at = date();
        $model->save();
        return back()->with('sukses','data Mahasiswa Berhasil di Update !!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DataMahasiswa  $dataMahasiswa
     * @return \Illuminate\Http\Response
     */
    public function destroy(DataMahasiswa $dataMahasiswa)
    {
        $dataMahasiswa->delete();
        return back()->with('sukses','Data Berhasil di delete !');
    }
}
