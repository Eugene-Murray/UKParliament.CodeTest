﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UKParliament.CodeTest.Data.Entities;
using UKParliament.CodeTest.Data.ViewModels;

namespace UKParliament.CodeTest.Services
{
    public interface IDepartmentService
    {
        List<DepartmentViewModel> Get();
    }
}
