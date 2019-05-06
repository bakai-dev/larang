<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use JWTAuth;

class RegisterTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function can_register()
    {
        $response = $this->postJson('/api/auth/register', [
            'name' => 'Test User',
            'email' => 'test@test.app',
            'password' => 'secret',
            'password_confirmation' => 'secret',
        ]);

        $user = User::whereEmail('test@test.app')->first();
        $this->assertNotNull($user);
        $this->assertEquals($user->id, $response->json('data.user.id'));
        $this->assertEquals($user->name, $response->json('data.user.name'));
        $this->assertEquals($user->email, $response->json('data.user.email'));
        $token = JWTAuth::setToken($response->headers->get('api-token'))->getPayload();
        $response->assertHeader('api-token');
        $this->assertEquals($user->id, JWTAuth::getPayload($token)->get('sub'));
    }

    /** @test */
    public function can_not_register_with_existing_email()
    {
        factory(User::class)->create(['email' => 'test@test.app']);

        $this->postJson('/api/register', [
            'name' => 'Test User',
            'email' => 'test@test.app',
            'password' => 'secret',
            'password_confirmation' => 'secret',
        ])
            ->assertStatus(422)
            ->assertJsonValidationErrors(['email']);
    }
}