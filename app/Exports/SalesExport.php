<?php

namespace App\Exports;
use App\Models\Sales;

use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;

class SalesExport implements FromCollection
{
    public function collection() 
        { 
            return Sales::select('id','invoiceno')->get(); 
        }
}
