package com.example.projectemarketg3.service;

import com.example.projectemarketg3.exception.NotFoundException;
import com.example.projectemarketg3.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private FileService fileService;
    @Autowired
    private ProductRepository productRepository;


    //    Upload file
    public String uploadFile(Long id, MultipartFile file){
        if(productRepository.findById(id).isEmpty()){
            throw new NotFoundException("khong ton tai san pham co id = " + id);
        }
        return fileService.uploadFile(id,file);
    }

//    xem file
    public byte[] readFile(Long id, String fileId){
        return fileService.readFile(id,fileId);
    }
//    Xoa file
    public String deleteFile(Long id,String fileId){
        fileService.deleteFile(id,fileId);
        return "xoa thanh cong";
    }

//    lay danh sach file
    public List<String> getFile(Long id){
        if(productRepository.findById(id).isEmpty()){
            throw new NotFoundException("khong ton tai product co id = " + id);
        }
        return fileService.getFiles(id);
    }

}
