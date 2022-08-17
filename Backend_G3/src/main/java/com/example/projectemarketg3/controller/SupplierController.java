package com.example.projectemarketg3.controller;


import com.example.projectemarketg3.entity.Supplier;
import com.example.projectemarketg3.exception.NotFoundException;
import com.example.projectemarketg3.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/supplier")
public class SupplierController {

    @Autowired
    private SupplierRepository supplierRepository;

    @GetMapping
    public List<Supplier> getAllSup(){
        return supplierRepository.findAll();
    }

    // create a new supplier rest api
    @PostMapping
    public Supplier createSupplier(@RequestBody Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    // get supplier by ID rest api
    @GetMapping("/{id}")
    public ResponseEntity<Supplier> getSupplierById(@PathVariable Long id) {
        Supplier supplier = supplierRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("supplier not exist with id :" + id));
        return ResponseEntity.ok(supplier);
    }

    // update supplier rest api
    @PutMapping("/{id}")
    public  ResponseEntity <Supplier> updatesupplier(@PathVariable Long id, @RequestParam String name){
        Supplier supplier = supplierRepository.findById(id)
                .orElseThrow (()->new NotFoundException
                        ("supplier not exist with id :" + id));

       supplier.setName(name);

       supplierRepository.save(supplier);

        return  ResponseEntity.ok(supplier);
    }

    // delete supplier rest api
    @DeleteMapping("/{id}")
    public ResponseEntity <Map<String, Boolean>> deleteSupplier(@PathVariable Long id){
        Supplier supplier = supplierRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("supplier not exist with id :" + id));
        supplierRepository.delete(supplier);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
