package com.example.connection_backend.service;

import com.example.connection_backend.model.BenhAn;

import java.util.List;

public interface IBenhAnService {
    List<BenhAn> listAll();

    void create(BenhAn benhAns);

    void update(BenhAn benhAns);

    void delete(int id);

    BenhAn findById(int id);

    List<BenhAn> findByName(String name);
}
