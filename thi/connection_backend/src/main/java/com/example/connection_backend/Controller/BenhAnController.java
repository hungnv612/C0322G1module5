package com.example.connection_backend.Controller;


import com.example.connection_backend.model.BenhAn;
import com.example.connection_backend.service.IBenhAnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/benhan/api/v1")
public class BenhAnController {
    @Autowired
    IBenhAnService benhAnService;

    @GetMapping("")
    public ResponseEntity<List<BenhAn>> listPatient() {
        List<BenhAn> patientList = benhAnService.listAll();
        if(patientList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(patientList,HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity addPatient(@RequestBody BenhAn benhAn){
        benhAnService.update(benhAn);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping("/delete")
    public ResponseEntity deletePatient(@PathVariable int id) {
        benhAnService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BenhAn> updatePatient(@PathVariable int id, @RequestBody BenhAn benhAn){
        BenhAn patient1 = benhAnService.findById(id);
        if(patient1 == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        patient1.setId(benhAn.getId());
        patient1.setBenhNhan(benhAn.getBenhNhan());
        patient1.setNgayNhapVien(benhAn.getNgayNhapVien());
        patient1.setNgayRaVien(benhAn.getNgayRaVien());
        patient1.setLyDo(benhAn.getLyDo());
        patient1.setPhuongPhap(benhAn.getPhuongPhap());
        patient1.setBacSi(benhAn.getBacSi());

        benhAnService.update(patient1);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<BenhAn>>searchPatient(@RequestParam("search") String search){
        List<BenhAn> patients = benhAnService.findByName(search);
        if(patients.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
