<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductsStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'max:100'],
            'price' => ['required', 'min:0', 'numeric'],
            'description' => ['required', 'max:350'],
            'photo' => ['required'],
            'created_by' => ['required'],
            'slug' => ['required'],
        ];
    }
}
