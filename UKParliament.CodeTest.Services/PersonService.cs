﻿using System;
using UKParliament.CodeTest.Data;

namespace UKParliament.CodeTest.Services;

public class PersonService : IPersonService
{
    private IPersonRepository _personRepository;

    public PersonService(IPersonRepository personRepository)
    {
        _personRepository = personRepository;
    }

    public void Delete(int id)
    {
        _personRepository.Delete(id);
    }

    public List<Person> Get()
    {
        return _personRepository.Get();
    }

    public Person Get(int id)
    {
        return _personRepository.Get(id);
    }

    public Person Add(Person person)
    {
        return _personRepository.Create(person);
    }

    public void Edit(int id, Person person)
    {
        _personRepository.Edit(id, person);
    }
}
