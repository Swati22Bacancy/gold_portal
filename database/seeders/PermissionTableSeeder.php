<?php

namespace Database\Seeders;
use App\Models\Permission;

use Illuminate\Database\Seeder;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            'role-list',
            'role-create',
            'role-edit',
            'role-delete',
            'customer-list',
            'customer-create',
            'customer-edit',
            'customer-delete',
            'view_customer',
            'user-create',
            'user-list',
            'user-edit',
            'user-delete',
            'group-create',
            'group-list',
            'group-edit',
            'group-delete',
            'currency-create',
            'currency-list',
            'currency-edit',
            'currency-delete'
         ];
 
 
         foreach ($permissions as $permission) {
              Permission::firstOrCreate(['name' => $permission]);
         }
    }
}
