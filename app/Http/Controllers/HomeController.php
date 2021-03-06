<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductsCollection;
use App\Models\Products;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Index', [
            'filters' => Request::all('search'),
            'products' => new ProductsCollection(
                Products::filter(Request::only('search'))
                    ->orderBy('created_at', 'desc')
                    ->paginate()
                    ->appends(Request::all())
            ),
        ]);
    }

    /**
     * @param Products $product
     * @return \Inertia\Response
     */
    public function ProductDetail(Products $product)
    {
        return Inertia::render('Home/Detail', [
            'product' => new ProductResource($product),
            'others'    => new ProductsCollection(Products::where('id', '<>', $product->id)->inRandomOrder()->limit(4)->get())
        ]);
    }
}
