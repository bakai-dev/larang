<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class LocaleTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function set_locale_from_header()
    {
        $this->withHeaders(['Accept-Language' => 'ru'])
            ->postJson('/api/login');

        $this->assertEquals('ru', $this->app->getLocale());
    }

    /** @test */
    public function set_locale_from_header_short()
    {
        $this->withHeaders(['Accept-Language' => 'en-US'])
            ->postJson('/api/login');

        $this->assertEquals('en', $this->app->getLocale());
    }
}