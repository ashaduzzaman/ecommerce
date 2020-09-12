<?php

namespace Modules\Accounts\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Contracts\Support\Renderable;
use Modules\Accounts\AccountService\AccountService;

class AccountsController extends Controller
{
    private $account;

    public function __construct(AccountService $account)
    {
        $this->account = $account;
    }
    public function class(){
        // return $this->account->test();
        return User::getUserByKey('id', 1);
    }

    public function class2(){
        return $this->account->test();
    }
}
