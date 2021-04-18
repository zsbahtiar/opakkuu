<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductsStoreRequest;
use App\Http\Requests\ProductsUpdateRequest;
use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductsCollection;
use App\Models\Products;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class ProductsController extends Controller
{
    /**
     * Get list product
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Products/Index', [
            'filters' => Request::all('search', 'trashed'),
            'products' => new ProductsCollection(
                Products::orderBy('created_at', 'desc')
                    ->filter(Request::only('search', 'trashed'))
                    ->paginate()
                    ->appends(Request::all())
            ),
        ]);
    }

    /**
     * Page of create product
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Products/Create',[
            'created_by' => Auth::user()->name,
        ]);
    }

    /**
     * Handle create product
     * @param ProductsStoreRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(ProductsStoreRequest $request)
    {
        Products::create(
            $request->validated()
        );

        return Redirect::route('products')->with('success', 'Product created.');
    }

    /**
     * Page of edit/detail product
     * @param Products $product
     * @return \Inertia\Response
     */
    public function edit(Products $product)
    {
        return Inertia::render('Products/Edit', [
            'product' => new ProductResource($product),
        ]);
    }

    /**
     * Handle update product
     * @param Products $product
     * @param ProductsUpdateRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Products $product, ProductsUpdateRequest $request)
    {
        $product->update(
            $request->validated()
        );

        return Redirect::back()->with('success', 'Product updated.');
    }

    /**
     * Handle delete product
     * @param Products $product
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy(Products $product)
    {
        $product->delete();

        return Redirect::back()->with('success', 'Product deleted.');
    }

    /**
     * Handle restore product
     * @param Products $product
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore(Products $product)
    {
        $product->restore();

        return Redirect::back()->with('success', 'Product restored.');
    }
}
