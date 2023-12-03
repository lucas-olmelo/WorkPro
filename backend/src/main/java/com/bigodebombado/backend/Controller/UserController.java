package com.bigodebombado.backend.Controller;

import com.bigodebombado.backend.Exception.ResourceNotFoundException;
import com.bigodebombado.backend.Model.User.User;
import com.bigodebombado.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/workprousers")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById (@PathVariable(value = "id") Long userId) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
        return ResponseEntity.ok().body(user);
    }

//    @GetMapping("/users/{email}")
//    public ResponseEntity<User> getUserByEmail (@PathVariable(value = "email") String email, String password) throws ResourceNotFoundException {
//        User user = userRepository.findByEmail(email);
//        if (user != null) {
//            String userPassword = user.getPassword();
//
//            if (userPassword.equals(password)){
//                return ResponseEntity.ok().body(user);
//            } else {
//                throw new ResourceNotFoundException("Wrong password");
//            }
//        } else {
//            throw new ResourceNotFoundException("User not found for this email :: " + email);
//        }
//    }

    @PostMapping("/users")
    public User createUser(@Valid @RequestBody User user){
        return userRepository.save(user);
    }

//    @PutMapping("/users/{id}")
//    public ResponseEntity<User> updateUser (@PathVariable(value = "id") Long userId,
//                                            @Valid @RequestBody User userDetails) throws ResourceNotFoundException{
//        User user = userRepository.findById(userId)
//                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
//
//        user.setFirstName(userDetails.getFirstName());
//        user.setLastName(userDetails.getLastName());
//        user.setEmail(userDetails.getEmail());
//        user.setPassword(userDetails.getPassword());
//
//        final User updatedUser = userRepository.save(user);
//        return ResponseEntity.ok(updatedUser);
//    }

    @DeleteMapping("/users/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException{
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
