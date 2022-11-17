<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('wise_accounts')->insert([
            'account_no' => 'Wise Bank (USD)',
            'account_name' => '9600009111331869',
            'account_id' => '4dae8287-51f7-4277-b556-f6409f8c4982'
        ]);
        DB::table('wise_accounts')->insert([
            'account_no' => 'Wise Bank (GBP)',
            'account_name' => '23147024730434',
            'account_id' => 'ba3216c3-007d-44c4-963c-5e46a4ed70f5'
        ]);
    }
}
