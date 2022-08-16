package com.example.projectemarketg3.service;


import com.example.projectemarketg3.entity.User;
import com.example.projectemarketg3.exception.NotFoundException;
import com.example.projectemarketg3.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private FileService fileService;
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email).orElseThrow(() -> {
            throw new UsernameNotFoundException("Not found email " + email);
        });
    }

    // Lưu user
    public void saveUser(User user) {
        userRepository.save(user);
    }

    // Lấy thông tin của user dựa trên email
    public Optional<User> getUser(String email) {
        return userRepository.findByEmail(email);
    }

    // Active user
    public void enableUser(String email) {
        userRepository.enableUser(email);
    }

    // Upload file
    public String uploadFile(Long id, MultipartFile file) {
        if(userRepository.findById(id).isEmpty()) {
            throw new NotFoundException("Không tồn tại user có id = " + id);
        }

        return fileService.uploadFile(id, file);
    }

    // Xem file
    public byte[] readFile(Long id, String fileId) {
        return fileService.readFile(id, fileId);
    }

    // Xóa file
    public void deleteFile(Long id, String fileId) {
        fileService.deleteFile(id, fileId);
    }

    // Lấy danh sách file
    public List<String> getFiles(Long id) {
        if(userRepository.findById(id).isEmpty()) {
            throw new NotFoundException("Không tồn tại user có id = " + id);
        }

        return fileService.getFiles(id);
    }

}
