<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Products;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $user = User::create([
            'name' => 'Bahtiar',
            'email' => 'zsbahtiar',
            'password' => Hash::make('123123123'),
            'phone' => '82219583279',
        ]);

        Products::create([
            'name'  => 'Men T-Shirt 77025',
            'price' => 177500,
            'description' => '- cotton material
- Short sleeve
- Detailed typography on the chest
- Hotcut details at the bottom
- Model height is 180cm
- Care label cotton

SIZE (CM) | S | M | L | XL |',
            'photo' => 'https://images.tokopedia.net/img/cache/900/product-1/2021/3/16/2668215/2668215_9553d763-14c5-4ced-9654-e92dd4968e1a.jpeg',
            'created_by' => $user->name,
            'slug'  => Str::slug('Men T-Shirt 77025','-'),
        ]);

        Products::create([
            'name'  => 'Men T-Shirt 8532',
            'price' => 88750,
            'description' => '- cotton material
- Short sleeve
- logo on the Chest
- Hotcut details at the bottom
- Model height is 180cm
- Care label cotton
- SIZE (CM) | S | M | L | XL |

CIRCLE OF THE AGENCY | 95 | 99 | 103 | 107 |
AGENCY LENGTH | 68 | 70 | 72 | 74 |
HAND LENGTH | 19 | 20 | 21 | 22 |',
            'photo' => 'https://images.tokopedia.net/img/cache/900/product-1/2021/3/16/2668215/2668215_4d83f050-b0cf-44e2-bae5-1a906e392a24.jpeg',
            'created_by' => $user->name,
            'slug'  => Str::slug('Men T-Shirt 8532','-'),
        ]);

        Products::create([
            'name'  => 'FMC Speed Supply Men Tshirt 120321 - l',
            'price' => 189500,
            'description' => '- 24s cotton material
- Long sleeve
- Stripe Series
- Logo on the chest
- Hot cut at the bottom
- Model height is 180cm
- Care label cotton

SIZE (CM) | S | M | L | XL |
CIRCLE OF THE AGENCY | 101 | 104 | 107 | 110 |
AGENCY LENGTH | 73 | 75 | 77 | 77 |
HAND LENGTH | 65 | 66 | 67 | 67 |',
            'photo' => 'https://images.tokopedia.net/img/cache/900/product-1/2021/4/15/2668215/2668215_32e1dd90-c198-4843-8a50-50a8df3a7a3f.jpeg',
            'created_by' => $user->name,
            'slug'  => Str::slug('FMC Speed Supply Men Tshirt 120321 - l','-'),
        ]);
    }
}
