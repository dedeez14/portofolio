<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DataMahasiswa>
 */
class DataMahasiswaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $faker = $this->faker;
        $pddkn = [
            'SMK' => '',
            'D3' => '',
            'D2' => '',
            'D1' => '',
            'S1' => '',
            'S2' => '',
        ];
        return [
            'nama' => $faker->userName(),
            'email' => $faker->email(),
            'password' => $faker->password(),
            'no_hp' => $faker->phoneNumber(12, true),
            'no_hp_orangtua' => $faker->phoneNumber(12, true),
            'alamat' => $faker->address(),
            'pendidikan_terakhir' => $faker->randomKey($pddkn),
            'fakultas' => $faker->company(),
            'semester' => $faker->randomDigitNotNull(),
            'gelar' => $faker->jobTitle(),
        ];
    }
}
