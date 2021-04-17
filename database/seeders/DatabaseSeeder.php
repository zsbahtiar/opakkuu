<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Products;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $user = User::create([
            'name' => 'Zam Zam Saeful Bahtiar',
            'email' => 'zamzamsaefulbahtiar@yahoo.com',
            'password' => Hash::make('12345678'),
        ]);

        Products::create([
            'name'  => 'Men T-Shirt 77025',
            'price' => 177500,
            'description' => '- cotton material\n- Short sleeve\n- Detailed typography on the chest\n- Hotcut details at the bottom\n- Model height is 180cm\n- Care label cotton\nSIZE (CM) | S | M | L | XL |',
            'photo' => 'https://images.tokopedia.net/img/cache/900/product-1/2021/3/16/2668215/2668215_9553d763-14c5-4ced-9654-e92dd4968e1a.jpeg',
            'created_by' => $user->name,
        ]);

        Products::create([
            'name'  => 'Men T-Shirt 8532',
            'price' => 88750,
            'description' => '- cotton material\n- Short sleeve\n- logo on the Chest\n- Hotcut details at the bottom\n- Model height is 180cm\n- Care label cotton\nSIZE (CM) | S | M | L | XL |\nCIRCLE OF THE AGENCY | 95 | 99 | 103 | 107 |\nAGENCY LENGTH | 68 | 70 | 72 | 74 |\nHAND LENGTH | 19 | 20 | 21 | 22 |',
            'photo' => 'https://images.tokopedia.net/img/cache/900/product-1/2021/3/16/2668215/2668215_4d83f050-b0cf-44e2-bae5-1a906e392a24.jpeg',
            'created_by' => $user->name,
        ]);
    }
}
