package com.example.connection_backend.service;

import com.example.connection_backend.model.BenhAn;
import com.example.connection_backend.repository.IBenhAnRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BenhAnService implements IBenhAnService {
    @Autowired
    IBenhAnRepository iBenhAnRepository;

    @Override
    public List<BenhAn> listAll() {
        return iBenhAnRepository.findAllPatient();
    }

    @Override
    public void create(BenhAn benhAn) {
    }

    @Override
    public void update(BenhAn benhAn) {

    }

    @Override
    public void delete(int id) {

    }

    @Override
    public BenhAn findById(int id) {
        return null;
    }

    @Override
    public List<BenhAn> findByName(String name) {
        return null;
    }
}
