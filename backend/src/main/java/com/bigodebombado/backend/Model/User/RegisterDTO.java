package com.bigodebombado.backend.Model.User;

public record RegisterDTO(String firstName, String lastName, String email, String password, UserRole role) {
}
