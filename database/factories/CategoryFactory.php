<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Category>
 */
class CategoryFactory extends Factory
{
    protected $model = Category::class;

    public function definition()
    {
        return [
          'name' => $name = $this->faker->unique()->words(3, true),
          'slug' => Str::slug($name),
          'description' => $this->faker->sentence,
        ];
    }
}
