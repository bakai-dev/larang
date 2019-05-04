<?php
namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;
use JWTAuth;
class AuthResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'user' => [
                'id' => $this->id,
                'name' => $this->name,
                'email' => $this->email,
            ],
        ];
    }
}