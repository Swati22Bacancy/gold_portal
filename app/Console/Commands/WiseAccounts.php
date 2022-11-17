<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use GuzzleHttp\Client;

use function GuzzleHttp\json_decode;

class WiseAccounts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'wise:accounts';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch Transactions from Wise Accounts';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        return 0;
    }
}
