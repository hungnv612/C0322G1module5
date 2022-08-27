package com.example.connection_backend.service;

import com.example.connection_backend.model.BenhNhan;
import com.example.connection_backend.repository.IBenhNhanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BenhNhanService implements IBenhNhanService {

    @Autowired
    IBenhNhanRepository iBenhNhanRepository;

    @Override
    public List<BenhNhan> listAll() {
        return iBenhNhanRepository.listPatienter();
    }

    @Override
    public void create(BenhNhan benhNhan) {

    }

    @Override
    public void update(BenhNhan benhNhan) {

    }

    @Override
    public void delete(int id) {

    }

    @Override
    public BenhNhan findById(int id) {
        return null;
    }
}
