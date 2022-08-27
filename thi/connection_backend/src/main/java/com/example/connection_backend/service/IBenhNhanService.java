package com.example.connection_backend.service;

import com.example.connection_backend.model.BenhNhan;

import java.util.List;

public interface IBenhNhanService {
    List<BenhNhan> listAll();

    void create(BenhNhan benhNhan);

    void update(BenhNhan benhNhan);

    void delete(int id);

    BenhNhan findById(int id);
}
